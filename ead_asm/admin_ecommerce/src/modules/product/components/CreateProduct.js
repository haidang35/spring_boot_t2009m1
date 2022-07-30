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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import categoryService from "../../category/services/CategoryService";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import storage from "../../../configs/firebaseConfig";
import productService from "../services/ProductService";

// 2. Set your cloud name
//========================

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "demo",
  },
});
// 3. Get your image
//===================
// Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
const myImage = cld.image("docs/models");
// 4. Transform your image
//=========================
// Resize to 250 x 250 pixels using the 'fill' crop mode.
myImage.resize(fill().width(250).height(250));
// 5. Deliver your image
// =========================
// Render the image in a React component.

class CreateProduct extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: this._getInitFormData({
        name: "",
        categoryId: "",
        desc: "",
        price: 0,
        details: "",
        quantity: "",
        thumbnail: "",
        status: "",
      }),
      isSuccess: false,
      categoryList: [],
      percent: 0,
      file: "",
      fileUrl: "",
    };
  }

  componentDidMount() {
    this.getCategoryList();
  }

  onSubmit = () => {
    this._validateForm();
    if (this._isFormValid()) {
      const { name, categoryId, desc, price, details, quantity, status } =
        this.state.form;
      const { categoryList, fileUrl } = this.state;
      let category = { id: 0 };
      categoryList.forEach((cate) => {
        if (cate.id == categoryId.value) {
          category = cate;
        }
      });
      const data = {
        name: name.value,
        category,
        unitPrice: price.value,
        description: desc.value,
        quantity: quantity.value,
        details: details.value,
        status: status.value,
        thumbnail: fileUrl,
      };
      productService.createNewProduct(data).then((res) => {
        this.setState({
          isSuccess: true,
        });
      });
    }
  };

  handleChangeDetails = (ev, editor) => {
    const data = editor.getData();
    let { form } = this.state;
    form.details = data;
    this.setState({ form });
  };

  getCategoryList = async () => {
    await categoryService.getCategoryList().then((res) => {
      this.setState({
        categoryList: res.data.content,
      });
    });
  };

  handleUploadFile = () => {
    const { file } = this.state;
    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        // update progress
        this.setState({
          percent,
        });
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          this.setState({
            fileUrl: url,
          });
        });
      }
    );
  };

  handleChangeFileUpload = (event) => {
    this.setState({
      file: event.target.files[0],
    });
  };

  render() {
    const {
      name,
      quantity,
      price,
      thumbnail,
      desc,
      details,
      categoryId,
      status,
    } = this.state.form;
    const { isSuccess, categoryList, percent, fileUrl } = this.state;
    if (isSuccess) return <Navigate to={routes.category.index.path} />;
    return (
      <>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Create Product
          </CardTitle>
          <CardBody>
            <Row>
              <Col xs={8}>
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
                  {name.err && (
                    <FormFeedback>Name cannot be empty</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    placeholder="Enter here ..."
                    type="number"
                    required
                    invalid={price.err == "*"}
                    onChange={(ev) => this._setValue(ev, "price")}
                  />
                  {price.err && (
                    <FormFeedback>Price cannot be empty</FormFeedback>
                  )}
                </FormGroup>
                <CKEditor
                  editor={ClassicEditor}
                  data={""}
                  onChange={(event, editor) =>
                    this.handleChangeDetails(event, editor)
                  }
                />

                <FormGroup>
                  <Label for="desc">Description</Label>
                  <Input
                    id="desc"
                    name="desc"
                    type="textarea"
                    onChange={(ev) => this._setValue(ev, "desc")}
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                {fileUrl && (
                  <img src={fileUrl} width={150} className="img-rounded" />
                )}
                <input
                  type="file"
                  onChange={this.handleChangeFileUpload}
                  accept="/image/*"
                />
                <button onClick={this.handleUploadFile}>
                  Upload to Firebase
                </button>
                <p>{percent} "% done"</p>
                <FormGroup>
                  <Label for="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    name="quantity"
                    placeholder="Enter here ..."
                    type="number"
                    required
                    invalid={quantity.err == "*"}
                    onChange={(ev) => this._setValue(ev, "quantity")}
                  />
                  {quantity.err && (
                    <FormFeedback>Quantity cannot be empty</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="category">Select Category</Label>
                  <Input
                    required
                    id="category"
                    name="categoryId"
                    type="select"
                    onChange={(ev) => this._setValue(ev, "categoryId")}
                    invalid={categoryId.err == "*"}
                  >
                    <option value={""}>Select category</option>
                    {categoryList.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Input>
                  {categoryId.err && (
                    <FormFeedback>Category cannot be empty</FormFeedback>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input
                    required
                    id="status"
                    name="status"
                    type="select"
                    onChange={(ev) => this._setValue(ev, "status")}
                    invalid={status.err == "*"}
                  >
                    <option value={""}>Select status</option>
                    <option value={0}>Active</option>
                    <option value={1}>Deactive</option>
                    <option value={2}>Repairing</option>
                  </Input>
                  {status.err && (
                    <FormFeedback>Status cannot be empty</FormFeedback>
                  )}
                </FormGroup>
              </Col>
            </Row>

            <Button onClick={this.onSubmit}>Submit</Button>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default CreateProduct;
