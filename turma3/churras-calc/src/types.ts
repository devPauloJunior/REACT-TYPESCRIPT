export type Alimento = "carne" | "frango" | "porco" | "carneiro" | "linguica" | "queijo"

export const quantidadesPorPessoa: Record<Alimento, number> = {
    carne: 300,
    frango: 200,
    porco: 300,
    carneiro: 100,
    linguica: 400,
    queijo: 200,
}

export const nomesAlimentos: Record<string, string> = {
    carne: "Carne",
    frango: "Frango", 
    porco: "Porco", 
    carneiro: "Carneiro", 
    linguica: "Linguiça",
    queijo: "Queijo", 
}