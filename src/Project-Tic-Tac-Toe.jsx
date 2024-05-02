import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function TicTacToe() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>Tic-Tac-Toe</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">04/19/2023</Card.Subtitle>
            <Card.Text>
            This project consisted of creating a tic-tac-toe game via JavaScript...
            </Card.Text>
            <Link to="https://hpknollenberg.github.io/tic-tac-toe/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default TicTacToe;