import React, { PureComponent } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];

const COLORS = ['#0979B5', '#5CCAED', '#F488B6', '#9654F4'];
export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/two-simple-pie-chart-otx9h';

  render() {
    return (
      <ResponsiveContainer width="70%" height="70%">
        <PieChart width={300} height={300}>
        {data01.map((name, value) => (
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill={COLORS[value % COLORS.length]}
            label
          />
          ))}
          {data01.map((entry, index) => (
          <Pie dataKey="value"   data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill={COLORS[3 % COLORS.length]} />
          ))}
        
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
