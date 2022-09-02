const Comment = require("../models/Comments");

exports.postCommentHandler = (request, response) => {
  const item = request.body;

  const post = new Comment({
    comment: item.comment,
    parentId: item.parentId,
  });

  post
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      throw new Error(error);
    });
};
