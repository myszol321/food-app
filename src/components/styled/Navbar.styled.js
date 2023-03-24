import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  background-color: #ebfbff;
  height: 100px;

  & > h1 {
    font-family: 'Fredoka One', cursive;
    font-size: 40px;
  }
  & > h2 {
    margin-left: 100px;
  }
  & > h2:hover {
    cursor: pointer;
  }
`;
