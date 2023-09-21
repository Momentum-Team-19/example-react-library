import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import './BookCard.css'

export const BookCard = ({ title, id, featured }) => {
  return (
    <div className="book card" id={id}>
      <div className="card-content">
        <div>{title}</div>
        {featured && (
          <div className="featured-container">
            <span className="icon">
              <FontAwesomeIcon icon={faFeather} />
            </span>
            <span className="text">featured</span>
          </div>
        )}
      </div>
    </div>
  )
}
