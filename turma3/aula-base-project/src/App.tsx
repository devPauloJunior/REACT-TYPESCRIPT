import React from 'react'
import { useCallback, useReducer, useState } from 'react'
import './App.css'

interface CssComponentsProps {
  style: React.CSSProperties
}

interface ModalRenderProps {
  title: string
  children: React.ReactNode
}

interface State {
  count: number
}

type CounterAction = 
  { type: 'reset' } | 
  { 
    type: 'setCount' 
    value: State['count']
  }

  const initialState: State = { count: 0 }

  function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
      case "reset":
        return initialState
      
      case 'setCount':
        return {...state, count: action.value }
      
      default:
        throw new Error('Ação não identificada')
    }
  }

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  const addTwo = () => dispatch({ type: 'setCount', value: state.count + 2})
  const reset = () => dispatch({ type: 'reset' })

  const [ myValue, setMyValue ] = useState<string>("Altere o texto")

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    setMyValue(e.currentTarget.value)
  }, [setMyValue])

  return (
    <>
    <div>
      <h1>Meu contador</h1>
      <p>Contardor: { state.count }</p>
      <button onClick={addTwo}> Adiconar 2</button>
      <button onClick={reset}>Zerar contador</button>
      <hr />
      <input value={myValue} onChange={handleChange} />
      <p>Texto: { myValue }</p>
    </div>
    </>
  )
}

export default App
