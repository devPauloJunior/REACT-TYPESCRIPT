function aumento(salario: number, aumento: number){
    return salario + aumento
   }

   const a = 10
   aumento(a, 30)

   const produto = {
    id:  1,
    nome:  "Copo",
  }

  interface Produto {
    id: number
    nome: string
  }

import { useState } from 'react'

  const [enabled, setEnabled] = useState<boolean>(false)

  type Status =  "livre" | "ocupado"

  const [ status, setStatus ] = useState<Status> ('livre')


  type Sexo = {tipo: 'masculino'} | { tipo: 'feminino'}

  const [sexo, setSexo] = useState<Sexo>({tipo: 'feminino'})