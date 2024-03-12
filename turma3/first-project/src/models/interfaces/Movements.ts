export interface Movement {
    name: string,
    value: number,
    type: 'Input' | 'Output',
    id?: string,
}