import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDowload/AppDownload'
const Home = () => {
  const [category,setCategory]=useState("All");
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
         {/* point of diff */}
     <FoodDisplay category={category} />
     <AppDownload></AppDownload>
    </div>
  )
}

export default Home
