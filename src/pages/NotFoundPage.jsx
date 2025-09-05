import React from "react";
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-3 text-slate-700">That page does not exist.</p>
          <div className="mt-6"><Link to="/"><Button variant="secondary" className="rounded-2xl">Go Home</Button></Link></div>
        </div>
      </Container>
    </section>
  );
}
