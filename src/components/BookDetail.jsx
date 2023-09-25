import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
const BookDetail = ({ token }) => {
  const { bookId } = useParams()
  const [bookData, setBookData] = useState([])
  console.log("You're looking for book id ", bookId)

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/books/${bookId}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setBookData(res.data)
      })
  }, [bookId, token])

  return <h1 style={{ marginTop: '100px' }}> Detail about {bookData.title} </h1>
}

export default BookDetail
