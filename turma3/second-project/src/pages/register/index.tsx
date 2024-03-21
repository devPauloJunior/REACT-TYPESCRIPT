import { Container } from "../../components/container";
import ImgLogo from '../../assets/logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

import { auth } from "../../services/firebaseConnection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Insira um e-mail válido"),
  password: z.string()
})

type FormData = z.infer<typeof schema>

export function Register() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  async function onSubmit(data: FormData){
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then(async (user) => {
      await updateProfile(user.user, {
        displayName: data.name
      })
      console.log('CADASTRO REALIZADO COM SUCESSO.')
      navigate('/dashboard', { replace: true })
    })
    .catch((error) => {
      console.log('ERRO AO CADASTRAR SEU USUÁRIO')
      console.log(error)
    })
  }

  return (
    <Container>
      <div>
        <Link to='/'>
          <img src={ ImgLogo } alt="Logo" />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input
              type="text"
              placeholder="Digite seu nome..."
              name="name"
              error={errors.name?.message}
              register={register}
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Digite seu e-mail..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Digite sua senha..."
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>
          <button>Cadastrar</button>
        </form>
      </div>
    </Container>
  )
}
