import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from '../actions/index.js'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {
            this.props.bands.map((band, index) => {
              return <li key={index}>{band.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}


export default connect( state => ({ bands: state.bands }), { addBand })(BandsContainer)
