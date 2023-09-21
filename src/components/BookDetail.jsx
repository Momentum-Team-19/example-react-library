import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
const BookDetail = ({ token }) => {
  const { bookId } = useParams()
  console.log("You're looking for book id ", bookId)

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${bookId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => console.log(res.data))
  }, [bookId, token])

  return <h1 style={{ marginTop: '100px' }}> This is book detail</h1>
}

export default BookDetail
