import { useContext } from "react"
import { Context } from "../contexts/Context"

const AuthCard = () => {
    const { state: { user: { user } }, dispatch } = useContext(Context)

    const handleSignIn = () => dispatch({ type: 'SIGNIN', payload: { user: { id: 1, name: 'Deusmar Queiroz' } }})

    const handleSignOut = () => dispatch({ type: 'SIGNOUT' })

  return (
    <div>
        { user ?
            <>
                <div>
                    ID: { user.id } <br />
                    Nome: { user.name }
                </div>

                <button onClick={handleSignOut}>Deslogar</button>
                <br />
            </>
            :
            <>
                <button onClick={handleSignIn}>Logar</button>
            </>
        }
    </div>
  )
}

export default AuthCard