import React from "react";
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
  Table,
} from "reactstrap";
import { routes } from "../../../routes/Router";
import Form from "../../../components/form/Form";
import orderService from "../services/OrderService";

class OrderDetails extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({}),
      isSuccess: false,
    };
  }

  componentDidMount() {
    this.getOrderDetails();
  }

  getOrderDetails = async () => {
    const { id } = this.props.params;
    await orderService.getOrderDetails(id).then((res) => {
      this._fillForm(res.data);
    });
  };

  onSubmit = () => {
    this._validateForm();
    if (this._isFormValid()) {
    }
  };

  handleChangeFileUpload = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    const {
      customerName,
      customerPhone,
      customerEmail,
      customerAddress,
      note,
      status,
      paymentStatus,
      paymentMethod,
      orderDetails,
      totalMoney,
    } = this.state.form;
    return (
      <>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            OrderDetails
          </CardTitle>
          <CardBody>
            <Row>
              <Col xs={8}>
                <FormGroup>
                  <Label for="name">Customer Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter here ..."
                    type="text"
                    required
                    value={customerName && customerName.value}
                  />
                </FormGroup>
                <Row>
                  <Col xs={6}>
                    <FormGroup>
                      <Label for="name">Phone Number</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter here ..."
                        type="text"
                        required
                        value={customerPhone && customerPhone.value}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={6}>
                    <FormGroup>
                      <Label for="name">Email</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter here ..."
                        type="text"
                        required
                        value={customerEmail && customerEmail.value}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="address">Customer Address</Label>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Enter here ..."
                    type="text"
                    required
                    value={customerAddress && customerAddress.value}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="desc">Description</Label>
                  <Input
                    id="desc"
                    name="desc"
                    type="textarea"
                    value={note && note.value}
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <FormGroup>
                  <Label for="totalMoney">Total Money</Label>
                  <Input
                    id="totalMoney"
                    name="totalMoney"
                    placeholder="Enter here ..."
                    type="number"
                    required
                    value={totalMoney && totalMoney.value}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input required id="status" name="status" type="select">
                    <option value={""}>Select status</option>
                    <option value={0}>Active</option>
                    <option value={1}>Deactive</option>
                    <option value={2}>Repairing</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="status">Payment Method</Label>
                  <Input required id="status" name="status" type="select">
                    <option value={""}>Select status</option>
                    <option value={0}>Active</option>
                    <option value={1}>Deactive</option>
                    <option value={2}>Repairing</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>Thumbnail</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orderDetails &&
                orderDetails.value.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{++index}</td>
                    <td>
                      <img className="img-rounded" width={70} src={item.thumbnail}/>
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.unitPrice}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
            </Row>
            <Button onClick={this.onSubmit}>Submit</Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default withParams(OrderDetails);

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
