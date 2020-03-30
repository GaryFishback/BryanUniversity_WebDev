//what is an object .... what objects have we seen containing data while getting things from an API
const uuid = require("uuid");
//a method is a function set as a property of an object that enacts itself UPON the object itself
module.exports = [
  {
    created_at: "Sun Mar 22 14:19:40 +0000 2020",
    _id: uuid.v4(), //1241731273799892994,
    id_str: "1241731273799892994",
    text:
      "You always know what you need to do. It's just whether or not you actually take the action.",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(), //1216412080233799680,
      id_str: "1216412080233799680",
      name: "Andrew Gunderman",
      screen_name: "Agunderman10",
      location: "",
      description: "Freshman at OSU, Founder of Sprout, Founder, CEO of Vyra",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 12,
      friends_count: 27,
      listed_count: 0,
      created_at: "Sun Jan 12 17:30:20 +0000 2020",
      favourites_count: 11,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 8,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: true,
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
    favorite_count: 3,
    favorited: true,
    retweeted: false,
    lang: "en"
  },
  {
    created_at: "Tue Mar 10 00:20:55 +0000 2020",
    _id: uuid.v4(), //1237171539600183296,
    id_str: "1237171539600183296",
    text:
      "Too many times we conform to who we think others want us to be. \n\nStop that. Be you.\n\n#inspiration #motivation #entrepreneur #leadership",
    truncated: false,
    entities: {
      hashtags: [
        {
          text: "inspiration",
          indices: [86, 98]
        },
        {
          text: "motivation",
          indices: [99, 110]
        },
        {
          text: "entrepreneur",
          indices: [111, 124]
        },
        {
          text: "leadership",
          indices: [125, 136]
        }
      ],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(), //1216412080233799680,
      id_str: "1216412080233799680",
      name: "Andrew Gunderman",
      screen_name: "Agunderman10",
      location: "",
      description: "Freshman at OSU, Founder of Sprout, Founder, CEO of Vyra",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 12,
      friends_count: 27,
      listed_count: 0,
      created_at: "Sun Jan 12 17:30:20 +0000 2020",
      favourites_count: 11,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 8,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: true,
      follow_request_sent: false,
      notifications: false,
      translator_type: "none"
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 1,
    favorite_count: 2,
    favorited: true,
    retweeted: false,
    lang: "en"
  },
  {
    created_at: "Wed Feb 05 22:57:18 +0000 2020",
    _id: uuid.v4(), //1225191697002438663,
    id_str: "1225191697002438663",
    text:
      '"Most people fail because they #major in #minor things."\n#TonyRobbins',
    truncated: false,
    entities: {
      hashtags: [
        {
          text: "major",
          indices: [31, 37]
        },
        {
          text: "minor",
          indices: [41, 47]
        },
        {
          text: "TonyRobbins",
          indices: [57, 69]
        }
      ],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(), //1219775745246892034,
      id_str: "1219775745246892034",
      name: "Vyra",
      screen_name: "joinvyra",
      location: "Columbus, OH",
      description: "Changing the way the world runs technical interviews.",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 9,
      friends_count: 9,
      listed_count: 0,
      created_at: "Wed Jan 22 00:18:23 +0000 2020",
      favourites_count: 5,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 10,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1221917870575247362/zsIjrMqS_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1221917870575247362/zsIjrMqS_normal.jpg",
      profile_banner_url:
        "https://pbs.twimg.com/profile_banners/1219775745246892034/1580162847",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: true,
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
    favorite_count: 1,
    favorited: true,
    retweeted: false,
    lang: "en"
  },
  {
    created_at: "Wed Jan 15 22:56:09 +0000 2020",
    _id: uuid.v4(), //1217581262740713472,
    id_str: "1217581262740713472",
    text:
      "The moment you stop blaming everyone else and realize that you need to focus on improving yourself - your life will become so much better.",
    truncated: false,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: []
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(), //1216412080233799680,
      id_str: "1216412080233799680",
      name: "Andrew Gunderman",
      screen_name: "Agunderman10",
      location: "",
      description: "Freshman at OSU, Founder of Sprout, Founder, CEO of Vyra",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 12,
      friends_count: 27,
      listed_count: 0,
      created_at: "Sun Jan 12 17:30:20 +0000 2020",
      favourites_count: 11,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 8,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: true,
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
    favorite_count: 4,
    favorited: true,
    retweeted: false,
    lang: "en"
  },
  {
    created_at: "Sat Jan 18 17:35:30 +0000 2020",
    _id: uuid.v4(), //1218587731212800002,
    id_str: "1218587731212800002",
    text:
      "Why would you focus on everyone else when you could focus on yourself? Live your life, not theirs.\n\n#truth… https://t.co/nwewoXx0ry",
    truncated: true,
    entities: {
      hashtags: [
        {
          text: "truth",
          indices: [100, 106]
        }
      ],
      symbols: [],
      user_mentions: [],
      urls: [
        {
          url: "https://t.co/nwewoXx0ry",
          expanded_url: "https://twitter.com/i/web/status/1218587731212800002",
          display_url: "twitter.com/i/web/status/1…",
          indices: [108, 131]
        }
      ]
    },
    source:
      '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      _id: uuid.v4(), //1216412080233799680,
      id_str: "1216412080233799680",
      name: "Andrew Gunderman",
      screen_name: "Agunderman10",
      location: "",
      description: "Freshman at OSU, Founder of Sprout, Founder, CEO of Vyra",
      url: null,
      entities: {
        description: {
          urls: []
        }
      },
      protected: false,
      followers_count: 12,
      friends_count: 27,
      listed_count: 0,
      created_at: "Sun Jan 12 17:30:20 +0000 2020",
      favourites_count: 11,
      utc_offset: null,
      time_zone: null,
      geo_enabled: false,
      verified: false,
      statuses_count: 8,
      lang: null,
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: "F5F8FA",
      profile_background_image_url: null,
      profile_background_image_url_https: null,
      profile_background_tile: false,
      profile_image_url:
        "http://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1216412269250142208/NHKrnXuR_normal.jpg",
      profile_link_color: "1DA1F2",
      profile_sidebar_border_color: "C0DEED",
      profile_sidebar_fill_color: "DDEEF6",
      profile_text_color: "333333",
      profile_use_background_image: true,
      has_extended_profile: true,
      default_profile: true,
      default_profile_image: false,
      following: true,
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
    favorite_count: 2,
    favorited: true,
    retweeted: false,
    lang: "en"
  }
];
