// import logo from './logo.svg';
import { useEffect ,useState } from 'react';
import { getPosts } from './Api';
import './App.css';
import PostCard from './Components/PostCards';
import Header from './Components/Header';

function App() {
// step 3
  const [data, setData]= useState(null);
  
// step 2
  useEffect(()=>{
    getPosts().then((posts)=> setData(posts));
  },[]);


  return (
    <div className="App">
      <div className="header">
        <Header/>
      </div>
      {data ? data.map((e)=> <PostCard title={e.title} body={e.body}/>): <p>No data</p> }
    </div>
  );
}

export default App;
