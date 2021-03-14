import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SignInPage.css";
import { useHistory } from "react-router";
function SignInPage() {
  let history = useHistory();
  return (
    <>
      <Form className="form">
        <Form.Group controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
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
          Sign In
        </Button>
        <Button variant="secondary" type="submit" onClick={() => history.push("/login")}>
          Log In
        </Button>
      </Form>
    </>
  );
}
export default SignInPage;
