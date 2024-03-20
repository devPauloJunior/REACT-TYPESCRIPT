import { Container } from "../../components/container";
import ImgLogo from '../../assets/logo.svg'
import { Link } from "react-router-dom";
import { Input } from "../../components/input";

export function Login() {
  return (
    <Container>
      <div>
        <Link to='/'>
          <img src={ ImgLogo } alt="Logo" />
        </Link>
        <form>
          <Input
            type="email"
            placeholder="Digite seu e-mail..."
            name="email"
          />
        </form>
      </div>
    </Container>
  )
}
