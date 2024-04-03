import { Container } from "../../components/container";
import ImgLogo from '../../assets/logo.svg'
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> caae376361a60cc7ca1ae3040655f4c243b34a7f
import { Input } from "../../components/input";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
<<<<<<< HEAD
=======
import { signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { useEffect } from "react";
>>>>>>> caae376361a60cc7ca1ae3040655f4c243b34a7f

const schema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string()
})

type FormData = z.infer<typeof schema>

export function Login() {
<<<<<<< HEAD
=======
  const navigate = useNavigate()
>>>>>>> caae376361a60cc7ca1ae3040655f4c243b34a7f
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  function onSubmit(data: FormData){
<<<<<<< HEAD
    console.log(data)
  }

=======
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((user) => {
      console.log('LOGADO COM SUCESSO')
      console.log(user)
      navigate('/dashboard', { replace: true })
    })
    .catch(err => {
      console.log('ERRO AO LOGAR')
      console.log(err)
    })
  }

  useEffect(() => {
    async function handleLogout() {
      await signOut(auth)
    }
    handleLogout()
  }, [])

>>>>>>> caae376361a60cc7ca1ae3040655f4c243b34a7f
  return (
    <Container>
      <div>
        <Link to='/'>
          <img src={ ImgLogo } alt="Logo" />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <button>Acessar</button>
        </form>
        <Link to='/register'>
          Ainda não possui uma conta? Cadastre-se aqui
        </Link>
      </div>
    </Container>
  )
}
