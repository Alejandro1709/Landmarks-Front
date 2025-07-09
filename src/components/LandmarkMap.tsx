import { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getLandmarks } from '../services/landmarkServices'
import type { Landmarks } from '../types'

export default function LandmarkMap() {
  const [viewState, setViewState] = useState({
    longitude: -77.03542,
    latitude: -12.06973,
    zoom: 10,
  })

  const [landmarks, setLandmarks] = useState<Landmarks>([])

  useEffect(() => {
    getLandmarks()
      .then((data: Landmarks) => {
        setLandmarks(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="w-full flex-1">
      <Map
        {...viewState}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
        onMove={(e) => setViewState(e.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        {landmarks.map((lm) => (
          <Marker longitude={lm.longitude} latitude={lm.latitude} key={lm._id}>
            <div className="w-[140px] bg-white rounded-md shadow-md overflow-hidden">
              <img
                src={lm.image}
                alt={lm.title}
                style={{ width: '100%', height: '120px', objectFit: 'cover' }}
              />
              <div className="p-4">
                <h4 style={{ margin: 0 }}>{lm.title}</h4>
              </div>
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  )
}
