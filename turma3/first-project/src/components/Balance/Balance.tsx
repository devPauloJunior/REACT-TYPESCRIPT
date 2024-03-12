import { useState } from "react"
import { BalanceProps } from "../../models/interfaces/BalanceProps"
import './Balance.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Balance = ( { emitMovement, currentBalance }: BalanceProps ) => {
    const [ renderInputForm, setRenderInputForm ] = useState(false)
    const [ isFormValid, setIsFormValid ] = useState(false)
    const [ inputName, setInputName ] = useState('')
    const [ inputValue, setInputValue ] = useState('')
    
    const handleRenderInputForm = () => setRenderInputForm(!false)

    const hideInputForm = () => {
        setRenderInputForm(false)
        setIsFormValid(true)
        setInputName('')
        setInputValue('')
    }


  return (
    <>
    <div className="balance-container">
        <div className="balance-card">
            <FontAwesomeIcon icon={faDollar} color="#7af1a7" size="2x" />
        </div>
    </div>
    </>
  )
}

export default Balance