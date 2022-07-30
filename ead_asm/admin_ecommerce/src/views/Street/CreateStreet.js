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
        districtId: 0,
        status: 0,
        foundingDate: "",
        desc: "",
      }),
      districts: [],
      isSuccess: false,
    };
  }

  componentDidMount() {
    this.fetchDistrictData();
  }

  fetchDistrictData = async () => {
    await axios.get("http://localhost:8080/api/v1/districts").then((res) => {
      this.setState({
        districts: res.data,
      });
    });
  };

  onSubmit = () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { name, foundingDate, desc, status, districtId } = this.state.form;
      const { districts } = this.state;
      let district =  {id: 0, name: ''};
      districts.forEach(item => {
        if(item.id == districtId.value) {
          district = item;
        }
     });
     console.log('asdasd', district);
      axios
        .post("http://localhost:8080/api/v1/streets", {
          name: name.value,
          foundingDate: foundingDate.value,
          description: desc.value,
          status: status.value,
          district,
        })
        .then((res) => {
          this.setState({
            isSuccess: true,
          });
        });
    }
  };

  render() {
    const { name, foundingDate, status, desc, districtId } =
      this.state.form;
    const { isSuccess, districts } = this.state;
    if (isSuccess) return <Navigate to={"/streets"} />;
    return (
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-bell me-2"> </i>
              Create Street
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
                <Label for="foundingDate">Founding Date</Label>
                <Input
                  id="foundingDate"
                  name="foundingDate"
                  placeholder="Enter here ..."
                  type="date"
                  required
                  invalid={foundingDate.err == "*"}
                  onChange={(ev) => this._setValue(ev, "foundingDate")}
                />
                {foundingDate.err && (
                  <FormFeedback>Founding Date cannot be empty</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="district">Select District</Label>
                <Input
                  required
                  id="district"
                  name="districtId"
                  type="select"
                  onChange={(ev) => this._setValue(ev, "districtId")}
                  invalid={districtId.err == "*"}
                >
                  <option value={""}>Select District</option>
                  {districts.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Input>
                {districtId.err && (
                  <FormFeedback>District cannot be empty</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="district">Status</Label>
                <Input
                  required
                  id="status"
                  name="status"
                  type="select"
                  onChange={(ev) => this._setValue(ev, "status")}
                  invalid={status.err == "*"}
                >
                  <option value={""}>Select status</option>
                  <option value={0}>Using</option>
                  <option value={1}>Under construction</option>
                  <option value={2}>Repairing</option>
                </Input>
                {status.err && (
                  <FormFeedback>Status cannot be empty</FormFeedback>
                )}
              </FormGroup>
              <FormGroup>
                <Label for="desc">Description</Label>
                <Input
                  id="desc"
                  name="desc"
                  type="textarea"
                  onChange={(ev) => this._setValue(ev, "desc")}
                />
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
