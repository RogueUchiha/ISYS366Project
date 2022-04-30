import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    quantity: "",
    imgurl: "",
  });

  const { name, price, quantity, imgurl } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(collection(db, "products"), {
      id: Date.now(),
      img: imgurl,
      name,
      price,
      stock: quantity,
    });

    toast.success(`Successfully added ${name} to products`, {
      theme: "dark",
    });

    e.target.reset();

    console.log("Document written: ", docRef);
  };

  return (
    <div>
      {/* AddProduct */}
      <Card className="container mt-3 pt-2 pb-3">
        <h3>Add Product</h3>
        {/* <Card.Text></Card.Text> */}

        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={onChange} required />
            {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
          </Form.Group>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" onChange={onChange} required />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="number" onChange={onChange} required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="imgurl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="url" onChange={onChange} required />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};
export default AddProduct;
