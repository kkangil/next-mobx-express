export default {
  POSTS: {
    GET: {
      method: 'GET',
      path: () => `api/posts`
    },
    GET_BY_ID: {
      method: 'GET',
      path: ({ id }) => `api/posts/${id}`
    }
  }
}