import './App.css'
import Accordian from './components/accordian/index'
import RandomColor from './components/random-color/index'
import StarRating from './components/starRating'
import ImageSlider from './components/image-slider'

function App() {
  return ( 
    <>
      <><Accordian /></>
      <><RandomColor /></>
      <><StarRating noOfStars={4}/></>
      <><ImageSlider url="https://picsum.photos/v2/list" limit={2} page={1}/></>
    </>
  )
}

export default App
