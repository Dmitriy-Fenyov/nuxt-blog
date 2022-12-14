
const posts = [
  {title: 'Post 1', date: new Date(), views: 22, comments: [1,2], _id: 'id1'},
  {title: 'Post 2', date: new Date(), views: 22, comments: [1,2], _id: 'id2'}
]

export const actions = {
  async fetchAdmin({commit}) {
    try {
      return await this.$axios.$get('posts')
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({}, id) {

  },
  async update({}, {id, text}) {

  },
  async create({commit}, {title, text, image}) {

    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)

      return await this.$axios.$post('/posts', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id))
      }, 1000)
    })
  }
}
