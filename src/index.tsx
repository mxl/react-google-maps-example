import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'

const rootId = 'root'
const root = document.getElementById(rootId)

const someLatLng = {lat: 55.751244, lng: 37.618423}
export const googleMapURL = 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC3X8Kd0BKSw1dSPFf4OKgdstwCvnGFeL8'

if (root) {
    const MyGoogleMap = withScriptjs(withGoogleMap(() =>
        <GoogleMap
            defaultCenter={someLatLng}
            defaultZoom={16}
            options={{disableDefaultUI: true}}>
        </GoogleMap>))
    const loadingElement = <div/>
    const containerElement = <div style={{height: '100vh'}}/>
    const mapElement = <div style={{height: '100vh'}}/>
    const map = <MyGoogleMap loadingElement={loadingElement}
                             containerElement={containerElement}
                             googleMapURL={googleMapURL}
                             mapElement={mapElement}/>

    ReactDOM.render(
        <div style={{height: '100vh'}}>
            {map}
        </div>,
        root)
}
