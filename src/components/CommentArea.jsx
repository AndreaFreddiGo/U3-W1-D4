import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    reviews: [],
  }

  getsReviews = () => {
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4OGQxYTA2ZmM4YzAwMTU2Yjg3OGEiLCJpYXQiOjE3MzI4MDc5NjIsImV4cCI6MTczNDAxNzU2Mn0.MRbxUHRZi1aSWV_q9m--e8pMC73RqEYGF-oKPfHn0TI',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero delle recensioni')
        }
      })
      .then((arrayOfReviews) => {
        console.log('ARRAY', arrayOfReviews)
        this.setState({ reviews: arrayOfReviews })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getReviews()
  }

  render() {
    return (
      <>
        <CommentList array={reviews} />
        <AddComment />
      </>
    )
  }
}

export default CommentArea
