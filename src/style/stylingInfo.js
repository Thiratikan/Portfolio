import styled from "styled-components";

export const HeadTitle = styled.div`
  font-family: "AvenirHeavy";
  color: #c2c2c2;
  font-size: 160px;

  @media only screen and (max-width: 600px) {
    font-size: 78px;
  }
`;

export const CONTACT = styled.div`
  background-color: #ebecf0;
  color: #14303f;
  padding: 15px;
  text-align: center;
  div {
    display: inline-flex;
    gap: 15px;
    margin-top: 10px;
  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 18px;
  }
  img {
    width: 32px;
  }

  .name {
    font-family: "Righteous", cursive;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 12px;
    }
    div {
      display: grid;
      gap: 0px;
      margin-top: 10px;
    }
  }
`;
