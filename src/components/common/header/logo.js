import { config } from "@/helpers/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavbarBrand } from "react-bootstrap";

const Logo = ({theme="dark"}) => {
  return (
    <NavbarBrand href="/" as={Link}>
      <Image
        src={`/img/logos/logo-${theme}.png`}
        alt={config.project.name}
        width={200}
        height={90}
      />
    </NavbarBrand>
  );
};

export default Logo;
