const Comments = require('../models/Comments');

exports.getCommentsHandler = (request, response) => 
{
    Comments.find()
    .then(data => response.json(data))
    .catch(error => 
    {
    	throw new Error(error);
    });
};