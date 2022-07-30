import { Pagination, PaginationItem } from "@mui/material";
import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Input,
} from "reactstrap";

const Index = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  let page = parseInt(query.get("page") || "1", 10);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/api/v1/sales?page=${page}`)
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Sales</CardTitle>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col-md-3">
              <Input type="text" name="search" placeholder="Search" />
            </div>
            <div className="col-md-3">
              <Button onClick={false} color="primary">
                Search
              </Button>
            </div>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Id</th>
                <th>Salemans Id</th>
                <th>Sale Name</th>
                <th>Product Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.content &&
                data.content.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{item.id}</td>
                    <td>{item.salesmanId}</td>
                    <td>{item.saleName}</td>
                    <td>{item.product && item.product.name}</td>
                    <td>
                      <Link to={`/sales/${item.id}`}>
                        <Button color="primary" style={{ marginRight: "1rem" }}>
                          View
                        </Button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Pagination
            page={page}
            count={data.totalPages}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/sales${item.page === 1 ? "" : `?page=${item.page}`}`}
                {...item}
              />
            )}
          />
        </CardBody>
      </Card>
    </>
  );
};
export default Index;
