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
- [ ] Create Docker Container
- [ ] Run NodeJs Server from docker
