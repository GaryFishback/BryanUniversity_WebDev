// dependencies
import React, { Component } from "react";
import axios from "axios";
import oauthSignature from "oauth-signature";
// components
// import "../Styles/Css/Moderator.css";

class Moderator extends Component {
  constructor() {
    super();
    this.state = {
      requestResponse: null,
      parameters: {
        oauth_consumer_key: "DhpvSBnHyZBDRdctePANMf6na", // your consumer_key
        oauth_token: "1219635091217027078-vnxK1gi4aNGsPJnFMRXiWmCnICfp8M", // your token
        oauth_signature_method: "HMAC-SHA1",
        oauth_timestamp: "",
        oauth_nonce: "",
        oauth_version: "1.0"
      },
      consumerSecret: "5IlLf180quNrrIhoA8yvh8bQxZAxLF4C7DihWPFQWGJombtcE9", // your consumer_secret
      tokenSecret: "pNRu7eiHIWPdjtUoa862wCVg6nHf8TF05TKQXeM8UgtsX" // your token_secret
    };
  }

  generateNonce = () => {
    let text = "";
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 11; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  handleSubmit = e => {
    e.preventDefault();

    // let getData = {
    //   title: this.refs.title.value,
    //   status: "publish",
    //   content: this.refs.content.value
    // };

    const requestParams = { ...this.state.parameters };
    requestParams.oauth_nonce = this.generateNonce(); // unique identifier
    requestParams.oauth_timestamp = new Date()
      .getTime()
      .toString()
      .slice(0, 10); // we need just the first 10 digits from current time
    const encodedSignature = oauthSignature.generate(
      "GET",
      "https://api.twitter.com/1.1/statuses/lookup.json?id=1125490788736032770",
      requestParams,
      this.state.consumerSecret,
      this.state.tokenSecret
    );

    const authorizationHeader = `OAuth oauth_consumer_key="DhpvSBnHyZBDRdctePANMf6na",oauth_token="1219635091217027078-vnxK1gi4aNGsPJnFMRXiWmCnICfp8M",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1580685388",oauth_nonce="5pjCnx8k9pA",oauth_version="1.0",oauth_signature="6yEzZAlun52bYbf1A7nhagj%2Bksg%3D"`;
    console.log(authorizationHeader);
    // const authorizationHeaderMine = `OAuth oauth_consumer_key="${requestParams.oauth_consumer_key}", oauth_token="${requestParams.oauth_token}"
    // , oauth_signature_method="${requestParams.oauth_signature_method}", oauth_timestamp="${requestParams.oauth_timestamp}", oauth_nonce="${requestParams.oauth_nonce}"
    // , oauth_version="${requestParams.oauth_version}", oauth_signature="${encodedSignature}"`;
    // console.log(authorizationHeaderMine);

    var xhr = new XMLHttpRequest(); //with the xhr directly from postman doesn't make any difference
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open(
      "GET",
      "https://api.twitter.com/1.1/statuses/lookup.json?id=1125490788736032770"
    );

    xhr.withCredentials = true;
    xhr.setRequestHeader("Bearer", "Token");
    xhr.setRequestHeader(
      "Authorization",
      'OAuth oauth_consumer_key="DhpvSBnHyZBDRdctePANMf6na",oauth_token="1219635091217027078-vnxK1gi4aNGsPJnFMRXiWmCnICfp8M",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1580685388",oauth_nonce="5pjCnx8k9pA",oauth_version="1.0",oauth_signature="6yEzZAlun52bYbf1A7nhagj%2Bksg%3D"'
    );
    xhr.setRequestHeader(
      "Access-Control-Allow-Origin",
      "http://clientDomain.com"
    );
    xhr.setRequestHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    xhr.setRequestHeader("Access-Control-Allow-Headers", "Content-Type");
    xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
    xhr.setRequestHeader(
      "Access-Control-Allow-Origin",
      "http://localhost:3002"
    ); //got an error about missing "Access-Control-Allow-Origin", with this is not gone.

    xhr.send();
    // const encodingHeader = header => { //with axios
    //   for (let i = 0; i < header.length; i++) {
    //     console.log(header.charAt(i));
    //   }
    // };
    // encodingHeader(authorizationHeader);
    // axios({
    //   method: "get",
    //   url:
    //     "https://api.twitter.com/1.1/statuses/lookup.json?id=1125490788736032770",
    //   headers: {
    //     // Accept: "application/json",
    //     // "Content-Type": "application/json",
    //     Authorization: authorizationHeader,
    //     Access: "*/*"
    //   }
    //   //   data: getData
    // })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="moderator">
        <form onSubmit={this.handleSubmit}>
          <label>
            Title
            <input type="text" ref="title" />
          </label>
          <br />
          <label>
            Content
            <textarea ref="content" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Moderator;
