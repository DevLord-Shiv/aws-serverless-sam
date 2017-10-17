var AWS = require('aws-sdk'),
    uuid = require('uuid');

class user {
    constructor() {
        // this.db = new AWS.DynamoDB.DocumentClient();
    }

    // Need access to AWS access_key and secret_key for using DynamoDB
    save(name, description) {
        var params = {
            TableName: 'users',
            Item: {
                'id': uuid.v4(),
                'name': name,
                'description': description
            }
        };
        return new Promise((resolve, reject) => {
            var response = {
                status: 'Saved',
                user: params.Item
            };
            resolve(response);
        });
    }

    // Need access to AWS access_key and secret_key for using DynamoDB
    list() {
        var params = {
            TableName: "users"
        };
        return new Promise ((resolve, reject) => {
            var user_list = [
                {
                    id: '001',
                    name: 'Sample User 1',
                    description: 'Sample Description'
                },
                {
                    id: '002',
                    name: 'Sample User 2',
                    description: 'Sample Description'
                },
                {
                    id: '003',
                    name: 'Sample User 3',
                    description: 'Sample Description'
                },
                {
                    id: '004',
                    name: 'Sample User 4',
                    description: 'Sample Description'
                }
            ];
            resolve(user_list);
        });
    }
}

module.exports = user;