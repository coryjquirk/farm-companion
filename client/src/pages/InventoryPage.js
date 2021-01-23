import React from "react";
import { Col, Row, Container } from "../components/Grid";
import SeedInventory from "../components/SeedInventory"

const InventoryPage = () => {
  return (
    <Container fluid>
      <SeedInventory></SeedInventory>
    </Container>
  );
};

export default InventoryPage;
