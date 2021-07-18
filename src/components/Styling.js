import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(#1F78A7, #2EE0F4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 40vh;
  width: 60%;
  background: linear-gradient(#9BA8B3, #C4CBD0);
  box-shadow: 0 .2rem .4rem rgba(15,11,86,.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const CardH2 = styled.h2`
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .3rem;
  font-size: clamp(2rem, 4vw, 4rem);
`;