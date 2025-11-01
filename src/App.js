// import logo from './logo.svg';
import { useEffect ,useState } from 'react';
import { getPosts, getRandomUser } from './Api';
import './App.css';
import PostCard from './Components/PostCards';
import Header from './Components/Header';
import UserCard from './Components/UserCard';
// import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';

function App() {
// step 3
  const [data, setData]= useState(null);
  const [userData,setUserData]= useState(null);
  
// step 2
  useEffect(()=>{
    getPosts().then((posts)=> setData(posts));
  },[]);

  // step 2.2
  useEffect(()=>{
    getRandomUser().then((user)=>setUserData(user.results[0]));
  },[]);
  
  // console.log(userData);
  const refresh=()=>{
     getRandomUser().then((user)=> setUserData(user.results[0]));
  }


  return (
    <div className="App">
    
        <Header/>
    
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}> Refresh User</button>
      {/* step 4 */}
      {data ? data.map((e)=> <PostCard title={e.title} body={e.body}/>): <p>No data</p> }
    </div>
  );
}

export default App;
