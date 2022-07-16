import React, { useRef, useEffect, useState } from "react";

import "./Map.css";

function Map() {
  const mapRef = useRef();

  const wilsonville = { lat: 33.29253783911559, lng: -86.55320283083985 };
  const center = wilsonville;
  const zoom = 10;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  // google.maps.event.addDomListener(window, "load", initialize);

  return <div ref={mapRef} className={"map"}></div>;
}

export default Map;
