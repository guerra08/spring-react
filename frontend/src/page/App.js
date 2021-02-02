import { Container } from "@material-ui/core";
import UserList from "../component/UserList";

import "../style/index.css"
import "../style/App.css"

function App() {
  return (
    <Container fixed>
      <div className="main-container">
        <h1>Spring Boot with React</h1>
        <UserList/>
      </div>
    </Container>
  );
}

export default App;
