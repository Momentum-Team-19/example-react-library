import { useEffect, useState } from 'react'
import { getBooks } from './../requests'

const BookList = ({ token }) => {
  const [bookData, setBookData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getBooks(token)
      .then((res) => {
        setBookData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [token])

  if (!token) {
    return <h1>Log in to see books</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h2>Book List</h2>
      <div className="book-list container-box">
        {bookData.map((book) => (
          <div className="card" key={book.id}>
            <div className="content">
              <p>
                <h3>{book.title}</h3>
                {book.featured && <span className="featured">Featured</span>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
