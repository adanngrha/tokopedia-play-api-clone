# Tokopedia Play API Clone

## Installation 
To clone and run a this API on your machine, make sure you have [NodeJs](https://nodejs.org/en) and [MongoDB](https://www.mongodb.com) installed on your machine, then 
follow these steps:

1. Clone the repository using `git clone` command:
```sh
git clone https://github.com/adanngrha/tokopedia-play-api-clone.git
```

2. Go to the project directory:
```sh
cd tokopedia-play-api-clone
```

3. Install all dependencies using `npm install` command:
```sh
npm install
```

4. Add a `.env` file before running the project, create a new file called `.env` in the root directory of the project. Then, add any environment variables you need, using the `KEY=VALUE` format. For example:

```
NODE_ENV=development // can be changed into production
PORT=3080 // port you want to use
MONGO_CONNECTION_STRING_PROD={copy your mongodb atlas connection string here}
MONGO_CONNECTION_STRING_DEV=mongodb://localhost:27017/tokopedia_play_clone
SECRET_KEY='{add your secret key here, it can be anything}'

```

5. (Optional) if you want to seeding the database, run this command:
```sh
npm run seed
```

6. Run the API using `npm run dev` command for development mode:
```sh
npm run dev
```

 or `npm run start` command for production mode:
```sh
npm run start
```

7. The API is running on port `3080` by default. You can change the port by editing the `PORT` variable in `.env` file.

That's it! You should now have the API running locally on your machine.

## Docker Images
You can get this app image right [here](https://hub.docker.com/repository/docker/adanngrha/tokopedia-play-api-clone/general).

## Database Schema

### User

| Field      | Type   | Description       |
|------------|--------|-------------------|
| username   | String | User's username   |
| email      | String | User's email      |
| password   | String | User's password   |
| url_avatar | String | User's avatar url |

### Videos

| Field         | Type   | Description           |
|---------------|--------|-----------------------|
| title         | String | Video's title         |
| description   | String | Video's description   |
| url_video     | String | Video's url           |
| url_thumbnail | String | Video's thumbnail url |
| created_at    | Date   | Video's created date  |

### Products

| Field       | Type | Description            |
|-------------| ---- |------------------------|
| video_id    | ObjectId | Product's video        |
| title       | String | Product's title        |
| price       | Number | Product's price        |
| url_image   | String | Product's image url    |
| url_product | String | Product's product url  |
| created_at  | Date | Product's created date |

### Comments

| Field     | Type     | Description            |
|-----------|----------|------------------------|
| video_id  | ObjectId | Comment's video        |
| username  | String   | Comment's username     |
| comment   | String   | Comment's comment      |
| createdAt | Date     | Comment's created date |

## API Documentation can be found on this [gist](https://gist.github.com/adanngrha/257f480b51fb2ae7cf12a4b64e699d54).
