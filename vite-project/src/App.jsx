import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TopNavbar from './components/TopNavBar'
import BottomFooter from './components/BottomFooter'
import AllTheBooks from './components/AllTheBooks'

function App() {

  return (
    <>
      <TopNavbar/>

      <AllTheBooks/>
    
      <BottomFooter/>
    </>
  )
}

export default App
