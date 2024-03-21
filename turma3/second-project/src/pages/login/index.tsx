import { Container } from "../../components/container";
import ImgLogo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { Input } from "../../components/input";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email("Insira um e-mail válido"),
  password: z.string()
})

type FormData = z.infer<typeof schema>

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange'
  })

  function onSubmit(data: FormData){
    console.log(data)
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
