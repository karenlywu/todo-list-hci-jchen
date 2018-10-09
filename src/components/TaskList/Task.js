/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Link } from 'react-router-dom';

class Task extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    priority: PropTypes.number,
    dueDate: PropTypes.string,
    completed: PropTypes.bool
  };

  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      priority: this.props.priority,
      dueDate: this.props.dueDate,
      completed: this.props.completed,
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {

    const target=event.target;
    const name=target.name;
    const value=target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <tr>
        <td>
          <input name="title" type="text" className="container-fluid" value={this.state.title} onChange={this.handleChange}/>
        </td>
        <td>
          <input name="priority" type="number" value={this.state.priority} onChange={this.handleChange}/>
        </td>
        <td>
          <input name="dueDate" type="text" value={this.state.dueDate} onChange={this.handleChange}/>
        </td>
        <td>
          <input name="completed" type="checkbox" checked={this.state.completed} onChange={this.handleChange}/>
        </td>
        <td>
          <button className="glyphicon glyphicon-trash"></button>
        </td>
      </tr>
    );
  }
}

export default withStyles()(Task);
