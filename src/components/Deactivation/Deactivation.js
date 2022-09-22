import { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import DeactTable from '../datatable/DeactTable'
import './deactivation.scss'




const Deactivation = () => {

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <DeactTable />
            </div>
        </div>
    )
}

export default Deactivation