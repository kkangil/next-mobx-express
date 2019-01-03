import request from 'superagent'
import APIS from '@/apis'

export default {
  getPosts: async function () {
    return new Promise((resolve, reject) =>
      request(
        APIS.POSTS.GET.method,
        APIS.POSTS.GET.path()
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  },

  getPostById: async function (id) {
    return new Promise((resolve, reject) =>
      request(
        APIS.POSTS.GET_BY_ID.method,
        APIS.POSTS.GET_BY_ID.path({ id })
      ).end((err, res) => {
        if (err) reject(res.body)
        else resolve(res.body)
      })
    )
  }
}