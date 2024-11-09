
import React,{useState, useEffect} from 'react'
import Layout from './components/Layout/Layout'
import List from './components/List/List';
function App()
 {
  const [dota, setDota] = useState([]);


  useEffect(() => {
    fetch('/dota.json')
      .then((response) => response.json())
      .then((data) => {
       console.log(data);
       setDota(data)
      });
  },[] );
  return (
    <>
    <Layout>
      <List arr={dota}></List>
    </Layout>
   <>
 
    </>
    </>
  )
}

export default App