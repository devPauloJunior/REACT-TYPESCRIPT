import { Movement } from "./Movements";

export interface FinanceControlProps {
    handleSetMovement: (movement: Movement) => void
    balance: number
    expenses: number
}