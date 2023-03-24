import styled from 'styled-components';

export const StyledFilters = styled.div`
  width: 50%;
  position: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;

  border: 3px solid black;
  border-radius: 10px;
  padding: 5px;

  & > img {
    size: 20px;
  }
  & > p {
    font-size: 20px;
  }

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export const SearchBarStyled = styled.div`
  display: flex;
  align-items: center;
  width: 600px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;

  input[type='text'] {
    flex-grow: 1;
    border: none;
    padding: 0 10px;
    font-size: 16px;
    outline: none;
    height: 100%;
  }

  & > button {
    width: 80px;
    height: 100px;
    background-color: #ccc;
    border: none;
    cursor: pointer;
  }

  & > button > img {
    width: 20px;
    height: 20px;
    display: block;
    margin: 10px auto;
  }
`;
