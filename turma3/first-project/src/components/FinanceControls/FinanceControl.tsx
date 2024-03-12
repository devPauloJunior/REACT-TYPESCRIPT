import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps"
import { Movement } from "../../models/interfaces/Movements"
import Balance from "../Balance/Balance"
import './FinanceControl.css'

const FinanceControl = ({ handleSetMovement, balance, expenses }: FinanceControlProps) => {

  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement)
  }
  return (
    <div>
      {/* BALANCE */}
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      {/* EXPENSES */}
    </div>
  )
}

export default FinanceControl