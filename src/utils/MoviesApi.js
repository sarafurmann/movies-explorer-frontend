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

      return Promise.reject(`Ошибка: ${res.status}`)
    })
  }

  getMovies() {
    return this._request('')
  }
}

export const moviesApi = new Api(
  'https://api.nomoreparties.co/beatfilm-movies',
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
)
