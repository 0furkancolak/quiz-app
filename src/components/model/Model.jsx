import React from "react";
import "./Model.css";
import "./tebriks.mp4"

const Model = ({ score }) => {
  return (
    <div className="model">
      <div className="model-title">Skor : {score} / 1000</div>
      <hr />  
      <div className="abarti">
        <h5 className="abarti-h2">Videoyu başlat,dikkat sesli⚠️</h5>
        <video controls autoplay width="200px" height="400px">
          <source autoplay src={require("./tebriks.mp4")} />
        </video>
        <hr />
      </div>
      <div onClick={() => (window.location = "/")} className="model-btn">
        Yeni Oyun
      </div>
    </div>
  );
};

export default Model;
