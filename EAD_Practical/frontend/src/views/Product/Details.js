import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
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

const ProductDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://localhost:8080/api/v1/products/" + id)
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Product Details
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
                disabled
                value={data.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="foundingDate">Date Of Manf</Label>
              <Input
                id="foundingDate"
                name="foundingDate"
                type="text"
                required
                disabled
                value={data.dateOfManf}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                name="price"
                placeholder="Enter here ..."
                type="number"
                disabled
                value={data.price}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                name="description"
                type="text"
                disabled
                value={data.description}
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="district">Status</Label>
              <Input
                required
                id="status"
                name="status"
                type="select"
              >
                <option value={""}>Select status</option>
                <option value={0}>Using</option>
                <option value={1}>Under construction</option>
                <option value={2}>Repairing</option>
              </Input>
            </FormGroup> */}
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default ProductDetails;
