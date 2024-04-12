import AuthCard from './components/AuthCard'
import Button from './components/Button'
import { ContextProvider } from './contexts/Context'

function App() {

  return (
    <ContextProvider>
      <Button />
      <div style={{ border: '1px solid gray', padding: '10px 30px' }}>
        <AuthCard />
      </div>
     </ContextProvider>
  )
}

export default App
