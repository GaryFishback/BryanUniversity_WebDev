import React, { Component } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Form from "./home_form";
import Details from "./../Tweets/Details/details";
import "./home.css";
import TweetPreview from "./../Tweets/List/TweetPreview";
import {
  addOne,
  deleteOne,
  saveID,
  countingContacts,
  colorInput,
  saveData,
  nameInput,
  emailInput,
  phoneInput,
  imgUrlInput
} from "./../redux/actions";
import { connect } from "react-redux";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount = () => {
    axios.get("/tweets/").then(res => {
      console.log(res.data.tweets);
      this.props.dispatch(saveData(res.data.tweets));
    });
  };

  render() {
    return (
      <div>
        {console.log(this.props)}
        <Switch>
          <Route exact path={`/LoggedIn/`}>
            <section
              className="home_topsection"
              style={{ borderBottom: "1px rgb(235, 233, 233) solid" }}
            >
              <h2>Home</h2>
              <svg viewBox="0 0 24 24">
                <g>
                  <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                </g>
              </svg>
            </section>
            <section>
              <Form
                submitForm={(e, author, description) => {
                  const newTweet = {
                    created_at: new Date().toString(),
                    _id: Math.random(),
                    text:
                      description,
                    truncated: true,
                    entities: {
                      hashtags: [],
                      symbols: [],
                      user_mentions: [],
                      urls: [
                        {
                          url: "https://t.co/Rbc9TF2s5X",
                          expanded_url: "https://twitter.com/i/web/status/1125490788736032770",
                          display_url: "twitter.com/i/web/status/1…",
                          indices: [117, 140]
                        }
                      ]
                    },
                    metadata: {
                      iso_language_code: "en",
                      result_type: "recent"
                    },
                    source:
                      '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
                    in_reply_to_status_id: null,
                    in_reply_to_status_id_str: null,
                    in_reply_to_user_id: null,
                    in_reply_to_user_id_str: null,
                    in_reply_to_screen_name: null,
                    user: {
                      name: author,
                      screen_name: author,
                      location: "Internet",
                      description:
                        "Your official source for Twitter Platform news, updates & events. Need technical help? Visit https://t.co/mGHnxZU8c1 ⌨️ #TapIntoTwitter",
                      url: "https://t.co/FGl7VOULyL",
                      entities: {
                        url: {
                          urls: [
                            {
                              url: "https://t.co/FGl7VOULyL",
                              expanded_url: "https://developer.twitter.com/",
                              display_url: "developer.twitter.com",
                              indices: [0, 23]
                            }
                          ]
                        },
                        description: {
                          urls: [
                            {
                              url: "https://t.co/mGHnxZU8c1",
                              expanded_url: "https://twittercommunity.com/",
                              display_url: "twittercommunity.com",
                              indices: [93, 116]
                            }
                          ]
                        }
                      },
                      protected: false,
                      followers_count: 501947,
                      friends_count: 1473,
                      listed_count: 1507,
                      created_at: "Sat Dec 14 04:35:55 +0000 2013",
                      favourites_count: 2186,
                      utc_offset: null,
                      time_zone: null,
                      geo_enabled: true,
                      verified: true,
                      statuses_count: 3389,
                      lang: "en",
                      contributors_enabled: false,
                      is_translator: false,
                      is_translation_enabled: null,
                      profile_background_color: null,
                      profile_background_image_url: null,
                      profile_background_image_url_https: null,
                      profile_background_tile: null,
                      profile_image_url: null,
                      profile_image_url_https:
                        "https://pbs.twimg.com/profile_images/880136122604507136/xHrnqf1T_normal.jpg",
                      profile_banner_url:
                        "https://pbs.twimg.com/profile_banners/2244994945/1498675817",
                      profile_link_color: null,
                      profile_sidebar_border_color: null,
                      profile_sidebar_fill_color: null,
                      profile_text_color: null,
                      profile_use_background_image: null,
                      has_extended_profile: null,
                      default_profile: false,
                      default_profile_image: false,
                      following: false,
                      follow_request_sent: false,
                      notifications: false,
                      translator_type: null
                    },
                    geo: null,
                    coordinates: null,
                    place: null,
                    contributors: null,
                    is_quote_status: true,
                    quoted_status: {
                      created_at: "Mon May 06 19:14:46 +0000 2019",
                      
                      text:
                        "It's easy to express yourself by Retweeting with a comment. What if you could take it a step further and include me… https://t.co/YTqpNZZ8M9",
                      truncated: true,
                      entities: {
                        hashtags: [],
                        symbols: [],
                        user_mentions: [],
                        urls: [
                          {
                            url: "https://t.co/YTqpNZZ8M9",
                            expanded_url:
                              "https://twitter.com/i/web/status/1125479034513645569",
                            display_url: "twitter.com/i/web/status/1…",
                            indices: [117, 140]
                          }
                        ]
                      },
                      metadata: {
                        iso_language_code: "en",
                        result_type: "recent"
                      },
                      source:
                        '<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>',
                      in_reply_to_status_id: null,
                      in_reply_to_status_id_str: null,
                      in_reply_to_user_id: null,
                      in_reply_to_user_id_str: null,
                      in_reply_to_screen_name: null,
                      user: {
                        name: "Twitter Support",
                        screen_name: "TwitterSupport",
                        location: "Twitter HQ",
                        description:
                          "Your official source for Twitter Support. We're available 24/7 via Direct Message to answer account questions. Follow us for tips, tricks, and announcements.",
                        url: "https://t.co/heEvRrl4yN",
                        entities: {
                          url: {
                            urls: [
                              {
                                url: "https://t.co/heEvRrl4yN",
                                expanded_url: "https://help.twitter.com",
                                display_url: "help.twitter.com",
                                indices: [0, 23]
                              }
                            ]
                          },
                          description: {
                            urls: []
                          }
                        },
                        protected: false,
                        followers_count: 5861908,
                        friends_count: 17,
                        listed_count: 15129,
                        created_at: "Thu Dec 04 18:51:57 +0000 2008",
                        favourites_count: 313,
                        utc_offset: null,
                        time_zone: null,
                        geo_enabled: true,
                        verified: true,
                        statuses_count: 27955,
                        lang: "en",
                        contributors_enabled: false,
                        is_translator: false,
                        is_translation_enabled: null,
                        profile_background_color: null,
                        profile_background_image_url: null,
                        profile_background_image_url_https: null,
                        profile_background_tile: null,
                        profile_image_url: null,
                        profile_image_url_https:
                          "https://pbs.twimg.com/profile_images/941807338171777025/PRP6vwDq_normal.jpg",
                        profile_banner_url:
                          "https://pbs.twimg.com/profile_banners/17874544/1499274456",
                        profile_link_color: null,
                        profile_sidebar_border_color: null,
                        profile_sidebar_fill_color: null,
                        profile_text_color: null,
                        profile_use_background_image: null,
                        has_extended_profile: null,
                        default_profile: false,
                        default_profile_image: false,
                        following: false,
                        follow_request_sent: false,
                        notifications: false,
                        translator_type: null
                      },
                      geo: null,
                      coordinates: null,
                      place: null,
                      contributors: null,
                      is_quote_status: false,
                      retweet_count: 1466,
                      favorite_count: 3990,
                      favorited: false,
                      retweeted: false,
                      possibly_sensitive: false,
                      lang: "en"
                    },
                    retweet_count: 20,
                    favorite_count: 44,
                    favorited: false,
                    retweeted: false,
                    possibly_sensitive: false,
                    lang: "en"
                  }
                  console.log(newTweet);
                  axios.post("/tweets", newTweet).then(response => {
                    console.log(response.data)
                    this.props.dispatch(addOne(newTweet))
                    // console.log(response);
                    //to make an actual tweet come out of this end i would have to use vanilla javascript. Because the other methods would erase all the other tweets that are already there.. and that would take forever again.
                    //So i wanted to make a get request that would get all the tweets to populate with the tweet array tweets.
                  });
                }}
              />
            </section>
            <div
              style={{ height: "10px", background: "rgb(235, 233, 233)" }}
            ></div>
            <section id="display">
              <Container>
                {this.props.blue}
                {this.props.tweetsArray.map((tweet, num) => {
                  return (
                    <TweetPreview
                      linkTo={`Tweets/${tweet._id}`}
                      key={num}
                      id={tweet._id}
                      saveIDToState={e => {
                        console.log(e.currentTarget.href.slice(38));
                        this.props.dispatch(
                          saveID(e.currentTarget.href.slice(38))
                        );
                      }}
                      time={tweet.created_at}
                      authorName={tweet.user.name}
                      details={tweet.text}
                    />
                  );
                })}
              </Container>{" "}
            </section>
          </Route>
          <Route
            exact
            path="/LoggedIn/Tweets/:id"
            children={<Details blue="blue" />}
          />
        </Switch>{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  //mapStatetoProps "grabs" the state and connects it with this compoenent where state will be passed as props.
  return {
    tweetsArray: state.tweetsArray,
    changing: state.changing,
    counter: state.counter,
    email: state.email,
    id: state.id,
    name: state.name,
    phone: state.phone,
    photoUrl: state.photoUrl
  };
};
export default connect(mapStateToProps)(Home);

// {
//   /* <Route exact path="/LoggedIn/:id" component={Full} />
//           <Route exact path="/LoggedIn" component={List} /> */
// }
// {
//   /* <Route path="/services" render={() => <Services />} /> */
// }
