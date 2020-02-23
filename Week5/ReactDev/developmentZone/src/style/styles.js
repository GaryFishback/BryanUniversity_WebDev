import styled from "styled-components";
import light from "../referencesrcs/one/themeProvider/light";
// import tweet from "./../Tweets";
import dark from "../referencesrcs/one/themeProvider/dark";

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
  border: none;
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
  background: #53a2be;
  height: 50%;
  margin: 0 auto;
`;
const Tweet = styled(Form)`
  width: 60%;
  border-left: ${light.colors.formBorder} 2vw solid;
  border-right: ${light.colors.formBorder} 2vw solid;
  background: #53a2be;
  height: 50%;
  margin: 0 auto;
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
  color: #55dde0;
  grid-column: span 2;
  background: #33658a;
  margin: 0 auto;
`;
export {
  Main,
  Button,
  Input,
  Headings,
  PHeading,
  Tweet,
  Form,
  TweetCheckbox,
  Checkbox
};
