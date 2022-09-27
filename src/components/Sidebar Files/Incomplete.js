import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import Incomplete1 from '../datatable/Incomplete1'

const Incomplete = () => {
  return (
    <div>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <Incomplete1/>
                </div>
            </div>
            )
        </div>
  )
}

export default Incomplete