import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Row className="m-0 p- text-nowrap justify-content-left align-items-center">
          <Col
            sm={2}
            className=" p-0 m-0 col-2 sideNavButton text-align-left"
            /* onClick={(e) => openSideNav()} */
          >
            <i className="bi bi-list"></i>
          </Col>
          <Col sm={8} className="justify-content-center p-0 m-0 col-8">
            <span className="fw-bold align-center main-title">
              Weather Application
            </span>
          </Col>
          <Col className="col-2"></Col>
        </Row>
        

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
