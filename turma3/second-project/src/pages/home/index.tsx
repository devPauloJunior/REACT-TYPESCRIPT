import { Container } from "../../components/container";
import Car01 from '../../assets/car01.png'
import Car02 from '../../assets/car02.png'
import Car03 from '../../assets/car03.png'

export function Home() {
  return (
    <Container>
      <section>
        <input 
          type="text"
          placeholder="Digite um modelo de carro"
        />
        <button type="button">Buscar</button>
      </section>
      <h2>Carros novos e usados em todo Ceará.</h2>
      <main>
        <section>
          <img src={ Car01 } alt="Carro 01"/>
          <p>Jaguar F-PACE</p>
          <div>
            <span>Ano: 2016/2017 | 26999 Km</span>
            <strong>R$ 239.000,00</strong>
          </div>
          <div></div>
          <div>
            <span>
              Juazeiro do Norte - CE
            </span>
          </div>
        </section>
        <section>
          <img src={ Car02 } alt="Carro 02"/>
          <p>Jaguar F-PACE</p>
          <div>
            <span>Ano: 2016/2017 | 26999 Km</span>
            <strong>R$ 239.000,00</strong>
          </div>
          <div></div>
          <div>
            <span>
              Juazeiro do Norte - CE
            </span>
          </div>
        </section>
        <section>
          <img src={ Car01 } alt="Carro 01"/>
          <p>Jaguar F-PACE</p>
          <div>
            <span>Ano: 2016/2017 | 26999 Km</span>
            <strong>R$ 239.000,00</strong>
          </div>
          <div></div>
          <div>
            <span>
              Juazeiro do Norte - CE
            </span>
          </div>
        </section>
      </main>
    </Container>
  )
}