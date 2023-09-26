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

- [ ] `Dockerfile` configure
  - Follow this step to configure docker image. Create a file called
    `Dockerfile` and add this following code on this file.
  ```Dockerfile
    FROM node:slim
  ```
- [ ] Build Docker Image
- [ ] Create Docker Container
- [ ] Run NodeJs Server from docker
