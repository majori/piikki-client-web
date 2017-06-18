// @flow
import React from 'react';

type AxisLabelProps = {
  axisType: 'xAxis' | 'yAxis';
  x: number;
  y: number;
  width: number;
  height: number;
  stroke: number;
  children: Node;
};

const AxisLabel = ({ axisType, x, y, width, height, stroke, children }: AxisLabelProps) => {
  const isVert = axisType === 'yAxis';
  const cx = isVert ? x + 20 : x + (width / 2);
  const cy = isVert ? (height / 2) + y : y + height + 5;
  const rot = isVert ? `270 ${cx} ${cy}` : 0;
  return (
    <text x={cx} y={cy} transform={`rotate(${rot})`} textAnchor="middle" stroke={stroke}>
      {children}
    </text>
  );
};

export default AxisLabel;
