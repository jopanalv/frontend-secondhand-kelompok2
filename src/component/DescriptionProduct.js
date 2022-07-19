import React from "react";
import { Card, Container } from "react-bootstrap";

export function DescriptionProduct({ description }) {
  return (
    <>
      <div className="mb-3 mt-4">
        <Card className="card-description text-black">
          <Container className="py-3">
            <h4 className="fw-bold text-black">Deskripsi</h4>
            <p style={{ textAlign: "justify" }}>{description}</p>
          </Container>
        </Card>
      </div>
    </>
  );
}
