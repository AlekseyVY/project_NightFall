# Overview of project:

The app is basically random reading app with user sign in and login functions, after you sign in or login you get redirected to page with logout and 
get dstory buttons, get story button will fetch random stroy to read and logout will log you out of app.

I made this project by using NodeJS, express at backend and React with axios at frontend.
Backend communicated with frontend thru API endpoints. I started implementing my project bt writing API endpoints document, from that I 
choosed to write it in javascript by using NodeJs and express as server, I made that decision mainly because I want to challenge myself with new techology.
I implemented user registration by using bycrypt library to convert passwords into hashes and only then store them in database, I made that decision to not store 
plain passwords in database. For database I choosed postgres with ORM sequelize to comunicate to database, I choosed postgres to learn it in conjunction with ORM since Postgres is dominant on job market. For user authentication I used JWT technology that creates JSON web token and stored it in localstorage on user register or login, localstorage is cleared after logout. Front end is made of React and axios library which handles requests to API endpoints, for frontend routing I used simple React-router library. Story after fetched from database are stored inot localstorage and cleared with logout. To upload story there is hidden route /createStory where you can upload additional stories. RIGHT NOW CREATE STORY IS COMMENTED OUT FOR SECURITY REASONS!

I hosted frontend on Netlifly for learning CI/CD principles and backend is hosted on Heroku for the same purpose, on Github I used project to add tasks and verify complition of different functions. 

# Frontend: https://flamboyant-banach-a4efe5.netlify.app/

# Backend: https://project-night-fall.herokuapp.com/


# Instructions to run Project:

You can navigate to links where it is already deployed on hosting platforms, links provided on top of these instructions.
Or if you want to run project localy just run npm init in root of project to initiate backend dependencies and run npm start,
for frontend you need to cd into project_nightfall_frontend, run npm init to initiate frontend dependencies of project, change links in axios to localhost where backend is
running since right now it fetches data from heroku hosted backend and run npm start to run frontend part of project.
Or you can simply git clone from my repository: https://github.com/AlekseyVY/project_NightFall

# I deleted node modules prior to zipping my project into archive and submitting.