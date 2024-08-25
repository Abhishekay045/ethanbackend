const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

const githubData = {
    "login": "Abhishekay045",
    "id": 100961532,
    "node_id": "U_kgDOBgSM_A",
    "avatar_url": "https://avatars.githubusercontent.com/u/100961532?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Abhishekay045",
    "html_url": "https://github.com/Abhishekay045",
    "followers_url": "https://api.github.com/users/Abhishekay045/followers",
    "following_url": "https://api.github.com/users/Abhishekay045/following{/other_user}",
    "gists_url": "https://api.github.com/users/Abhishekay045/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Abhishekay045/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Abhishekay045/subscriptions",
    "organizations_url": "https://api.github.com/users/Abhishekay045/orgs",
    "repos_url": "https://api.github.com/users/Abhishekay045/repos",
    "events_url": "https://api.github.com/users/Abhishekay045/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Abhishekay045/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Kr. Yadav",
    "company": "NA",
    "blog": "NA",
    "location": "Moradabad",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 1,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-03-04T18:06:16Z",
    "updated_at": "2024-07-01T14:34:30Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/ethan",(req,res)=>{
    res.send("this is my  World and you are just inside it")
})

app.get("/github",(req,res)=>{
    res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
