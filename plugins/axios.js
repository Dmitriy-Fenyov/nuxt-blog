export default function ({ $axios, redirect, store }) {

  $axios.interceptors.request.use(request => {

    if (store.getters['auth/isAuthenticated'] && !request.headers.common['Authorization']) {
      const token = store.getters['auth/token']
      request.headers.common['Authorization'] = `Bearer ${token}`
    }
    console.log(request.headers)
    return request
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/admin/login?message=session')
      store.dispatch('auth/logout')
    }

    if (code === 500) {
      console.error('Server 500 error')
    }
  })
}

