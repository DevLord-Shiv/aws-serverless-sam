# aws-serverless-sam
AWS Server less API with API Gateway and lambda

## Requirements
1. Docker
2. Nodejs
3. SAM Local installed globally (npm install -g aws-sam-local)

## Installation and Execution

1. Clone Repo
2. Run 'npm install' in the directory
3. Run command 'sam local start-api'

## Endpoints

1. /list
   Description: Lists all the users available in database

2. /update
   Description: API to update user details based on ID
   Parameters:
    Query: id (user id)
    Body: 
      Application JSON
      name: user name
      description: user description
