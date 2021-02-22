import React from "react";
import GoogleMaps from "simple-react-google-maps";

const Map = () => {
  return (
    <div>
      <GoogleMaps
        apiKey={"AIzaSyCkoK2Tsd8SPNU01NJZXVtWus5Qwg4Fcqk"}
        style={{ height: "400px", width: "700px" }}
        zoom={15}
        center={{
          lat: -32.92690293517822,
          lng: -60.75023704606098
        }}
      />
    </div>
  );
};

export default Map;
