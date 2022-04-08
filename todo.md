# weekend-redux-feedback-loop

### database name: saga_movies_weekend

- [X] create database 
    - [X]] create tables and starting data supplied in data.sql file
        - [X] movies
        - [X] genres
        - [X] movies_genres
- [X] npm install
- [X] npm install redux@4 react-redux@7
- [X] npm install redux-logger
- [X] npm run server
- [X] npm run client

- [X] update index.js with static REDUX setup
    - [X] add boiler plate imports
    - [X] create reduxStore variable
    - [X] update ReactDom.render and Provider/Store prop

- [] Reducers needed in index.js
    - [] details reducer
    - [] addMovie reducer


- [] create component with wire frame for each page
    - [] details component
    - [] addMovie component
        - [] axios POST

- [] add a POST router to modules
    - [] update server.js with POST router

- [] change inputs to radio buttons
    - [] add validation logic to all inputs
    - [] comments does not need validation

- [] add navigation routers


#### Stretch

- [] allow user to edit the review component
- [] styling using Material-UI
- [] admin review all feedback
    - [] will need new route /admin
    - [ ] move admin button to nav bar
    - [ ] create home button to nav bar
    - [ ] delete feedback
    - [] most recent feedback at top of list. Order by ID
    - [ ] flag feedback?

- [ ] deploy to HeroKu