import Menu from './Menu'
import Restaurant from "./Project-Restaurant.jsx"
import Weather from "./Project-WeatherApp.jsx"
import TicTacToe from "./Project-Tic-Tac-Toe.jsx"

const styles = {
    card: {
      margin: '15px',
      width: '18rem'
    }
  }

function Projects() {
  return (
    <div>
        <Menu />
        <h1 className="p-4">Projects</h1>
        <div className="row">
          <Restaurant />
          <TicTacToe />
          <Weather />
        </div>
    </div>
  );
}

export default Projects;