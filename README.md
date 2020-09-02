# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

___

##CRUD operations

GET `/api/restaurants/:id` -> lists information and related articles for restaurant with specified id

POST `/api/restaurants` -> adds new restaurant. The following information is required in this template:
  ```
  {
    restaurantName: ``.
    dishName1: '',
    dishImage1: '',
    dishName2: '',
    dishImage2: '',
    dishName3: '',
    dishImage3: '',
    tip: '',
    features: '',
    tags: '',
    articles: '',
  }
  ```

PUT `/api/restaurants/:id` -> updates any values listed. Provide:
```
["nameOfKey", "value"]

```

DELETE `/api/restaurant/:id` -> deletes restaurant with specified id

