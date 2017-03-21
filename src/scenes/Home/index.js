import React from 'react'
import Content from '../../components/Content'
import Status from './components/Status'

class Home extends React.Component {
  render () {
    return (
      <div>
        <Content>
          <h1>MICRO STATUS</h1>
        </Content>

        <Content>
          <Status status={{ text: 'Hallo Welt', time: '2017-03-12T11:28:04' }} />
        </Content>
      </div>
    )
  }
}

export default Home
