import styled from "styled-components";
import light from "./light";
// import tweet from "./../Tweets";
import dark from "./dark";
// i did most of the styling with styled-components. Most of it is compiled here so it wouldn't over-crowd the other components. I'm not a fan of inline styling. 
const Nav = styled.nav`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;

const Home = styled.div`
  display: grid;
  grid-template-rows: 5vw auto 5vw;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  over-flow-y: scroll;
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
  font-size: 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
const Button = styled.button`
  width: 50%;
  height: 8vh;
  font-size: 2vw;
  border: #663221;
  margin: 0 auto;
  align-self: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
const Input = styled.input`
  width: 80%;
  margin: 0 auto;
  // margin-right: 2em;
  height: 4vh;
  font-size: 1vw;
  border: none;
  align-self: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
const Checkbox = styled(Input)`
  width: 60%;
  height: 60%;
  align-self: center;
`;
const TweetCheckbox = styled(Checkbox)`
  width: 20%;
  height: 20%;
`;
const Form = styled.section`
  display: grid;
  grid-template-columns: 10% 25% 25% 25% 10%;
  grid-template-rows: 12vh 20vh;
  border-top: ${light.colors.font} 0.2vw dashed;
  width: 60%;
  border-left: ${light.colors.formBorder} 2vw solid;
  border-right: ${light.colors.formBorder} 2vw solid;
  background: #92482f;
  height: 50%;
  padding-bottom: 1em;
  margin: 0 auto;
`;
const Tweet = styled(Form)`
  width: 100%;
  border-left: ${light.colors.formBorder} 2vw solid;
  border-right: ${light.colors.formBorder} 2vw solid;
  background: #92482f;
  display: flex;
  flex-direction: column;
  height: 80%;
  min-height: auto;
  padding-bottom: 0.5em;
  padding-top: 0.5em;
  padding: 0 auto;
  margin: 0;
`;
const Headings = styled.h1`
  width: 80%;
  margin: 0 auto;
  // margin-right: 2em;
  height: 4vh;
  font-size: 1.5vw;
  border: none;
  align-self: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
const PHeading = styled.h3`
  width: 80%;
  margin-left: -2em;
  margin-right: 2em;
  margin-top: 2em;
  height: 100%;
  font-size: 1.5vw;
  color: #663221;
  grid-column: span 2;
  background: #a06a34;
  margin: 0 auto;
`;
const Footer = styled.footer`
  width: 100%;
  height: 100%%;
  font-size: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${props =>
    props.primary === true ? light.colors.font : dark.colors.font};
  background: ${props =>
    props.primary === true ? light.colors.background : dark.colors.background};
`;
export {
  Main,
  Button,
  Footer,
  Input,
  Home,
  Nav,
  Headings,
  PHeading,
  Tweet,
  Form,
  TweetCheckbox,
  Checkbox
};
