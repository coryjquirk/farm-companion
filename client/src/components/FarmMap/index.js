import React, { useState, useEffect } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function FarmMap() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className="mapouter">
      <p>
        Farm office:{" "}
        <a
          href="https://goo.gl/maps/gcy4iYH8Ked2PVqU6"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
              id="goinHome"
              icon={faLink}
              className="fas fa-home"
            />{" "}941 Lafond Ave, St Paul, MN 55104
        </a>{" "}(Google Maps link)
      </p>
      <p>
        Minnehaha side:{" "}
        <a
          href="https://goo.gl/maps/EXZdN6X7u81THngi7"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
              id="goinHome"
              icon={faLink}
              className="fas fa-home"
            />{" "}946 Minnehaha Ave W St Paul, MN 55104
        </a>{" "}(Google Maps link)
      </p>
      {loading === false ? (

      <div className="gmap_canvas">
        <iframe src="https://storymaps.arcgis.com/stories/52354515142b4631a1e09d402743d36e?cover=false" width="100%"id="gmap_canvas"
 height="500px" title="ArcGISstorymap" frameBorder="0" allowFullScreen allow="geolocation"></iframe>
        <iframe
          title="farm map"
          width="646"
          height="491"
          src="https://maps.google.com/maps?q=941%20Lafond%20Ave,%20St%20Paul,%20MN%2055104&t=&z=17&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
      ) : (
        <img
          id="loadingScrn"
          src="https://i.imgur.com/ZljUeZh.gif"
          alt="loadingscreen"
        ></img>
      )}
      <a href="/">
        <button id="goinHomeBtn" type="button" className="btn btn-success">
          <span>
            <FontAwesomeIcon
              id="goinHome"
              icon={faArrowLeft}
              className="fas fa-home"
            />{" "}
            Return home{" "}
            <FontAwesomeIcon id="goinHome" icon={faHome} className="fas fa-home" />
          </span>
        </button>
      </a>
      </div>
  );
}

export default FarmMap;
