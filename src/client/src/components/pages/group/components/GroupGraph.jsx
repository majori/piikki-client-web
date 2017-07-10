// @flow
import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, Bar, Tooltip, XAxis, YAxis } from 'recharts';

import Card from '../../../common/Card';
import LoadingIcon from '../../../common/LoadingIcon';
import AxisLabel from '../../../common/AxisLabel';

type GroupGraphProps = {
  groupSaldos: any[];
  loading: boolean;
};

const GroupGraph = (props: GroupGraphProps) => (
  <Card className="group-graph">
    {
      (props.loading) ?
        <LoadingIcon /> :
        (
          <ResponsiveContainer height={360}>
            <BarChart data={props.groupSaldos}>
              <XAxis dataKey="timestamp" label={({ viewBox }) => <AxisLabel {...viewBox} axisType="xAxis">Date</AxisLabel>} />
              <YAxis datakey="saldo" label={({ viewBox }) => <AxisLabel {...viewBox} axisType="yAxis">Overall balance (€)</AxisLabel>} />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Bar dataKey="saldo" name="Saldo" fill="#5b69bf" />
            </BarChart>
          </ResponsiveContainer>
        )
    }
  </Card>
);

export default GroupGraph;
