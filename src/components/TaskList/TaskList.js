import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Widget from '../../components/Widget';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import Task from './Task'

  const fakeProps = [
    {
      title: "Buy groceries",
      priority: 2,
      dueDate: "10/25/18",
      completed: false
    },
    {   
      title: "Replace car battery",
      priority: 8,
      dueDate: "11/02/18",
      completed: false
    },
    {
      title: "Do HCI homework",
      priority: 2,
      dueDate: "10/09/18",
      completed: false
    }
  ];


class TaskList extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };



  static defaultProps = {
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {tasks: props.tasks};
    this.addTask = this.addTask.bind(this);
  }

  addTask(){
    const nTasks = this.state.tasks.push({});
    this.setState(tasks : nTasks);
    render();

  }

  renderTasks = (tasks) =>{
        if(tasks != null){
          
          return(tasks.map( task =>

            <Task 
            title={task.title}
            priority={task.priority}
            dueDate={task.dueDate}
            completed={task.completed}

            ></Task>
            )
          );
        }
        else{
           return(fakeProps.map( task =>
              <Task 
              title={task.title}
              priority={task.priority}
              dueDate={task.dueDate}
              completed={task.completed}

              ></Task>
              ));
          }

        
    

  }

  
  render() {
    return (
    <div>
    <Link to="/app/todo"></Link>
      <Widget className="widget-table-overflow">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-sm-9">Task</th>
              <th className="col-sm-1">Priority <button className="glyphicon glyphicon-sort"></button></th>
              <th className="col-sm-1">Due Date <button className="glyphicon glyphicon-sort"></button></th>
              <th className="col-sm-1">Completed</th>
            </tr>
            </thead>
          <tbody>
            {this.renderTasks(this.state.tasks)}
          </tbody>
          <tfoot>
            <th colSpan="4">
              <button className="glyphicon glyphicon-plus" onChange={this.addTask}>
              </button>
            </th>
          </tfoot>        
        </table>
      </Widget>
    </div>
    );
  }
}

export default withStyles()(TaskList);
