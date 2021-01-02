<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest


<p align="center">
A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>

<p>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMexsonFernandes%2Fnestjs-swagger-docker-k8s-mysql&count_bg=%2325388B&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
</p>

## Description

[Nestjs](https://github.com/nestjs/nest) based admin panel of SIAS 360 platform.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Migrate

```bash
$ yarn migrate all
$ yarn makemigrations
```

# Docker

```bash
docker-compose -f docker-compose.development.yml up --build
```

# Nest

```bash
yarn start:dev
```

# Deploy k8s

```bash
  kubectl create secret docker-registry registrypullsecret --docker-server=registry.gitlab.com --docker-username=sias360 --docker-email=robomex2020@gmail.com --docker-password=DOCKER_PASSWORD
  kubectl apply -f manifest.yml
  kubectl get pods
```
