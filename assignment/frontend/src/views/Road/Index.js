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
import user5 from "../../assets/images/users/user5.jpg";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      districts: [],
      search: "",
      districtId: 0,
    };
  }

  componentDidMount() {
    this.fetchData();
    this.fetchDistrictData();
  }

  fetchDistrictData = async () => {
    await axios.get("http://localhost:8080/api/v1/districts").then((res) => {
      this.setState({
        districts: res.data,
      });
    });
  };

  fetchData = () => {
    axios
      .get("http://localhost:8080/api/v1/roads?districtId=0&name=")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      });
  };

  onSearch = () => {
    const {search, districtId} = this.state;
    axios
    .get(`http://localhost:8080/api/v1/roads?districtId=${districtId}&name=${search}`)
    .then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  render() {
    const { data, districts, search, districtId } = this.state;
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Roads</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Overview of the projects
            </CardSubtitle>
            <Link to={"/roads/create"}>
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
                <Input
                  type="select"
                  name="districtId"
                  onChange={(ev) => this.setState({ districtId: ev.target.value })}
                >
                  <option value={0}>Select district</option>
                  {districts.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Input>
              </div>
              <div className="col-md-3">
                <Button onClick={this.onSearch} color="primary">Search</Button>
              </div>
            </div>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>District</th>
                  <th>Founding Date</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.districtId}</td>
                    <td>{item.foundingDate}</td>
                    <td>{item.status}</td>
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
