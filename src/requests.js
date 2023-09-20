import axios from 'axios'

export const getBooks = (token) => {
  const booksUrl = 'http://localhost:8000/api/books'
  return axios.get(booksUrl, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
}
