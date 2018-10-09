import React, {Component} from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Row,
  Col,
  Alert,
  Button,
  ButtonGroup,
  Breadcrumb,
  BreadcrumbItem,
  Progress,
  Badge,
  ListGroup,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Table
} from 'reactstrap';


import Widget from '../../components/Widget';

import { fetchPosts } from '../../actions/posts';
import s from './Static.scss';

import TaskList from '../../components/TaskList/TaskList.js'



class Todo extends Component {

  render() {
    const completedTasks = [
    {
      title: "Hot Date!",
      priority: 2,
      dueDate: "10/25/18",
      completed: true
    },
    {   
      title: "Meal Prep",
      priority: 8,
      dueDate: "11/02/18",
      completed: true
    },
    {
      title: "Do HCI homework",
      priority: 2,
      dueDate: "10/09/18",
      completed: true
    }
  ]; 
  const incompletedTasks = [
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
    },
    {
      title: "Do EE205A homework",
      priority: 2,
      dueDate: "10/09/18",
      completed: false
    },
    {
      title: "",
      priority: "",
      dueDate: "",
      completed: false
    }
  ]; 

    return (
      <div className={s.root}>
        <Breadcrumb>
          <BreadcrumbItem active>To Do List</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg"><span className="fw-semi-bold">You can do this!</span></h1>
        <TaskList tasks={incompletedTasks}>
        </TaskList>
        <h1 className="page-title mb-lg"><span className="fw-semi-bold">You did it!</span></h1>
        <TaskList tasks={completedTasks}>
        </TaskList>
      </div>
    );
  }
}
  

export default withStyles(s)(Todo);
