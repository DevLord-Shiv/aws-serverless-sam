'use strict'

var User = require('./classes/User');

module.exports.saveUser = (event, context, callback) => {
    var user = new User();
    if (!event || !event.body || !event.queryStringParameters.id) {
      const response = {
        statusCode: 400,
        body: JSON.stringify({error: 'id is required along with fields: name and description'})
      };
      return callback(null, response);
    }
    var params = JSON.parse(event.body);
    var user_id = event.queryStringParameters.id
    user.update(user_id, params.name, params.description).then(data => {
      const response = {
        statusCode: 200,
        body: JSON.stringify(data)
      };
      return callback(null, response);
    }).catch(err => {
      const response = {
        statusCode: 500
      };
      return callback(null, response);
    });
  }

  module.exports.listUser = (event, context, callback) => {
    var user = new User();
    user.list().then(data => {
      const response = {
        statusCode: 200,
        body: JSON.stringify(data)
      };
      return callback(null, response);
    }).catch(err => {
      const response = {
        statusCode: 500,
        body: JSON.stringify({
          message: 'Unable to get user list.',
          stack: err
        })
      };
      return callback(null, response);
    });
  }
