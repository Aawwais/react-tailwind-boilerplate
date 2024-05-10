import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { decrement, increment } from '../store/portfolio/porfolioSlice';
import { logoutUser, resetAllSlices } from '../store/auth/authSlice';

const Home = () => {
  let dispatch=useDispatch()
  const {counter}=useSelector((state)=>state.portfolio)

  const handelIncrement = () => {
    dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement())
  };
  const logout = () => {
    dispatch(logoutUser());
    dispatch(resetAllSlices());
  };
  return (
      <div className="flex flex-col items-center justify-center h-screen home">
            <h1 className="text-3xl font-bold mb-4">Counter App</h1>
            <button onClick={logout}>Logout</button>
            <div className="flex items-center mb-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handleDecrement}>-</button>
                <span className="mx-4 text-2xl font-bold">{counter}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={handelIncrement}>+</button>
            </div>
      click here go to about page
      <Link to="/about" className="bg-blue-500 hover:bg-blue-600 hover:text-white text-white font-bold py-2 px-4 rounded">About</Link>
        </div>
  )
}

export default Home
