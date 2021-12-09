# Livescore Football Frontend
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development sandbox
In the project directory, you can run `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Docker
1. Run javascript react build to execute tasks like minification and concatenation of the source codes ```npm run build```
2. In order to build docker image run following command: ```docker build -t krzysioooo/livescore-football-frontend:1 .```
3. Test the image using container: ```docker run -p 80:80 krzysioooo/livescore-football-frontend:1```
4. Using IDE create a new tag on git repository and push it to origin.
5. Push image to Docker Hub with: ```docker push krzysioooo/livescore-football-frontend:DOCKER_TAG```

## Deployment on AWS
1. Login via SSH to the frontend EC2
2. `docker pull krzysioooo/livescore-football-frontend:DOCKER_TAG`
3. `docker stop CONTAINER_ID`
4. `docker run -p 80:80 krzysioooo/livescore-football-frontend:DOCKER_TAG`
5. Verify AWS frontend instance in browser
