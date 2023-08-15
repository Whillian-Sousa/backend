'use client'
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  with: "100%",
  height: "100vh",
  maxHeight: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const MapContainer = () => {
  const markers = [
    {lat: -19.899613, lng: -43.9314789},
    {lat: -12.89965, lng: -43.7364789},
    {lat: -12.82919, lng: -43.987981},
    {lat: -19.968614, lng: -43.405302}
  ]
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  if (!apiKey) throw new Error("API KEY NOT FOUND");
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });
  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {markers.map((marker, index) => (
        <Marker key={index} position={{lat:marker.lat, lng:marker.lng}}/>
      ))}
    </GoogleMap>
  ) : (
    <>
      {""}
      <p>Carregando...</p>
    </>
  );
};
