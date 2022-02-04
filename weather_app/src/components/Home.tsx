import {
  Button,
  Container,
  Row,
  Col,
  FormControl,
  Form,
  InputGroup,
  FloatingLabel,
  
} from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="City"
                  aria-label="City"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text>
                  <Button variant="outline-secondary">Search</Button>
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
