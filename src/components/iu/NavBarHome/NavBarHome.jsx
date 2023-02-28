import React from 'react'
import { Link } from 'react-router-dom';
import Style from './NavBarHome.module.css';

const Items = [
  { title: "Tweet", url: "/Tweet" }
];


export const NavBarHome = () => {

  return (
    <nav className={Style.navbar}>
      <h2 className={Style.h2}>TWEETS EJERCICIO</h2>
      <ul className={Style.menu}>
        {
          Items.map((item) => (
            <li><Link to={item.url} className={Style.a}>{item.title}</Link></li>
          ))
        }
      </ul>
    </nav>
  )
}
