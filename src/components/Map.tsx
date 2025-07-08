import { useEffect, useRef } from 'react'
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getLandmarks } from '../services/landmarkServices'
import type { Landmarks } from '../types'

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<MapboxMap | null>(null)

  useEffect(() => {
    if (map.current || !mapContainer.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-77.03542, -12.06973],
      zoom: 12,
    })

    getLandmarks()
      .then((data: Landmarks) => {
        data.forEach((loc) => {
          new mapboxgl.Marker()
            .setLngLat([loc.longitude, loc.latitude])
            .setPopup(new mapboxgl.Popup().setText(loc.title))
            .addTo(map.current!)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <div ref={mapContainer} className="w-full flex-1" />
}
