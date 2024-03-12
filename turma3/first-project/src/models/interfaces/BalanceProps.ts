import { Movement } from "./Movements";

export interface BalanceProps {
    emitMovement: ( movement: Movement ) => void
    currentBalance: number
}