import { useContext } from 'react'
import { Context } from '../contexts/Context'

const Button = () => {
    const  { state,  dispatch } = useContext(Context)

    const handleClick = () => {
        if (state.theme.theme == 'light') {
            dispatch({ type: 'CHANGE_THEME', payload: 'dark' })
        } else {
            dispatch({ type: 'CHANGE_THEME', payload: 'light' })
        }
    }

  return (
    <div>
        <h2>O nosso thema é: { state.theme.theme }</h2>
        <button onClick={handleClick}>Mudar tema</button>
    </div>
  )
}

export default Button