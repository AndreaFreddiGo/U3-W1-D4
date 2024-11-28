import { Component } from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.array.map((element) => {
          return <SingleComment book={element} key={element._id} />
        })}
      </ListGroup>
    )
  }
}

export default CommentList
