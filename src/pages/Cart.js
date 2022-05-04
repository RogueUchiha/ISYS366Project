import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Container,
  Card,
} from "react-bootstrap";
import { db } from "../firebase.config";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import Message from "../components/Message";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const test = false;

  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
      console.log(products);
    });
  }, []);

  const deleteProduct = (itemId) => {
    setProducts(products.filter((item) => item.id !== itemId));
  };

  return (
    <Container className="mt-2">
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {test ? (
            <Message>Your cart is empty</Message>
          ) : (
            <ListGroup variant="flush">
              {products.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.img} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>{item.name}</Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control as="select" value={1}>
                        {[...Array(item.stock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => deleteProduct(item.id)}
                      >
                        <Delete />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  Subtotal ({products.reduce((acc, item) => acc + 1, 0)}) items
                </h3>
                <Row>
                  <Col md={"4"}>Before Tax</Col>
                  <Col className="float-right" md={"4"}>
                    $
                    {products
                      .reduce((acc, item) => acc + 1 * item.price, 0)
                      .toFixed(2)}
                  </Col>
                </Row>

                <Row>
                  <Col className="text-right" md={"4"}>
                    <p className="text-right">Tax</p>
                  </Col>
                  <Col md={"3"}>
                    $
                    {(
                      products.reduce((acc, item) => acc + 1 * item.price, 0) *
                      0.06
                    ).toFixed(2)}
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col className="text-right" md={"4"}>
                    <p className="text-right">Total</p>
                  </Col>
                  <Col md={"3"}>
                    $
                    {(
                      products.reduce((acc, item) => acc + 1 * item.price, 0) *
                      1.06
                    ).toFixed(2)}
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        {/* <Col md={2}></Col> */}
      </Row>
    </Container>
  );
};
export default Cart;
