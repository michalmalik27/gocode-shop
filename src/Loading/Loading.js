//import "./Loading.css";
import { Spinner, Alert } from "react-bootstrap";

const Loading = () => (
  <Alert variant="info">
    <Spinner animation="border" role="status"></Spinner>
    <span>Loading...</span>
  </Alert>
);

export default Loading;
