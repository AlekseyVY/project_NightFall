# Overview of project:

The app is basically random reading app with user sign in and login functions, after you sign in or login you get redirected to page with logout and 
get dstory buttons, get story button will fetch random stroy to read and logout will log you out of app.

I made this project by using NodeJS, express at backend and React with axios at frontend.
Backend communicated with frontend thru API endpoints. I started implementing my project bt writing API endpoints document, from that I 
choosed to write it in javascript by using NodeJs and express as server, I made that decision mainly because I want to challenge myself with new techology.
I implemented user registration by using bycrypt library to convert passwords into hashes and only then store them in database, I made that decision to not store 
plain passwords in database. For database I choosed postgres with ORM sequelize to comunicate to database, I choosed postgres to learn it in conjunction with ORM since Postgres is dominant on job market. For user authentication I used JWT technology that creates JSON web token and stored it in localstorage on user register or login, localstorage is cleared after logout. Front end is made of React and axios library which handles requests to API endpoints, for frontend routing I used simple React-router library. Story after fetched from database are stored inot localstorage and cleared with logout. To upload story there is hidden route /createStory where you can upload additional stories.

I hosted frontend on Netlifly for learning CI/CD principles and backend is hosted on Heroku for the same purpose, on Github I used project to add tasks and verify complition of different functions. 

# Frontend: https://flamboyant-banach-a4efe5.netlify.app/

# Backend: https://project-night-fall.herokuapp.com/