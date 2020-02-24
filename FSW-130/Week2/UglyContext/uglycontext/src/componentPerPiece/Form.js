import React, { Component } from "react";
import { Form, Input, Checkbox, Button } from "./style/styles";
class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // title: "",
      isCompleted: "",
      created_at: "", //date
      id: "",
      id_str: "",
      img: "", //imgUrl
      text: "", // description
      name: "" //user.name = title
    };
  }
  render() {
    return (
      <Form id="formfield">
        {/* isCompleted: "",
        created_at: "", //date
        id: Date.now(),
        id_str: toString(this.id),
        img: "", //imgUrl
        text: "", // description */}
        <div></div>
        <Input
          name="name"
          placeholder="Tweet Title"
          value={this.state.name}
          onChange={event => {
            // console.log(this.state.submittedTweet.user.name);
            const { value } = event.target;
            this.setState({
              name: value
            });
          }}
        ></Input>
        {/* //input for the title */}
        {/* input for the  img */}
        <Input
          name="img"
          placeholder="Tweet Img URL"
          // value={this.state.submittedTweet.img}
          onChange={event => {
            // console.log(this.state.submittedTweet.img);
            const { value } = event.target;
            this.setState({
              img: value
            });
            const ids = Date.now();
            const date = new Date();
            // console.log(typeof date.toString());
            this.setState({
              created_at: date.toString(),
              id: ids,
              id_str: toString(ids)
            });
          }}
        ></Input>
        <Button
          primary
          onClick={e => {
            // console.log(this.state);
            this.props.onClickHandler(e, this.state);

            //i tried to make the form halfish reusable. So i could reuse it for At Least the editing form
          }}
        >
          Submit
        </Button>
        <div></div>
        <div></div>
        {/* textarea for the description. */}
        <textarea
          name="text"
          placeholder="Tweet Description"
          // name="textArea"
          value={this.state.text}
          onChange={event => {
            // console.log(this.state.submittedTweet.text);
            const { value } = event.target;
            this.setState({
              text: value
            });
          }}
          //   const { name, value } = event.target;
          //   this.setState({
          //     [name]: value
          //   });
          // }}
        ></textarea>
        {/* <Checkbox
          name="isComplete"
          type="checkbox"
          onChange={event => {
            // console.log(event.target.checked);
            const { checked } = event.target;
            this.setState({
              isCompleted: checked
            });
            // console.log(this.state.submittedTweet.isCompleted);
          }}
        ></Checkbox>{" "} */}
        {/* <br></br> */}
      </Form>
    );
  }
}
export default FormComponent;
