import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from "../navbar/Navbar"
import Transaction from '../datatable/TransactionTable'


const Transactions = () => {
  return (
    <div>
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Transaction/>
            </div>
        </div>

    </div>
)
}

export default Transactions