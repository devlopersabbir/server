# TypeScript NodeJs Server Setup with Docker

## TODO

- [x] Create Docker ignore file

  - Explain docker ignore and ignoring file

    Docker ignore works as like the same `.gitignore`. Mainly docker ignore file
    will ignore like node_modules, dist, .coverage, .env etc...

    #####

    Let's create a file called `.dockerignore` and add this following code

    ```ignore
      node_modules
      .env
      .git
      .DS_Store
      dist
      .aws
      .coverage
      .idea
    ```

    You can also ignore more file and folder.

- [x] `Dockerfile` configure

  - Follow this step to configure docker image. Create a file called
    `Dockerfile` and add this following code on this file.

  ```Dockerfile
    FROM node:slim
    WORKDIR /node_server
    COPY ./package*.json ./
    RUN npm install
    COPY . .
    EXPOSE 5000
    CMD [ "npm", "run", "dev" ]
  ```

  1. FROM is means what is we want to do and where?
  2. WORKDIR is means what is my working directory to creating our docker image
  3. COPY can copy package lock from our project file. You can also copy
     anything what ever you want. COPY take 2 argument like `source` and `dest`
     source is our package lock or pnpm lock or whatever, and dest is our
     current directory which is /app so we can define it `./`
  4. RUN Command to install depedence RUN command help to install our project
     depedence i mean node_modules
  5. Again COPY command is take to pareameter like taking file and folder from
     working direcotry and paste our docker working diretory. `. .` the first
     dot is means copy everything from our project root direcotry,, and second .
     is means paste copyed file to our docker project file i mean `node_server`
     directory.

  6. EXPOSE is required but it's not define our server running port. EXPOSE take
     a parameter called port, I mean our server running port.
  7. CMD command to run our server. whatever you can put like `npm run dev`, or
     `npm run start` based on your package.json file

- [x] Build Docker Image

  ```console
  docker build -t node_server_image .
  ```

  #### Line Explain

  - `docker build` is a command by default to builder our docker image. And ther
    `-t` flag to help us make a name of our image.
  - `node_server_image` is a just image name if you want you can make anything
    it's just our docker image name. So, you can choice anything whatever you
    want.
  - `.` lastly dot so why dot? dot will help to build our docker image inside
    our directory like `node_server`

- [x] Check docker image
  - Once you builded a docker image then you should check it's really created or
    not.
  - To check the docker image your can run this command
  ```console
  docker image ls
  ```
  this command means give me all list of our docker images
  - Make sure we seen docker images. And copy the image name which we recently
    created.
- [x] Create Docker Container & Run

  ```console
  docker run -rm -d -p 5000:5000 --name node_server_container node_server_image
  ```

  - docker run is default command to run a docker container.
  - `-rm` is means remove. For example we have already a docker container then
    if then if we want to run again our same docker container then it's make a
    error because of our docker container is already have. So to fix this error
    then we should use `-rm` flag to remove existing docker container and create
    new one in the same nam.
  - `-d` is mean.. out docker container will run in our system background. not
    our terminal
  - `-p` flag is means our docker port and our server port. The first port
    `5000` this is our host port and second `5000` is our docker host port. If
    you want you can customize it.

    #####

    **NOTE:** our server will run at `5000` port

  - `--name` flag is means our docker container name,, yo can give anything for
    creating a container
  - After that just add our docer image name. finished

- [x] Run NodeJs Server from docker
