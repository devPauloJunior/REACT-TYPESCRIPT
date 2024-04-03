import { Movement } from "./Movements";

export interface ExpensesProps {
    emitMovement: ( movement: Movement) => void
    currentExpenses: number
    currentBalance: number
}