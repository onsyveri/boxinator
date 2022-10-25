import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./login.css";
import keycloak from "../../keycloak";
import { useState } from "react";
import PackageModalGuest from "../../components/Modal/PackageModalGuest";


const LoginForm = () => {

  const [isOpen, setIsOpen] = useState(false)




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
                onClick={() => keycloak.login()}>
                Login
              </Button>
            )}
            {keycloak.authenticated ? window.location.assign("/home") : null}
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
                onClick={() => keycloak.register()}>
                Register
              </Button>
            )}
            {keycloak.authenticated ? window.location.assign("/register") : null}
          </Card.Footer>
        </Card>
        {/**-----------------------------GUEST CARD-------------------------------- */}
        <Card id="allCard">
          <Card.Body>
            <Card.Text>
              Do you want to add a package without registering? Use the Guest
              button.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              className="Btn"
              onClick={() => setIsOpen(true)}>
              Guest
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      {isOpen && <PackageModalGuest setIsOpen={setIsOpen} />}
    </>
  );
};

export default LoginForm;
