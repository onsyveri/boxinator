import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./login.css";
import keycloak from "../../keycloak";
import { useState } from "react";
import PackageModalGuest from "../../components/Modal/PackageModalGuest";


const LoginForm = () => {

  console.log("URL:" + process.env.REACT_APP_API_URL);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CardGroup className="groubcard">
        <Card id="allCard">
          <Card.Body>
            <Card.Text>
              If you have registered before, go ahead and login
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {!keycloak.authenticated && (
              <Button
                className="Btn"
                onClick={() => keycloak.login({redirectUri: process.env.REACT_APP_URL + "home"})}>
                Login
              </Button>
            )}
          </Card.Footer>
        </Card>
        {/* ---------------------REGISTER CARD -------------------------------------*/}
        <Card id="allCard">
          <Card.Body>
            <Card.Text>
              Here you can register for the first time.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            {!keycloak.authenticated && (
              <Button
                className="Btn"
                onClick={() => keycloak.register({redirectUri: process.env.REACT_APP_URL + "register"})}>
                Register
              </Button>
            )}
          </Card.Footer>
        </Card>
      </CardGroup>
     
    </>
  );
};

export default LoginForm;
