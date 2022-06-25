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
} from "reactstrap";
import user5 from "../../assets/images/users/user5.jpg";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/employees")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Employees</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Overview of the projects
            </CardSubtitle>
            <Link to={'/employees/create'}>
              <Button>Create New</Button>
            </Link>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Wage</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.wage}</td>
                    <td>
                      <Button color="primary" style={{ marginRight: "1rem" }}>
                        Edit
                      </Button>
                      <Button color="danger">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </>
    );
  }
}
export default Index;
