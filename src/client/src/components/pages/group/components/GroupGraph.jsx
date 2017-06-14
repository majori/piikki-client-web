import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const GroupGraph = (props) => (
  <LineChart width={400} height={400} data={props.groupSaldos}>
    <XAxis dataKey="timestamp" />
    <YAxis datakey="saldo" />
    <Line type="monotone" dataKey="saldo" stroke="#8884d8" />
  </LineChart>
);

export default GroupGraph;
