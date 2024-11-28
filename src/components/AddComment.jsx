import { Component } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

class CommentList extends Component {
  render() {
    return (
      <>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </>
    )
  }
}

export default CommentList
