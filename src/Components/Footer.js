// import { Box, Stack } from "@mui/material";
import "./Footer.css";
import React from "react";
import Guitar from "../guitar.jpg";
import { Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => (
  <div className="footer">
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        direction="row"
        mt={4}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img src={Guitar} alt="guitarLogo" className="logoImage" />
        </Link>

        <span
          style={{ fontSize: "20px", fontWeight: "600", marginLeft: "5px" }}
        >
          Heyaband
        </span>
      </Stack>
      <Stack direction="row" gap={3}  mt={4}>
        <FacebookIcon size="large" />
        <TwitterIcon />
        <InstagramIcon />
      </Stack>
    </Container>
  </div>
);

export default Footer;
