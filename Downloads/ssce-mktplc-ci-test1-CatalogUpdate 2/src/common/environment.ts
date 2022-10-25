export const devEnvironment: boolean =
  (window as any)._env_?.REACT_APP_DEV_ENVIRONMENT ||
  process.env.REACT_APP_DEV_ENVIRONMENT === 'true';
