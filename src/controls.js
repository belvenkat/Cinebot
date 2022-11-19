const funFacts = {
  english: [" English your movie recommend", "1", "2", "3"],
  telugu: [" Telugu your movie recommend", "adsad", "asdsad", "adsadasd"],
  hindi: [" Hindi your movie recommend", "adsad", "asdsad", "adsadasd"],
};

const getRandomFunFact = (language = "english") => {
  const funFactsBasedonLanguage = funFacts[language];
  return funFactsBasedonLanguage[
    Math.floor(Math.random() * funFactsBasedonLanguage.length)
  ];
};

getRandomFunFact("english");

const controls = {
  start: {
    response:
      "Hi! I'm CineBot your movie recommendtion system. May I know your name?",
    options: [
      {
        label: "Hey CiniBot ! This is user_name",
        gotoKey: "user_name",
        contronType: "input",
      },
    ],
  },
  startover: {
    response:
      "Thanks for using Cinebot, Hope you enjoyed the movie, Let's see what do you like to see next ?",
    options: [{ label: "Recommand a Movie", gotoKey: "recommand_a_movie" }],
  },
  user_name: {
    response: "Hello user_name, can I know your age for better recommanditon?",
    options: [
      {
        label: "My age is user_age !!",
        gotoKey: "user_age",
        contronType: "input",
      },
    ],
  },
  user_age: {
    response: "user_age Sweet, Let's see how can I help?",
    options: [{ label: "Recommand a Movie", gotoKey: "recommand_a_movie" }],
  },
  recommand_a_movie: {
    response:
      "Movie Today seems Perfect, which languages do you Prefer today ?",
    options: [
      { label: "English", gotoKey: "english" },
      { label: "Hindi", gotoKey: "hindi" },
      { label: "Telugu", gotoKey: "telugu" },
    ],
  },
  english: {
    response: `Fun Fact, ${getRandomFunFact("english")}`,
    options: [
      { label: "Action", gotoKey: "english_action" },
      { label: "Drama", gotoKey: "english_drama" },
      { label: "Sci-Fi", gotoKey: "english_scifi" },
      { label: "Fantasy", gotoKey: "english_fantasy" },
      { label: "Adventure", gotoKey: "english_adventure" },
      { label: "Comedy", gotoKey: "english_comdey" },
      { label: "Romance", gotoKey: "english_romance" },
      { label: "Crime", gotoKey: "english_crime" },
      { label: "Animation", gotoKey: "english_animation" },
      { label: "Thriller", gotoKey: "english_thriller" },
      { label: "Biography", gotokey: "english_biography" },
    ],
  },
  telugu: {
    response: `Fun Fact, ${getRandomFunFact("english")}`,
    options: [
      { label: "Action", gotoKey: "telugu_action" },
      { label: "Drama", gotoKey: "telugu_drama" },
      { label: "Sci-Fi", gotoKey: "telugu_scifi" },
      { label: "Fantasy", gotoKey: "telugu_fantasy" },
      { label: "Adventure", gotoKey: "telugu_adventure" },
      { label: "Comedy", gotoKey: "telugu_comdey" },
      { label: "Romance", gotoKey: "telugu_romance" },
      { label: "Crime", gotoKey: "telugu_crime" },
      { label: "Thriller", gotoKey: "telugu_thriller" },
      { label: "Biography", gotokey: "telugu_biography" },
    ],
  },
  hindi: {
    response: `Fun Fact, ${getRandomFunFact("hindi")}`,
    options: [
      { label: "Suspense", gotoKey: "hindi_suspense" },
      { label: "Action", gotoKey: "hindi_action" },
      { label: "Drama", gotoKey: "hindi_drama" },
      { label: "Sci-Fi", gotoKey: "hindi_scifi" },
      { label: "Fantasy", gotoKey: "hindi_fantasy" },
      { label: "Adventure", gotoKey: "hindi_adventure" },
      { label: "Comedy", gotoKey: "hindi_comdey" },
      { label: "Romance", gotoKey: "hindi_romance" },
      { label: "Crime", gotoKey: "hindi_crime" },
      { label: "Thriller", gotoKey: "hindi_thriller" },
      { label: "Biography", gotokey: "hindi_biography" },
      { label: "Musical", gotoKey: "hindi_musical" },
    ],
  },
  english_action: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22action%22",
  },
  english_drama: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22drama%22",
  },
  english_scifi: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22scifi%22",
  },
  english_fantasy: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22fantasy%22",
  },
  english_adventure: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22adventure%22",
  },
  english_comdey: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22comdey%22",
  },
  english_romance: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22romance%22",
  },
  english_crime: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22crime%22",
  },
  english_animation: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22animation%22",
  },
  english_thriller: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22thriller%22",
  },
  english_biography: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22english%22&genres=%22biography%22",
  },
  telugu_action: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22action%22",
  },
  telugu_drama: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22drama%22",
  },
  telugu_scifi: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22scifi%22",
  },
  telugu_fantasy: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22fantasy%22",
  },
  telugu_adventure: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22adventure%22",
  },
  telugu_comdey: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22comdey%22",
  },
  telugu_romance: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22romance%22",
  },
  telugu_crime: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22crime%22",
  },

  telugu_thriller: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22thriller%22",
  },
  telugu_biography: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22telugu%22&genres=%22biography%22",
  },

  hindi_action: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22action%22",
  },
  hindi_drama: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22drama%22",
  },
  hindi_scifi: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22scifi%22",
  },
  hindi_fantasy: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22fantasy%22",
  },
  hindi_adventure: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22adventure%22",
  },
  hindi_comdey: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22comdey%22",
  },
  hindi_romance: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22romance%22",
  },
  hindi_crime: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22crime%22",
  },
  hindi_musical: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22musical%22",
  },
  hindi_thriller: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22thriller%22",
  },
  hindi_biography: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22biography%22",
  },
  hindi_suspense: {
    response: "Great, I have these recommandations for you",
    options: [],
    recommandations:
      "https://cinebot-81244-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json?orderBy=%22language%22&equalTo=%22hindi%22&genres=%22suspense%22",
  },
};

export default controls;
