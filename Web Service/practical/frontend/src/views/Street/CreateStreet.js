import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import Form from "../../components/form/Form";

class CreateStreet extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        name: "",
        salary: 0,
      }),
      isSuccess: false,
    };
  }

  onSubmit = () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { name, salary } = this.state.form;
      axios
        .post("http://localhost:8080/api/v1/employees", {
          name: name.value,
          salary: salary.value,
        })
        .then((res) => {
          this.setState({
            isSuccess: true,
          });
        });
    }
  };

  render() {
    const { name, salary } = this.state.form;
    const { isSuccess, districts } = this.state;
    if (isSuccess) return <Navigate to={"/employees"} />;
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Create Employee
            </CardTitle>
            <CardBody>
              {/* <Form action="#"> */}
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter here ..."
                  type="text"
                  required
                  invalid={name.err == "*"}
                  onChange={(ev) => this._setValue(ev, "name")}
                />
                {name.err && <FormFeedback>Name cannot be empty</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="salary">Founding Date</Label>
                <Input
                  id="salary"
                  name="salary"
                  placeholder="Enter here ..."
                  type="number"
                  required
                  invalid={salary.err == "*"}
                  onChange={(ev) => this._setValue(ev, "salary")}
                />
                {salary.err && (
                  <FormFeedback>Founding Date cannot be empty</FormFeedback>
                )}
              </FormGroup>
              <Button onClick={this.onSubmit}>Submit</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default CreateStreet;
