import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"

const Home = () => {
    const { theme, toogleTheme } = useContext(ThemeContext)
  return (
    <div>
        <h2>Home</h2>
        <button onClick={toogleTheme}>Mudar cor do Tema</button>
        <p>O tema atual é: { theme }</p>
    </div>
  )
}

export default Home