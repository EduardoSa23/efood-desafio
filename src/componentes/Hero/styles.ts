import styled from 'styled-components';

export const HeroContainer = styled.div<{ $background: string }>`
  background-image: url(${(props) => props.$background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`;

export const Titulo = styled.h1`
  text-align: center;
`;
