import './App.css'
import './index.css'
import { Header } from './components/Header'
import { Aprensentacao } from './components/Apresentacao'
import { Sobre } from './components/Sobre'

function App() {

  return (
    <div className='bg-background'>
      <Header />
      <Aprensentacao/>
      <Sobre/>
    </div>
  )
}

export default App
