import './App.css'
import Navber from './Components/Navber/Navber'
import Banner from './Components/Banner/Banner'
import StatsSection from './Components/StatsSection/StatsSection'
import DigitalTools from './Components/DigitalTools/DigitalTools'

const getCardData = async () => {
  const res = await fetch('/DigitalTools.json')
  return res.json()
}
const cardPromise = getCardData()

function App() {


  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <StatsSection></StatsSection>
      <DigitalTools cardPromise={cardPromise}></DigitalTools>
    </>
  )
}

export default App
