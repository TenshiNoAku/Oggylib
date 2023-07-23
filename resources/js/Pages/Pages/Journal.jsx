import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Journal = () => {
  return (
    <div className="Page">
      <div className="journal-nav">
        <Link to="/journal/Alljournal">Все</Link>
        <Link to="/journal/Booked">Забронировано</Link>
        <Link to="/journal/Free">Свободно</Link>
        <Link to="/journal/Latecomers">Опаздавшие</Link>
        <Link to="/journal/Readersnow">Читающие</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Journal