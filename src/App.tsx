import './App.css'
import './index.css'
import { Header } from './components/Header'
import { Aprensentacao } from './components/Apresentacao'

function App() {

  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <Aprensentacao/>
    </div>
  )
}

export default App
