import styled from "styled-components";
import { cores } from '../../styles';


export const FooterBar = styled.footer`
    background-color: ${cores.laranja};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 80px;
    padding: 40px;
`

export const Redes = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 32px;
`