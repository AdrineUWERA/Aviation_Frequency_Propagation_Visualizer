import { Map, Marker, GoogleApiWrapper, Circle } from 'google-maps-react';
import { Component } from 'react';

export class MapContainer extends Component {
  render() {
    const style = {width: '98%', height: '98%'}
    const center = {lat:-1.940278, lng:29.873888}
    let iconMarker = new window.google.maps.MarkerImage("https://1.bp.blogspot.com/-4NLtyNEaY9s/W3o_WLtkKGI/AAAAAAAAAl0/nQ9pgi_D7ZgdOTmEUw049M4l_BbYj057wCLcBGAs/s1600/w1.png",
     null, null, null, new window.google.maps.Size(32,32) )
    return (
        <div className="container col-md-12 ms-0 me-0 mt-2 mb-2">
      <Map google={this.props.google} 
        zoom={10}
        style = { style }
        initialCenter ={center}
        > 
        <Marker icon={iconMarker}/> 
        <Circle
            radius={1200} // unit is m and t must km
            center={center}
            onMouseover={() => console.log('mouseover')}
            onClick={() => console.log('click')}
            onMouseout={() => console.log('mouseout')}
            strokeColor='transparent'
            strokeOpacity={0}
            strokeWeight={5}
            fillColor='#FF0000'
            fillOpacity={0.2}
        />
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
    apiKey: "AIzaSyAlWnvLoFl72OeO3FpOkFBObwN5Vr6EkZA"
})(MapContainer);