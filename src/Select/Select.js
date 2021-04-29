import { useEffect, useState } from "react";
//import "./Select.css";
import { Form, Col } from "react-bootstrap";

const Select = ({ title, list, onSelected }) => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (onSelected) onSelected(selected);
  }, [selected]);

  return (
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>{title}</Form.Label>
      <Form.Control
        as="select"
        onChange={(e) => {
          setSelected(e.target.value);
        }}
      >
        <option value="">All...</option>
        {list.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default Select;
