import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Mybooks = () => {
  return (
    <div className="Page">
      <div className="mybooks-nav">
        <Link to="/mybooks/Allbooks">Все</Link>
        <Link to="/mybooks/Reading">Читаю</Link>
        <Link to="/mybooks/Endreading">Прочитано</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Mybooks