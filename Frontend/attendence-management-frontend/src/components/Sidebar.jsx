import React from 'react'

function Sidebar() {
    return (
        <div className="list-group mt-3">
            <a href="#" className="list-group-item list-group-item-action active">Dashboard</a>
            <a href="students.html" className="list-group-item list-group-item-action">Students</a>
            <a href="attendance.html" className="list-group-item list-group-item-action">Attendance</a>
            <a href="reports.html" className="list-group-item list-group-item-action">Reports</a>
        </div>
    )
}

export default Sidebar