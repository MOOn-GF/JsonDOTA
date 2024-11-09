import React from 'react'
import NavLInk from '../UI/NavLink/NavLink'
import Logo from '../UI/Logo/Logo'
import st from './Nav.module.css'
function Nav() {
  return (
    <div className={st.Nav}>

        <Logo text="DOTA2"></Logo>
<ul className={st.list}>
          <li className={st.list__link}>
            <NavLInk text="HOME"  size="25px" link="https://www.dota2.com/home"/>
          </li>
          <li className={st.list__link}>
          <NavLInk text="MAIN"  size="25px" link="https://www.dota2.com/home"/>
          </li>
          <li className={st.list__link}>
          <NavLInk text="ABOUT"  size="25px" link="https://www.dota2.com/home"/>
          </li>
        </ul>

    </div>
  )
}

export default Nav