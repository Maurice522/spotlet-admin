import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import LocReq from '../datatable/LocReqTable'

const LocaReq = () => {
  return (
    <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <LocReq/>
                </div>
            </div>            
        </div>
  )
}

export default LocaReq