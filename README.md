# Excelian coding challenge

## How to run
As a usual create-react-app application
```
yarn start
```
If you do not have yarn, then
```
npm start
```

## How to test
```
yarn test
```

## Frameworks / libs / boilerplates used

* The project is generated using create-react-app to speed up development.
Obviously can be done without it, but would require some time to set it up

* React (surprise!), Redux (most popular choice, I assume that most of your projects are running on Redux)

* Material-UI - a library of component having material design

## Why is code is structured how it is structured?

I could make the search component to be completelly independent from outside of the application,
having integration into Redux and MobX architecture (by customising properties) and using network connector from outside
(your custom REST client for react, Apollo GraphQL client, etc...), but decided to make it as a complete redux application
since I assume you are interested in the way I would create a complete application

