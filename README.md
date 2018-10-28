# social-network-task

> A Vue.js project

The goal of this test is to create a method of examining a Social Network. You are given dataset (data.json) representing a group of people, in the form of a social graph. Each person listed has one or more connections to the group.

Use dataset provided and develop a Web app or an API, which provides functionality to choose a person within the group stored in the database and display the following information about this person:

• Direct friends: those people who are directly connected to the chosen user;

• Friends of friends: those who are two steps away from the chosen user but not directly connected to the chosen user;

• Suggested friends: people in the group who are known by 2 or more direct friends of the chosen user but are not directly connected to the chosen user;


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
