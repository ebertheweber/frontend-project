import { config } from "@/helpers/config";
import React from "react";
import { Container, Row } from "react-bootstrap";
import "./topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar">
      <Container>
        <div className="slogan d-flex align-items-center gap-2">
          <i className="pi pi-megaphone"></i>
          <div>{config.project.slogan}</div>
        </div>
        <div>Login</div>
      </Container>
    </div>
  );
};

export default Topbar;
