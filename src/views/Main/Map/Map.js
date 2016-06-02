import React, { PropTypes as T } from 'react'
import classnames from 'classnames'
import Map, { Marker } from 'google-maps-react'

import styles from './styles.module.css'

export class MapComponent extends React.Component {
  onReady(mapProps, map) {
    const {google} = this.props;

  }
  renderMarkers() {
    if (!this.props.places) { return null; }
    return this.props.places.map(place =>{
      return <Marker key={place.id}
                name={place.id}
                place={place}
                position={place.geometry.location}
              />
    })
  }
  render() {
    return (
      <Map  zoom={14} google={this.props.google}
            className={styles.map}
            centerAroundCurrentLocation={true}
            onReady={this.onReady.bind(this)}
            >
             {this.renderMarkers()}
      </Map>
    )
  }
}

export default MapComponent
