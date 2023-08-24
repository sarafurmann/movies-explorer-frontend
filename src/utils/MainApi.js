export class Api {
  constructor(baseUrl, options) {
    this._baseUrl = baseUrl
    this._options = options
  }

  _request(path, method, body) {
    return fetch(`${this._baseUrl}/${path}`, {
      method,
      body: JSON.stringify(body),
      ...this._options,
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }

      return Promise.reject(res)
    })
  }

  signup({ name, email, password }) {
    return this._request('signup', 'POST', {
      name,
      email,
      password,
    })
  }

  signin({ email, password }) {
    return this._request('signin', 'POST', {
      email,
      password,
    })
  }

  likeMovie({
    nameEN,
    nameRU,
    movieId,
    thumbnail,
    trailerLink,
    image,
    description,
    year,
    director,
    duration,
    country,
    owner,
  }) {
    return this._request('movies', 'POST', {
      nameEN,
      nameRU,
      movieId,
      thumbnail,
      trailerLink,
      image,
      description,
      year,
      director,
      duration,
      country,
      owner,
    })
  }

  dislikeMovie(movieId) {
    return this._request(`movies/${movieId}`, 'DELETE')
  }

  getMovies() {
    return this._request('movies')
  }

  me() {
    return this._request('users/me')
  }

  editUser({ name, email }) {
    return this._request('users/me', 'PATCH', { name, email })
  }
}

export const mainApi = new Api(
  'https://api.movies-explorer-sara.nomoreparties.sbs',
  {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  },
)
