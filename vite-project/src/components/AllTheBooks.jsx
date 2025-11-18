import { Container, Row, Col, Card } from 'react-bootstrap'
import { Component } from 'react'
import books from '../data/fantasy.json'

class AllTheBooks extends Component {
    state={
        activeBook : books,
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col className='flex-wrap'>
                        <div>
                            <h1 className="text-center my-3">I migliori libri {books[0].category} del web!</h1>
                            <Card>
                                <Card.Img variant={books.title} src={books.img} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AllTheBooks