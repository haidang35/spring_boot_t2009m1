import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../constants/service";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Input,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Pagination, PaginationItem } from "@mui/material";
import { routes } from "../../../routes/Router";
import categoryService from "../services/CategoryService";

const CategoryList = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  let page = parseInt(query.get("page") || "1", 10);
  console.log("page", page);

  useEffect(() => {
    fetchCategoryListData();
  }, [page]);

  const fetchCategoryListData = async () => {
    const params = { page };
    await categoryService.getCategoryList(params).then((res) => {
      setData(res.data);
    });
  };

  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Category List</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>
          <Link to={routes.category.create.path}>
            <Button>Create New</Button>
          </Link>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col-md-3">
              <Input
                type="text"
                name="search"
                placeholder="Search"
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
              />
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
                <th>Name</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.content &&
                data.content.map((item, index) => (
                  <tr key={index} className="border-top">
                    <td>{item.id}</td>
                    <td>{item.name}</td>
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
          <Pagination
            page={page}
            count={data.totalPages}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`${routes.category.index.path}${
                  item.page === 1 ? "" : `?page=${item.page}`
                }`}
                {...item}
              />
            )}
          />
        </CardBody>
      </Card>
    </>
  );
};

export default CategoryList;
