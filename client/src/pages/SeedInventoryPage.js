import React from "react";
import { Container } from "../components/Grid";
import SeedInventory from "../components/SeedInventory"

const InventoryPage = () => {
  return (
    <Container fluid>
      <SeedInventory></SeedInventory>
    </Container>
  );
};

export default InventoryPage;
