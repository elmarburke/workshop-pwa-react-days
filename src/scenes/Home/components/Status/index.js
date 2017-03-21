// src/scenes/Home/components/Status/index.js

import React, { Component } from 'react'
import moment from 'moment'

// NUR IM WORKSHOP SO MACHEN!!! STYLED COMPONENTS SEPERAT!!!
import styled from 'styled-components'

const StatusWrapper = styled.div`
  height: 5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StatusFooter = styled.footer`
  font-size: .75em;
  color: #777777;
  align-self: flex-end;
`

class Status extends Component {
  render () {
    const { status } = this.props

    const readableDate = moment(status.time).format('HH:mm DD.MM.YYYY')

    return (
      <StatusWrapper>
        {status.text}
        <StatusFooter>
          {readableDate}
        </StatusFooter>
      </StatusWrapper>
    )
  }
}

export default Status
