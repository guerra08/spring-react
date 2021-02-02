import { Container } from "@material-ui/core";
import UserList from "./component/UserList";
import UserForm from "./component/UserForm";
import { UserProvider } from './store/UserContext';

import "./style/index.css"
import "./style/App.css"

function App() {
  return (
    <Container fixed>
      <div className="main-container">
        <h1>Spring Boot with React</h1>
        <UserProvider>
          <UserForm/>
          <UserList/>
        </UserProvider>
      </div>
    </Container>
  );
}

export default App;
