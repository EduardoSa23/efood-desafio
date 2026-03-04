import { FooterBar, Redes } from './styles';

import logo from '../../assets/icons/logo.svg';
import instagran from '../../assets/icons/instagran.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';

export const Footer = () => (
  <FooterBar>
    <div>
      <img src={logo} alt="Logo efood" />
      <Redes>
        <img src={instagran} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </Redes>
    </div>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
      qualidade <br/> dos produtos é toda do estabelecimento contratado.{' '}
    </p>
  </FooterBar>
);
