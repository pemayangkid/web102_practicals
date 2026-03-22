// In-memory data store

const datastore = {
  users: [
    {
      id: 1,
      username: "alice",
      email: "alice@example.com",
      name: "Alice",
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
      updatedAt: null,
    },
    {
      id: 2,
      username: "bob",
      email: "bob@example.com",
      name: "Bob",
      followers: [],
      following: [],
      createdAt: new Date().toISOString(),
      updatedAt: null,
    },
  ],

  videos: [
    {
      id: 1,
      title: "Funny Dance",
      description: "My first dance video",
      url: "https://example.com/video1.mp4",
      userId: 1,
      likes: [],
      createdAt: new Date().toISOString(),
      updatedAt: null,
    },
    {
      id: 2,
      title: "Coding Tutorial",
      description: "Learn JS basics",
      url: "https://example.com/video2.mp4",
      userId: 2,
      likes: [],
      createdAt: new Date().toISOString(),
      updatedAt: null,
    },
  ],

  comments: [
    {
      id: 1,
      content: "Awesome video!",
      userId: 2,
      videoId: 1,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    },
    {
      id: 2,
      content: "Thanks for sharing",
      userId: 1,
      videoId: 2,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    },
  ],

  // Keep track of next IDs for new items
  nextIds: {
    users: 3,
    videos: 3,
    comments: 3,
  },
};

module.exports = datastore;