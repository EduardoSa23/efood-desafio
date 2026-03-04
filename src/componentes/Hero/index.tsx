import { HeroContainer, Titulo } from './styles';
import fundo from '../../assets/images/fundo.png';
import { Header } from '../Header';

export const Hero = () => (
  <HeroContainer $background={fundo}>
    <Header />
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </HeroContainer>
);
