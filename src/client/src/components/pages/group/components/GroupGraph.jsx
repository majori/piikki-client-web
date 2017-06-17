import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, Bar, Tooltip, XAxis, YAxis } from 'recharts';

const GroupGraph = (props) => (
  <div className = "group-graph white z-depth-1">
    <ResponsiveContainer height={400}>
      <BarChart data={props.groupSaldos}>
        <XAxis dataKey="timestamp" />
        <YAxis datakey="saldo" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="saldo" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default GroupGraph;
