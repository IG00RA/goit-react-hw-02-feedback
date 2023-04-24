import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 10px;
  margin: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  color: white;
  :hover {
    box-shadow: 4px 4px 11px 0px
      ${p => {
        if (p.type === 'good') {
          return 'green';
        }
        if (p.type === 'neutral') {
          return 'orange';
        }
        if (p.type === 'bad') {
          return 'red';
        }
      }};
    /* rgba(25, 125, 100, 1); */
  }
  background-color: ${p => {
    if (p.type === 'good') {
      return 'green';
    }
    if (p.type === 'neutral') {
      return 'orange';
    }
    if (p.type === 'bad') {
      return 'red';
    }
  }};
`;
