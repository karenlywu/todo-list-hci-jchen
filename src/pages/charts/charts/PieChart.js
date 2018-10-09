import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts';

const COLORS = ['#bf0000', '#55c300', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180; 
const data = [
  {name: 'Incomplete', value: 4},
  {name: 'Complete', value: 3},
];                   

class SimplePieChart extends PureComponent {

	render () {
  	return (
      <ResponsiveContainer height={300} width='100%'>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Legend verticalAlign="top" height={36}/>
          <Pie
            data={data} 
            cx='50%' 
            cy={100} 
            labelLine={false}
            label={true}
            outerRadius={70} 
            fill="#8884d8"
            dataKey="value"
            legendType="square"
          >
            {
              data.map((entry, index) => <Cell key={entry} fill={COLORS[index % COLORS.length]}/>)
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default SimplePieChart;
