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
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class UpdateEmployee extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        name: "",
        salary: 0,
      }),
      isSuccess: false,
      data: {},

    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const { id } = this.props.params;
    await axios
      .get(`http://localhost:8080/api/v1/employees/${id}`)
      .then((res) => {
        this._fillForm({
          name: res.data.name,
          salary: res.data.salary,
        });
      });
  };

  onSubmit = () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { name, salary } = this.state.form;
      const { id } = this.props.params;
      axios
        .put(`http://localhost:8080/api/v1/employees/${id}`, {
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
    const { isSuccess } = this.state;
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
                  value={name.value}
                  onChange={(ev) => this._setValue(ev, "name")}
                />
                {name.err && <FormFeedback>Name cannot be empty</FormFeedback>}
              </FormGroup>
              <FormGroup>
                <Label for="salary">Salary</Label>
                <Input
                  id="salary"
                  name="salary"
                  placeholder="Enter here ..."
                  type="number"
                  required
                  invalid={salary.err == "*"}
                  value={salary.value}
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
export default withParams(UpdateEmployee);
