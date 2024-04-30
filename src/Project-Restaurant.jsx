import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function Restaurant() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>Random Restaurant</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">04/26/2023</Card.Subtitle>
            <Card.Text>
            This project consisted of creating a restaurant menu via an API and React...
            </Card.Text>
            <Link to="https://random-restaurant-pi.vercel.app/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default Restaurant;