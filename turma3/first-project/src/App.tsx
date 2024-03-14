import { useState } from 'react'
import './App.css'
import FinanceControl from './components/FinanceControls/FinanceControl'
import Header from './components/Header'
import { Movement } from './models/interfaces/Movements'
import Movements from './components/Movements/Movements'

function App() {
  const [ currentBalance, setCurrentBalance ] = useState(0) //Saldo atual da conta
  const [ currentExpenses, setCurrentExpenses ] = useState(0) //despesas atuais da conta
  const [ movementsItems, setMovementsItems ] = useState<Array<Movement>>([]) //movimentação da conta

  const setNewMovement = (movement: Movement) => { 
    if (movement) { 
      setMovementsItems((prevMovements) => {
        const movements = [...prevMovements]
        movements.unshift({
          name: movement.name,
          value: movement.value,
          type: movement.type,
          id: Math.random().toString(),
        })
        return movements
      })

      movement.type === 'Input' && 
      setCurrentBalance((prevBalance) => prevBalance + Number(movement.value))

      if (movement.type === 'Output') {
        setCurrentExpenses((prevExpenses) => prevExpenses + Number(movement.value))

        currentBalance > 0 && setCurrentBalance ( (prevBalance) => prevBalance - Number(movement.value) )
      }
    }
  }

  return (
    <>
        <Header />
        <FinanceControl
              balance={ currentBalance }
              expenses={ currentExpenses }
              handleSetMovement={ setNewMovement }
        />
        <Movements movementsList={ movementsItems } />
    </>
  )
}

export default App
