import { Container, Tabs, Tab } from "react-bootstrap";
import AddProduct from "./AddProduct";
import ProductTable from "../components/ProductTable";

const ProductManagment = () => {
  return (
    <Container className="mt-3">
      <Tabs
        defaultActiveKey="add"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="add" title="Add">
          {/* <Sonnet /> */}
          <AddProduct />
        </Tab>
        <Tab eventKey="edit" title="Edit/Delete">
          {/* <Sonnet /> */}
          <ProductTable />
        </Tab>
        {/* <Tab eventKey="delete" title="Delete">
          <Sonnet />
        </Tab> */}
      </Tabs>
    </Container>
  );
};
export default ProductManagment;
