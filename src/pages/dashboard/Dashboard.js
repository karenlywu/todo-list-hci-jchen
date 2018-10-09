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

// Charts
import LineChart from '../charts/charts/LineChart';
import BarChart from '../charts/charts/BarChart';
import PercentAreaChart from '../charts/charts/PercentAreaChart';
import PieChart from '../charts/charts/PieChart';

const data = [
  {name: '10/1/18', uv: 3},
  {name: '10/2/18', uv: 2},
  {name: '10/3/18', uv: 0},
  {name: '10/4/18', uv: 2},
  {name: '10/5/18', uv: 1},
  {name: '10/6/18', uv: 4},
  {name: '10/7/18', uv: 2},
];

const data2 = [
  {name: 'Incomplete', uv: 4},
  {name: 'Complete', uv: 3},
];

import Widget from '../../components/Widget';

import { fetchPosts } from '../../actions/posts';
import s from './Dashboard.scss';

import TaskList from '../../components/TaskList/TaskList.js'

class Dashboard extends Component {
  /* eslint-disable */
  static propTypes = {
    posts: PropTypes.any,
    isFetching: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };
  /* eslint-enable */

  static defaultProps = {
    posts: [],
    isFetching: false,
  };

  state = {
    isDropdownOpened: false
  };

  componentWillMount() {
    this.props.dispatch(fetchPosts());
  }

  toggleDropdown = () => {
    this.setState(prevState => ({
      isDropdownOpened: !prevState.isDropdownOpened,
    }));
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem active>Dashboard</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="page-title mb-lg"><span className="fw-semi-bold">Quick Analysis</span></h1>
        <button type="button" className="btn btn-outline-primary"><i className="fa fa-calendar"/> 10/01/18 - 10/07/18</button>
        <Row>
          <Col xs={12} md={6}>
            <Widget
              title={<h5><span className="fw-semi-bold">Productivity</span></h5>}>
              <BarChart data={data} />
            </Widget>
          </Col>
          <Col xs={12} md={6}>
            <Widget
              title={<h5><span className="fw-semi-bold">Current Tasks</span></h5>}>
              <PieChart data={data2}/>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.posts,
  };
}

export default connect(mapStateToProps)(withStyles(s)(Dashboard));
