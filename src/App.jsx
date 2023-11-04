import React from 'react'
import NavBar from './componenets/NavBar/NavBar'
import Search from './componenets/SearchDiv/Search'
import Jobs from './componenets/JobDiv/Jobs'
import Value from './componenets/ValueDiv/Value'
import Footer from './componenets/FooterDiv/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App
