// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const center = {
//   lat: 51.116,
//   lng: 71.439,
// };

// const Map = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
//   });

//   if (loadError) return <div>Ошибка загрузки карты</div>;
//   if (!isLoaded) return <div>Загрузка карты...</div>;

//   return (
//     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
//       <Marker position={center} />
//     </GoogleMap>
//   );
// };

// export default Map;
