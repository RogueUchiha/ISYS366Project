import { useState, useEffect, useRef } from "react";
import {
  collection,
  deleteDoc,
  onSnapshot,
  doc,
  getDocs,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { Table } from "react-bootstrap";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import ProductModal from "./ProductModal";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({});
  const [show, setShow] = useState(false);

  const childRef = useRef();

  useEffect(() => {
    onSnapshot(collection(db, "products"), (snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
      console.log(products);
    });
  }, []);

  const editProductModal = (item) => {
    setProductData(item);
    setShow(true);
    // console.log("edit", e, row);
  };

  const editProduct = async () => {
    console.log(productData);
    const q = query(
      collection(db, "products"),
      where("id", "==", productData.id)
    );

    const querySnapshot = await getDocs(q);

    let docId;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      docId = doc.id;
      console.log(docId);
    });

    console.log("edited product");

    await setDoc(doc(db, "products", docId), {
      id: productData.id,
      img: productData.img,
      name: productData.name,
      price: productData.price,
      stock: productData.stock,
    });

    setShow(false);

    // await deleteDoc(doc(db, "products", docId));

    // toast.success(`Successfully deleted ${productData.name} from products`, {
    //   theme: "dark",
    // });
  };

  const onChange = (e) => {
    setProductData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const deleteProduct = async (item) => {
    // await deleteDoc(doc(db, "products", item.id));
    // console.log(item);

    const q = query(collection(db, "products"), where("id", "==", item.id));

    const querySnapshot = await getDocs(q);

    let docId;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      docId = doc.id;
      console.log(docId);
    });

    await deleteDoc(doc(db, "products", docId));

    toast.success(`Successfully deleted ${item.name} from products`, {
      theme: "dark",
    });
  };

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {products.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <FaRegEdit onClick={() => editProductModal(item)} />{" "}
                <MdDeleteForever onClick={() => deleteProduct(item)} />
              </td>
            </tr>
          );
        })}
      </tbody>
      <ProductModal
        visibility={show}
        product={productData}
        showFunction={setShow}
        onChange={onChange}
        editProduct={editProduct}
      />
    </Table>
  );
};
export default ProductTable;
