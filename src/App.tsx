import './App.css'
import data from './data/data.ts'
import Listing from './components/Listing.tsx'

function App() {
  return (
    <>
      <Listing items={data}/>
    </>
  )
}

export default App;
