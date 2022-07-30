import React from "react";
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
import axios from "axios";
import { routes } from "../../../routes/Router";
import { BASE_URL } from "../../../constants/service";
import Form from "../../../components/form/Form";
import categoryService from "../services/CategoryService";

class CreateCategory extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        name: "",
        parentId: "",
        desc: "",
      }),
      isSuccess: false,
    };
  }

  onSubmit = async () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { name } = this.state.form;
      const data = {
        name: name.value,
      };
      await categoryService.createNewCategory(data).then((res) => {
        this.setState({
          isSuccess: true,
        });
      });
    }
  };

  render() {
    const { name } = this.state.form;
    const { isSuccess } = this.state;
    if (isSuccess) return <Navigate to={routes.category.index.path} />;
    return (
      <>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Create Category
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
            {/* <FormGroup>
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
            </FormGroup> */}
            <Button onClick={this.onSubmit}>Submit</Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CreateCategory;
