import React from "react";
import "../App.css";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "typeface-titillium-web";
import "typeface-roboto-mono";
import "typeface-lora";

export const HeaderBar = () => {
  return (
    <>
      {/* <Header small={false} theme="" type="slim">
      
      </Header> */}
      <div className="row m-0" style={{ backgroundColor: '#0059b3' }}>
       
        {/** TITLE + LOGO*/}
        <div className="col-12 d-flex flex-column justify-content-center mainBanner">
          <div className="d-flex justify-content-center">
            <img src="logo.png" alt="Logo" className="main-logo" />
            <span className="pl-3">Report Vaccini Anti COVID-19</span>
          </div>
        </div>
      </div>
    </>
  );
};
