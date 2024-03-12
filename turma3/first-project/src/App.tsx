import { useState } from 'react'
import './App.css'
import FinanceControl from './components/FinanceControls/FinanceControl'
import Header from './components/Header'
import { Movement } from './models/interfaces/Movements'

function App() {
  const [ currentBalance, setCurrentBalance ] = useState(0)
  const [ currentExpenses, setCurrentExpenses ] = useState(0)
  const [ movementsItems, setMovementsItems ] = useState<Array<Movement>>([])

  return (
    <>
        <Header />
        <FinanceControl />
    </>
  )
}

export default App
