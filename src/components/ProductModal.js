import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function ProductModal({
  visibility,
  product,
  showFunction,
  onChange,
  editProduct,
}) {
  const { name, price, stock } = product;

  console.log(product);

  const handleClose = () => showFunction(false);

  return (
    <>
      <Modal show={visibility} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={onChange}
                value={name}
                required
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  onChange={onChange}
                  value={price}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="stock">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  onChange={onChange}
                  value={stock}
                  required
                />
              </Form.Group>
            </Row>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            {/* <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductModal;
