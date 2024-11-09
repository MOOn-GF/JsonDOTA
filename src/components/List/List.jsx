import React from 'react'
import Name from '../UI/Name/Name'
import Role from '../UI/Role/Role'
import Atribute from '../UI/Atribute/Atribute'
import st from './List.module.css'
import Com from '../UI/Com/Com'

function List({arr}) {

    
  return (
    <>
    <ul className={st.list}>
        {arr.map((e,i) => (
        <li key={e.id}> 
        <div className={st.box}>
            <img src={e.img} alt="" />
            <Name text={e.name}></Name>
            <Role text={e.role}></Role>
            <Atribute text={e.primaryAttribute}></Atribute></div>
            <Com text={e.com}></Com>
        </li>
))}
    </ul>
    </>
  )
}

export default List