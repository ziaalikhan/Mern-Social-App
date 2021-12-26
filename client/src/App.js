import './App.css';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
// import { useSelector, useDispatch } from 'react-redux';
// import { getPost } from './store/action';

function App() {
  // const state = useSelector(state => state);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPost());
  // }, [])
  // const data = state.posts.data;
  return (
    <div>
      <Navbar />
      <Home />
      {/* {
        data?.map((val) => {
          return (
            <h2>{val.message}</h2>
          )
        })
      } */}
    </div>
  );
}

export default App;
