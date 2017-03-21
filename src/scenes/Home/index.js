import React from 'react'
import Content from '../../components/Content'
import Status from './components/Status'
import Compose from './components/Compose'
import { connect } from 'react-redux'
import { fetchList } from '../../data/status/actions'
import { getAllStatus } from '../../data/status/reducer'

class Home extends React.Component {
  handleSubmit = (value) => {
    window.alert(value)
  }

  componentDidMount () {
    this.props.fetchList()
  }

  render () {
    const { status } = this.props

    return (
      <div>
        <Content>
          <h1>MICRO STATUS</h1>
        </Content>

        <Content>
          <Compose onSubmit={this.handleSubmit} />
        </Content>

        <Content>
          {status.map( (statusItem) => <Status status={statusItem} key={statusItem._id} /> )}
        </Content>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  status: getAllStatus(state)
})

export default connect(mapStateToProps, {
  fetchList
})(Home)
