import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GeneralInventory from "../components/GeneralInventory"

const InventoryPage = () => {
  return (
    <Container fluid>
      <GeneralInventory></GeneralInventory>
    </Container>
  );
};

export default InventoryPage;
