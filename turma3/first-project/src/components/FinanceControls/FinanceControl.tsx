import { FinanceControlProps } from "../../models/interfaces/FinanceControlProps"
import { Movement } from "../../models/interfaces/Movements"
import Balance from "../Balance/Balance"
import Expenses from "../Expenses/Expenses"
import './FinanceControl.css'

const FinanceControl = ({ handleSetMovement, balance, expenses }: FinanceControlProps) => {

  const receiveNewMovement = (movement: Movement) => {
    movement && handleSetMovement(movement)
  }
  return (
    <div className="container-finances">
      <Balance currentBalance={balance} emitMovement={receiveNewMovement} />
      <Expenses currentExpenses={expenses} currentBalance={balance} emitMovement={receiveNewMovement} />
    </div>
  )
}

export default FinanceControl