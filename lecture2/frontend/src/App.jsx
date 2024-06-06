import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([]);

useEffect(()=>{
  axios.get('/api/jokes')
  .then((resp)=>{
    setjokes(resp.data)
  })
  .catch((err)=>{
    console.log(err);
  })
},[])
function setNewJoke(e){
  if(e && e.key == 'Enter' && e.target.value.length > 0){
    const newjoke =  {title:'new Joke',
    content:e.target.value,
    id: new Date().getTime()
    }
  setjokes(
    prev=>[...prev,newjoke]
  )
  e.target.value = '';
  }
}

  return (
    <>
    <div>
    <input type='text' onKeyDown={
      (e)=>{
        setNewJoke(e)
      }
      } />
      </div>
      <h1>Laugh out loud</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
