# Graph Back

A CRUD of Users and Posts with relationship one to many, using Data Sources
to manage connections to databases and REST APIs and Data Loaders to solve N + 1 problem

## Tech Stack


**Server:** Node, GraphQL, Apollo Server


## Run Locally

Clone the project

```bash
  git clone https://github.com/mpluiz/graph-back.git
```

Go to the project directory

```bash
  cd graph-back
```

Install dependencies

```bash
  yarn
```

Env configuration

```bash
  cp .env-example .env
```


Start the server

```bash
  yarn dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`APP_PORT` APPLICATION PORT

`API_URL` API REST URL


## API Reference

- [Insomnia Request GraphQL Collection](https://raw.githubusercontent.com/mpluiz/graph-back/master/docs/Insomnia.json)
- [API REST](https://github.com/mpluiz/simple-api-rest)


## How to contribute

- Make a fork of this repository
- Create a branch with your resource: `git checkout -b your-branch`
- Make a commit : `git commit -m 'show...'`
- Push to your branch: `git push origin your-branch`

---


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Documentation

[Documentation](https://linktodocumentation)

