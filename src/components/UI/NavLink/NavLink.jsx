import React from 'react'
import st from "./NavLink.module.css"

function NavLInk({link, text,  size}) {
  return (
    <a style={{  fontSize: size }} className={st.link} href={link}>{text}</a>
  )
}

export default NavLInk