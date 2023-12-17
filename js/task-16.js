/**
*? Поверніть об'єкт, в якому вказано кількість тегів.
*? Очікуваний результат {js: 3, nodejs: 3, html: 2, css: 2, react: 2}

 */

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const newTweets = tweets.flatMap(tweet => tweet.tags);
const newObj = newTweets.reduce((acc, tweet, index, arr) => {
   
        return {
        ...acc,
        [tweet]: acc[tweet] ? acc[tweet] + 1 : 1
    }
},{})




console.log(newTweets);
console.log(newObj);
