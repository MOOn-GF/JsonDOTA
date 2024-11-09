import React from 'react'
import st from './Com.module.css'
function Com({text}) {
  return (
    <>
    
    <div className={st.com}>В простонароде:"{text}"</div>
    </>
  )
}

export default Com