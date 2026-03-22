const datastore = require("../models");

// GET all comments
const getAllComments = (req, res) => {
  res.status(200).json(datastore.comments);
};

// GET comment by ID
const getCommentById = (req, res) => {
  const commentId = parseInt(req.params.id);

  const comment = datastore.comments.find(c => c.id === commentId);

  if (!comment) {
    return res.status(404).json({ error: "Comment not found" });
  }

  res.status(200).json(comment);
};

// POST create a new comment
const createComment = (req, res) => {
  const { content, userId, videoId } = req.body;

  if (!content || !userId || !videoId) {
    return res.status(400).json({
      error: "Required fields missing"
    });
  }

  const userExists = datastore.users.some(
    u => u.id === parseInt(userId)
  );

  const videoExists = datastore.videos.some(
    v => v.id === parseInt(videoId)
  );

  if (!userExists) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  if (!videoExists) {
    return res.status(404).json({
      error: "Video not found"
    });
  }

  const newComment = {
    id: datastore.nextIds.comments++,
    content,
    userId: parseInt(userId),
    videoId: parseInt(videoId),
    createdAt: new Date().toISOString()
  };

  datastore.comments.push(newComment);

  res.status(201).json(newComment);
};

// PUT update a comment
const updateComment = (req, res) => {
  const commentId = parseInt(req.params.id);

  const commentIndex = datastore.comments.findIndex(
    c => c.id === commentId
  );

  if (commentIndex === -1) {
    return res.status(404).json({
      error: "Comment not found"
    });
  }

  const { content } = req.body;

  const comment = datastore.comments[commentIndex];

  if (content) {
    comment.content = content;
  }

  comment.updatedAt = new Date().toISOString();

  res.status(200).json(comment);
};

// DELETE a comment
const deleteComment = (req, res) => {
  const commentId = parseInt(req.params.id);

  const commentIndex = datastore.comments.findIndex(
    c => c.id === commentId
  );

  if (commentIndex === -1) {
    return res.status(404).json({
      error: "Comment not found"
    });
  }

  datastore.comments.splice(commentIndex, 1);

  res.status(204).end();
};

module.exports = {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};