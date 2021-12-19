# Action Cable Rails Chat App with React Hooks

## Description

This app has different chatrooms which provide real time communication using Action Cable and established Web Socket Connection, based on how you feel you can enter any chatroom.

![projectdemo](Images/gif-2.gif)

## => [Blog Post Explaining the Concept of Action Cable and Websockets](https://salonimehta27.medium.com/action-cable-chatapp-with-react-hooks-69d5d55c7475)

## => [Video Demo on Youtube](https://www.youtube.com/watch?v=NwQEZXnVXJ8&t=1s)

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

## Setup

run:

```sh
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

## Roadmap

- Create a feature to add multiple Chatrooms and broadcast them
- Use Action Mailer for Email verification
