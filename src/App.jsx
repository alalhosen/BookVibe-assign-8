
import './App.css'
import Home from './components/Home/Home'
import HomeNav from './components/Home/HomeNav'
import ListedBooks from './components/Home/ListedBooks'
import PagesToResd from './components/Home/PagesToResd'

function App() {

  return (
    <>
      <h2 className='mt-12'></h2>
      <Home></Home>
      <HomeNav/>
      <ListedBooks/>
      <PagesToResd/>
    </>
  )
}

export default App
