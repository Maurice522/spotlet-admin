import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import Contact from '../datatable/ContactTable'


const LocaReq = () => {
    return (
        <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <Contact />
                </div>
            </div>

        </div>
    )
}

export default LocaReq