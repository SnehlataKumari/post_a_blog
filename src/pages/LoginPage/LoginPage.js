import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";
import { useHistory } from "react-router";
function LoginPage() {
  let history = useHistory();
  return (
    <>
      <Form className="form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group controlId="formBasicCheckbox">
          <Form.Control placeholder="Sign up" />
        </Form.Group> */}
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Button variant="secondary" type="submit" onClick={() => history.push("/sign-in")}>
          Sign In
        </Button>
      </Form>
    </>
  );
}
export default LoginPage;