import logo from './logo.svg';
import './App.css';
import {db} from './firebase'
import Post from './Post'
import React,{useEffect,useState} from 'react'
function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    db.collection('Posts').onSnapshot(snap=>{
        setPosts(snap.docs.map((doc)=>({id:doc.id,data:doc.data()})))
       
    })
}, [])
  return (
    <div className="App">
      <h1>Evolve Media</h1>
      <div class="d-flex flex-wrap justify-content-center">
      {
        posts.map((post)=>{
           return(
               <Post name={post.name} key={post.id} id={post.id} img={post.data.img} title={post.data.title} date={post.data.date} status={post.data.status}/>
           )
        })
      }
      </div>
    </div>
  );
}

export default App;
