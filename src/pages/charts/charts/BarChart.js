import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

class SimpleBarChart extends PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      uv: PropTypes.number,
    })).isRequired,
  }

	render () {
  	return (
      <ResponsiveContainer height={300} width='100%'>
        <BarChart 
          width={600} 
          height={300} 
          data={this.props.data} 
          margin={{top: 20, left: -10}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis yAxisId="left" orientation="left" stroke="#00abff"/>
          <Tooltip/>
          <Legend />
          <Bar yAxisId="left" dataKey="uv" fill="#00abff" name="Tasks Finished"/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleBarChart;
