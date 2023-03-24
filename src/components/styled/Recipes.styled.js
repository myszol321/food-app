import styled from 'styled-components';

export const FeedStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  align-items: flex-start;
  justify-content: space-between;
  grid-gap: 10px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RecipeThumbnailStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  background-color: #e09494;
  border: 5px solid black;
  border-radius: 10px;
  height: 100%;
  margin: 20px;
  padding: 20px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    opacity: 0.8;
    cursor: pointer;
  }

  .thumbnail {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  & > h1 {
    text-align: center;
  }

  & > p {
    position: absolute;
    top: 6px;
    left: 6px;
    background-color: white;
    padding: 5px 7px;
    border-radius: 2px;
    font-weight: bold;
  }
  .heart {
    position: absolute;
    width: 50px;
    top: 6px;
    right: 6px;
    padding: 5px 7px;
    border-radius: 2px;
    font-weight: bold;
  }

  .heart:hover {
    content: url('filled-heart.png');
  }
`;

export const RecipePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
