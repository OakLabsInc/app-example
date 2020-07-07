# app-example

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
      "image": "index.docker.io/oaklabs/app-example:release-1.0.2",
      "environment": {
        "TZ": "America/Phoenix"
      }
    }
  ]
}

```
