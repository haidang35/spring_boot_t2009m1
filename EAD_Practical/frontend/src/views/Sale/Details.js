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

const SaleDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {

    fetchData();
  }, []);

  const fetchData = async () => {
    await axios
      .get("http://localhost:8080/api/v1/sales/" + id)
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
            Sales Details
          </CardTitle>
          <CardBody>
            {/* <Form action="#"> */}
            <FormGroup>
              <Label for="name">Id</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter here ..."
                type="text"
                disabled
                value={data.id}
              />
            </FormGroup>
            <FormGroup>
              <Label for="salesmanId">Salemans Id</Label>
              <Input
                id="salesmanId"
                name="salesmanId"
                placeholder="Enter here ..."
                type="text"
                disabled
                value={data.salesmanId}
              />
            </FormGroup>
            <FormGroup>
              <Label for="saleName">Sale Name</Label>
              <Input
                id="saleName"
                name="saleName"
                type="text"
                disabled
                value={data.saleName}
              />
            </FormGroup>
            <FormGroup>
              <Label for="dos">DOS</Label>
              <Input
                id="dos"
                name="dos"
                type="text"
                disabled
                value={data.dos}
              />
            </FormGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default SaleDetails;
