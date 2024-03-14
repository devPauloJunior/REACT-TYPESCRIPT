import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MovementsProps } from "../../models/interfaces/MovementsProps"
import './Movements.css'

const Movements = ({ movementsList }: MovementsProps) => {
  return (
    <div>
        <header className="movements-header">
            <FontAwesomeIcon icon={faMoneyBillTransfer} color="#7af1a7" size="2x" />
            <h2>{ `${movementsList.length > 0 ? 'Movimentações' : 'Sem Movimentações a exibir'
            }` }</h2>
        </header>
        { movementsList.length > 0 && movementsList.map((movement) => (
            <div key={movement.id} className="movements-container">
                <div className="movementation">
                    <h2>{ movement.name }</h2>
                    <h3 className={`${movement.type === "Input" ? 'balance-btn' : 'expenses-btn'}`}>
                        { movement.type === 'Input' ? "+ " : "- " }
                        { movement.value }
                    </h3>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Movements