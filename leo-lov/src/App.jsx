import './App.css'
import { Navbar } from './component/navbar/Navbar'
import { Header } from './component/header/Header'
import { Cards } from './component/cards/Cards'
import { Content } from './component/content/Content'
import { Footer } from './component/footer/Footer'


function App() {
  
  return (
    <>
      <Navbar/>
      <Header/>
      <Cards/>
      <Content/>
      <Footer/> 
    </>
  )
}

export default App
