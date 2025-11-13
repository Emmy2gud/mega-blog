import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '1000px',
  height: '400px',
  radius: '55px',
  
}

const center = {
  lat: -3.745,
  lng: -38.523,
}
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY
function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY || '',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      radius={55}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(Map)