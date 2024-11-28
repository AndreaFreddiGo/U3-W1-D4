import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BookList from './components/BookList'
import horror from './data/horror.json'

function App() {
  return (
    <div>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main className="bg-warning p-3">
        <Container>
          <Row className="g-3">
            <BookList genre={horror} />
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
