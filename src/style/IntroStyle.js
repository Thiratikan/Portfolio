import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  /* background-image: url("./images/BGintro.png");
    background-size: cover; */

  h1 {
    font-family: "AvenirRoman";
    font-size: 30px;
  }
  button {
    a {
      text-decoration: none;
      color: black;
    }
    font-family: "AvenirLight";
    letter-spacing: 2px;
    img {
      width: 20px;
      margin-right: 5px;
    }
  }
  button {
    --border-radius: 20px;
    --border-width: 6px;

    appearance: none;
    position: relative;
    padding: 0.75em 1.5em;
    border: 0;
    background-color: transparent;
    font-size: 16px;
    font-weight: 600;
    color: black;
  }

  button::after {
    --m-i: linear-gradient(#000, #000);
    --m-o: content-box, padding-box;

    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: var(--border-width);
    border-radius: var(--border-radius);
    background-image: conic-gradient(
      #488cfb,
      #29dbbc,
      #ddf505,
      #ff9f0e,
      #e440bb,
      #655adc,
      #488cfb
    );

    mask-image: var(--m-i), var(--m-i);
    mask-origin: var(--m-o);
    mask-clip: var(--m-o);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;

    filter: hue-rotate(0);
    animation: hue linear 500ms infinite;
    animation-play-state: paused;
  }

  button:hover::after {
    animation-play-state: running;
  }

  @keyframes hue {
    to {
      filter: hue-rotate(1turn);
    }
  }

  /* to have things in good shape */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 1000px) {
    h1 {
      width: 20rem;
      text-align: center;
      margin: auto;
      margin: 0;
      font-size: 15px;
    }
  }
`;

export const Name = styled.div`
  font-family: "Yellowtail", cursive;
  text-align: center;
  font-size: 120px;

  @media only screen and (max-width: 600px) {
    font-size: 80px;
  }
`;

export const Title = styled.div`
  font-family: "AvenirRoman";
  text-align: center;
  margin-top: -10px;
  font-size: 45px;
  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

export const Picture = styled.div`
  img {
    height: 320px;
  }
  @media only screen and (max-width: 600px) {
    margin-top: -200px;
    img {
      height: 220px;
    }
  }
`;
