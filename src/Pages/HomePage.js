import React from "react";
import ImageGrid from "../Components/ImageGrid";
import "./HomePage.css";

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";

const style = {
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="homepageContent">
        <ImageGrid />
        <p className="moto">with Heyaband you </p>
        <p className="moto">get lost in The Music</p>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim
        </div>
        <button className="btn" onClick={handleOpen}>
          View Albums
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography variant="h3" align="center">
              Get Newsletter
            </Typography>
            <Box sx={{ mt: 5 }}>
              <TextField
                sx={{ my: 2 }}
                required
                id="outlined-required"
                label="NAME"
                placeholder="Name"
                fullWidth
              />
              <TextField
                sx={{ my: 2 }}
                required
                id="outlined-required"
                label="MOBILE No"
                placeholder="Mobile No"
                fullWidth
              />
              <TextField
                sx={{ my: 2 }}
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                fullWidth
              />

              <Button variant="contained" color="success" >
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default HomePage;
