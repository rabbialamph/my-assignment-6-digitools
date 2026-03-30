import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import StatsSection from './Components/StatsSection/StatsSection'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import GetStartedSection from './Components/GetStartedSection/GetStartedSection'
import CartSection from './Components/DigitalTools/CartSection'
import Tabs from './Components/Tabs/Tabs'
import { useState } from 'react'
import TopTitle from './Components/DigitalTools/topTitle'

const getCardData = async () => {
  const res = await fetch('/DigitalTools.json')
  return res.json()
}
const cardPromise = getCardData()

function App() {

  const [tabs, setTabs] = useState(true);
  const [carts, setCarts] = useState([]);

  const tabHandleClick = (value) =>{
    setTabs(value)
  }

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <StatsSection></StatsSection>

      <TopTitle></TopTitle>

      <Tabs tabHandleClick={tabHandleClick}></Tabs>

      {
        tabs 
        ? <DigitalTools 
        cardPromise={cardPromise}
        carts={carts}
        setCarts={setCarts}
        ></DigitalTools> 

        : <CartSection
            carts={carts}
        ></CartSection>
      }

      <GetStartedSection></GetStartedSection>
    </>
  )
}

export default App;
