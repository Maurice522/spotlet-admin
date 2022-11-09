import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import Blog from '../datatable/Blog'


const Blogs = () => {
  return (
    <div>
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Blog/>
            </div>
        </div>

    </div>
)
}

export default Blogs