import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footerStyle">
      <MDBFooter className="text-center text-lg-start text-muted">
        <section className="title">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto">
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon icon="gem" className=" me-1" />
                  Boxinator
                </h6>
                <p>
                 Boxinator is a web application for sending out mystery boxes to friends around the world 

                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-1" />
                  Noroff -Oslo, Norway
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-1" />
                  boxinator.group@gmail.com
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className="backgr-foot">
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright: 
          <a className="text-reset fw-bold" href="https://boxinatorfrontendtest.herokuapp.com/">
            BoxinatorGroup-Noroff
          </a>
        </div>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
