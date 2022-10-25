import '@testing-library/jest-dom/extend-expect';
import { cleanup, render, screen, waitFor } from '@testing-library/react/pure';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import configureStore from '../../../redux/store';
import NavRail from './NavRail';

// NavRail is connected to redux
// We must use a real store in order for it to work
const store = configureStore();
describe('NavRail Component', () => {
  const server = setupServer(
    rest.get('/undefinedapi/isAdmin', (req, res, ctx) => {
      return res(ctx.json({}));
    }),
    // the responses mean nothing to the tests with these requests
    // it is good practice to handle and mock all requests regardless
    rest.get('/undefinedapi/user', (req, res, ctx) => {
      return res(ctx.json({}));
    }),
    rest.get('/undefinedapi/userGroup', (req, res, ctx) => {
      return res(ctx.json({}));
    }),
    rest.get('/undefinedapi/contextPermissions', (req, res, ctx) => {
      return res(ctx.json({}));
    }),
  );
  beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
  afterEach(() => server.resetHandlers());
  afterAll(() => {
    cleanup();
    server.close();
  });

  it('Renders successfully and admin button exists', async () => {
    render(
      <Provider store={store}>
        <NavRail />
      </Provider>,
    );
    // we must await becuase a useEffect calls /isAdmin, which isn't instant
    // also because if a change happens to the component
    // we must test or wait for that change, if not an error will appear
    await waitFor(() => screen.getByLabelText('Admin'));
  });

  it('Check for Workspace button', () => {
    screen.getByLabelText('Workspace');
  });

  it('Check for Report Deigner Button to not exist', () => {
    expect(screen.queryByLabelText('Report Designer')).toBeNull();
  });

  it('Admin button not present with no admin permissions', async () => {
    const isAdminCallback = jest.fn();
    server.use(
      rest.get('/undefinedapi/isAdmin', (req, res, ctx) => {
        isAdminCallback();
        return res(ctx.json(null));
      }),
    );
    cleanup();
    render(
      <Provider store={store}>
        <NavRail />
      </Provider>,
    );
    // there is no way to wait for an element
    // to not exist in the future while it already doesn't exist
    // waiting for callback ensures the useEffect has updated the component
    await waitFor(() => expect(isAdminCallback).toBeCalled());
    await waitFor(() => screen.getByLabelText('Workspace'));

    expect(screen.queryByLabelText('Admin')).toBeNull();
  });
});
