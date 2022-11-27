import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Photoshootreq from "../datatable/PhotoShootReqTable";

const Photoshoot = () => {
  return (
    <div>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Navbar />
          <Photoshootreq />
        </div>
      </div>
    </div>
  );
};

export default Photoshoot;