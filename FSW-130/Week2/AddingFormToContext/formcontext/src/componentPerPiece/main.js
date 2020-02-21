import React, { Component } from "react";
import { ArrayConsumer } from "../themeProvider/arrayProviderComponent";
import tweet from "./../Tweets";
import {
  Main,
  Button,
  Input,
  Headings,
  PHeading,
  Tweet,
  Form,
  TweetCheckbox,
  Checkbox
} from "./style/styles";

class MainTag extends Component {
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
      truncated: false,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: [],
        urls: []
      },
      source:
        '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
      in_reply_to_status_id: null,
      in_reply_to_status_id_str: null,
      in_reply_to_user_id: null,
      in_reply_to_user_id_str: null,
      in_reply_to_screen_name: null,
      user: {
        id: 95931231,
        id_str: "95931231",
        name: "", //user.name = title
        screen_name: "Gui0_q",
        location: "",
        description: "",
        url: null,
        entities: {
          description: {
            urls: []
          }
        },
        protected: false,
        followers_count: 55,
        friends_count: 817,
        listed_count: 2,
        created_at: "Thu Dec 10 16:12:34 +0000 2009",
        favourites_count: 0,
        utc_offset: null,
        time_zone: null,
        geo_enabled: false,
        verified: false,
        statuses_count: 3603,
        lang: null,
        contributors_enabled: false,
        is_translator: false,
        is_translation_enabled: false,
        profile_background_color: "C0DEED",
        profile_background_image_url:
          "http://abs.twimg.com/images/themes/theme1/bg.png",
        profile_background_image_url_https:
          "https://abs.twimg.com/images/themes/theme1/bg.png",
        profile_background_tile: false,
        profile_image_url:
          "http://pbs.twimg.com/profile_images/568189390/funny-pictures-hamster-has-a-corn_normal.jpg",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/568189390/funny-pictures-hamster-has-a-corn_normal.jpg",
        profile_link_color: "1DA1F2",
        profile_sidebar_border_color: "C0DEED",
        profile_sidebar_fill_color: "DDEEF6",
        profile_text_color: "333333",
        profile_use_background_image: true,
        has_extended_profile: false,
        default_profile: true,
        default_profile_image: false,
        can_media_tag: true,
        followed_by: false,
        following: false,
        follow_request_sent: false,
        notifications: false,
        translator_type: "none"
      },
      geo: null,
      coordinates: null,
      place: null,
      contributors: null,
      is_quote_status: false,
      retweet_count: 0,
      favorite_count: 0,
      favorited: false,
      retweeted: false,
      lang: "pt"
    };
  }
  // handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     submittedTweet: { [name]: value }
  //   });
  // };

  render() {
    return (
      <ArrayConsumer>
        {array => {
          // array.array === "lightblue" ? (
          return (
            <Main>
              {/* {`Main with ${
                array.array === "lightblue" ? "blue" : "lightblue"
              }-array`} */}
              <Tweet id="tweetfield">
                {/* {console.log(array.array)} */}
                <div></div>
                <Headings>{array.array.user.name}</Headings>
                <Headings>
                  {array.array.created_at.substring(0, 11)}
                </Headings>{" "}
                <Button primary onClick={array.toggler}>
                  Toggler
                </Button>
                <div></div>
                <div></div>
                <PHeading>{array.array.text}</PHeading>
                <div style={{ gridColumn: "span 2", display: "flex" }}>
                  {" "}
                  <TweetCheckbox
                    value={array.array.isCompleted}
                    checked={array.array.isCompleted}
                    type="checkbox"
                    // onChange={() => {
                    //   console.log("not going to change");
                    // }}
                  ></TweetCheckbox>
                  <img
                    alt=""
                    style={{
                      width: "80%",
                      height: "auto",
                      maxHeight: "80%",
                      alignSelf: "center"
                    }}
                    src={array.array.img}
                  ></img>
                </div>{" "}
                {/* <br></br> */}
              </Tweet>
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
                  // value={this.state.submittedTweet.user.name}
                  onChange={event => {
                    // console.log(this.state.submittedTweet.user.name);
                    const { value } = event.target;
                    this.setState({
                      user: { name: value }
                    });
                  }}
                ></Input>
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
                    console.log(typeof date.toString());
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
                    array.pushOne(e, this.state);
                  }}
                >
                  Submit
                </Button>
                <div></div>
                <div></div>
                <textarea
                  name="text"
                  placeholder="Tweet Description"
                  // name="textArea"
                  // value={this.state.submittedTweet.text}
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
                <Checkbox
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
                ></Checkbox>{" "}
                {/* <br></br> */}
              </Form>
            </Main>
          );
        }}
      </ArrayConsumer>
    );
  }
}

export default MainTag;
