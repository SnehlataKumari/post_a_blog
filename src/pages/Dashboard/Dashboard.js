import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Dashboard.css"
import MediaList from "../../components/MediaList/MediaList";
import Paginator from "../../components/Paginator/Paginator";
function Dashboard() {
  return (
    <>
      <Jumbotron className="dashboard">
        <div className="greeting">
          <h5>FATMUG | </h5>
          <h6>Greetings! userName</h6>
          <div className="button">
            <Button variant="secondary">Write</Button>{" "}
            <Button variant="outline-secondary">Your Article</Button>{" "}
            <Button variant="light">Log out</Button>
          </div>
        </div>
        <Container>
          <Row>
            <Col sm={8}><MediaList/></Col>
            <Col sm={4}>sm=4</Col>
          </Row>
        </Container>
        <Paginator/>
      </Jumbotron>
    </>
  );
}
export default Dashboard;