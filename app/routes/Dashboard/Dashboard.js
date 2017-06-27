import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {StyleSheet, css} from 'aphrodite'

import * as DashboardActions from './actions'

class Dashboard extends Component {

  static readyOnActions(dispatch) {
    return Promise.all([
    ]);
  }

  constructor(props){
    super(props)
  }

  componentDidMount() {
    let { dispatch, dashboardActions} = this.props
    Dashboard.readyOnActions(dispatch)

  }

  render(){
    let {
			dashboardActions,
			activeSlideId
    } = this.props
    return <div>
      <Helmet
        title={'Dashboard'}
        meta={[ {'name': 'Dashboard', 'content': "Dashboard"} ]}
      />
      <div>This is another page just to show that routing is working.</div>
      <Link to="/">Go to back to the home page!</Link>
      <br/> <br/> <br/>
      <h4 className={css(styles.title)}>A Styled Title with inline styles</h4>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    activeSlideId: state.getIn(['dashboard', 'activeSlideId'])
  }
}

function mapDispatchToProps(dispatch){
    return {
        dashboardActions: bindActionCreators(DashboardActions, dispatch),
        dispatch
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

let styles = StyleSheet.create({
    title: {
      color: 'grey',
      fontWeight: 'bold'
    }
})
