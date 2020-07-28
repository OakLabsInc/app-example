# app-example

[![release](https://img.shields.io/badge/release-v7.0.0-green.svg)](https://github.com/OakLabsInc/oak/releases/tag/7.0.0)
[![node](https://img.shields.io/badge/node-v12.18.3-green.svg)](https://github.com/nodejs/node/releases/tag/v12.18.3)
[![electron](https://img.shields.io/badge/electron-v7.3.2-green.svg)](https://github.com/electron/electron/releases/tag/v7.3.2)
[![Coverage Status](https://coveralls.io/repos/github/OakLabsInc/oak/badge.svg?t=zYcBU6)](https://coveralls.io/github/OakLabsInc/oak)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-green.svg)](http://standardjs.com/)

An example app that is descibed in more detail at <https://docs.zivelo.com/docs/writing-a-simple-application>

> Sample. Not to be used for production deployments

## Running locally

Make sure that you are running the right version of Node locally. You will find the required version in the `.nvmrc` file
If you are not running the same version (`node -v`) then you will need to run

``` bash
nvm install $(cat .nvmrc)
npm run rebuild
```

### Now you can run electron locally

``` bash
npm run dev
```

### Running and building in a docker container

``` bash
xhost +
docker-compose up --build
```

### Running  a docker container again

``` bash
docker-compose up
```

### Shutting down the  docker container

``` bash
# and to stop
Control + c
Control + c
docker-compose down
```

> Make sure to bring docker-compose down every time you run `docker-compose up`

## Example Installation

``` json
{
  "services": [
    {
      "image": "index.docker.io/oaklabs/app-example:latest",
      "environment": {
        "TZ": "America/Phoenix"
      }
    }
  ]
}

```
