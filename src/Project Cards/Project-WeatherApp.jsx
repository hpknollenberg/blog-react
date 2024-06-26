import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const styles = {
    card: {
      margin: '30px',
      width: '18rem',
      boxShadow: '10px 10px 10px rgb(72, 15, 72)'
    }
  }

function WeatherApp() {
  return (
    <Card style={{...styles.card}}>
            <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">04/12/2023</Card.Subtitle>
            <Card.Text>
            This project consisted of creating a weather app via an API and JavaScript...
            </Card.Text>
            <Link to="https://hpknollenberg.github.io/weather-app/">See More</Link>
        </Card.Body>
    </Card>
  );
}

export default WeatherApp;