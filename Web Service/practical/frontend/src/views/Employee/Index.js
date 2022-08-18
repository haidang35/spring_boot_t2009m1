import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Input,
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      districts: [],
      search: "",
      districtId: 0,
      itemDelete: {},
      isDelete: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get("http://localhost:8080/api/v1/employees").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  };

  setDelete = () => {
    this.setState({
      isDelete: !this.state.isDelete,
    });
  };

  handleChooseDelete = (item) => {
    this.setState({
      itemDelete: item,
      isDelete: true,
    });
  };

  handleDelete = async () => {
    const { itemDelete } = this.state;
    await axios
      .delete(`http://localhost:8080/api/v1/employees/${itemDelete.id}`)
      .then((res) => {
        this.fetchData();
        this.setDelete();
      });
  };

  render() {
    const { data, search, isDelete, itemDelete } = this.state;
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Employees</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Overview of the projects
            </CardSubtitle>
            <Link to={"/employees/create"}>
              <Button>Create New</Button>
            </Link>
            <div className="row" style={{ marginTop: "2rem" }}>
              <div className="col-md-3">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search"
                  value={search}
                  onChange={(ev) => this.setState({ search: ev.target.value })}
                />
              </div>
              <div className="col-md-3">
                <Button onClick={this.onSearch} color="primary">
                  Search
                </Button>
              </div>
            </div>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to={`/employees/${item.id}`}>
                        <Button color="primary" style={{ marginRight: "1rem" }}>
                          Edit
                        </Button>
                      </Link>
                      <Button
                        color="danger"
                        onClick={() => this.handleChooseDelete(item)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <Modal isOpen={isDelete} toggle={this.setDelete}>
          <ModalHeader toggle={this.setDelete}>Confirmation Delete</ModalHeader>
          <ModalBody>
            Are you sure to delete {itemDelete && itemDelete.name}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleDelete}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={this.setDelete}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Index;
