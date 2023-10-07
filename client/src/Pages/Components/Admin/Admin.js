import React, { useEffect } from "react";
import "../Admin/Admin.css";
import { useState } from "react";
import Axios from "axios";

import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

import AddLinkIcon from "@mui/icons-material/AddLink";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useForm, Controller } from "react-hook-form";

import { useNavigate } from "react-router";

const Admin = () => {
  const navigate = useNavigate();

  const [isDelete, setIsDelete] = React.useState(false);
  const handleOpenDeleteBox = () => setIsDelete(true);
  const handleCloseDeleteBox = () => setIsDelete(false);



  const [isUpdate, setIsUpdate] = React.useState(false);
  const handleOpenUpdateBox = () => setIsUpdate(true);
  const handleCloseUpdateBox = () => setIsUpdate(false);

  const [openUpdateForm, setIsUpdateForm] = React.useState(false);
  const handleOpenUpdateForm = () => setIsUpdateForm(true);
  //const handleCloseUdateForm = () => setIsUpdateForm(false);
  const handleCloseUdateForm = () => {
    setIsUpdateForm(false);
    setIsUpdate(false);
  };

  const [ratingValue, setRatingValue] = React.useState(2);

  const [review, setReview] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("AdminCondition") === "true") {
      Axios.get("http://localhost:3001/reviews").then((response) => {
        setReview(response.data);
      });
    } else {
      navigate("/");
    }
  }, [navigate]);

  const [id, setId] = useState();
  const handleDeleteClick = () => {
    handleCloseDeleteBox();
    Axios.post("http://localhost:3001/adminDelete", { Id: id })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [a, setA] = useState([]);

  const handleConfirmUpdate = (id) => {
    setIsUpdate(true);
    console.log(id);
    const filteredReview = review.filter((item) => {
      return item._id === id;
    });
    console.log(filteredReview);
    setA(filteredReview);
    // console.log(a);
  };

  const { control, handleSubmit, reset } = useForm();
  const updateSubmit = (data) => {
    data.id = a[0]._id;
    console.log(data);
    Axios.post(`http://localhost:3001/updateLink`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsUpdateForm(false);
    setIsUpdate(false);
  };

  const [selectedDate, setSelectedDate] = useState("");
  const filteredReviews = review.filter((item) => {
    if (!selectedDate) {
      return true;
    }
    const reviewDate = new Date(item.TimeofUpload);
    // Extract year, month, and day components from both dates
    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth();
    const selectedDay = selectedDate.getDate();

    const reviewYear = reviewDate.getFullYear();
    const reviewMonth = reviewDate.getMonth();
    const reviewDay = reviewDate.getDate();

    // Compare the year, month, and day components
    return (
      selectedYear === reviewYear &&
      selectedMonth === reviewMonth &&
      selectedDay === reviewDay
    );
  });

  const handleLogoutClick = () => {
    localStorage.setItem("AdminCondition", "false");
    navigate("/");
  };

  return (
    <>
      <div className="admin-main-div">
        <div className="panel-div">
          <div className="log-btn-dv">
            {" "}
            <Button onClick={handleLogoutClick}>LOGOUT</Button>
            {/* onClick={() => setIsLogOut(true)} */}
          </div>
          <div className="adm-text-div">
            <h3 style={{ textAlign: "center" }}>ADMIN PANEL</h3>
          </div>
          <div className="adm-date-div">
            <input
              type="Date"
              // value={selectedDate.toISOString().split("T")[0]}
              onChange={(event) =>
                setSelectedDate(new Date(event.target.value))
              }
            />
          </div>
        </div>
        <Divider style={{ marginTop: "15px" }} />

        <div style={{ display: "flex" }}>
          <div className="rev-admin-div">
            {filteredReviews.map((item,id) => {
              return (
                <div className="rev-content-ad" key={id}>
                  <div className="rev-icon-star">
                    <AccountCircleIcon />
                    <Rating
                      name="read-only"
                      value={item.Rating}
                      readOnly
                      style={{ color: "green" }}
                    />
                  </div>
                  <div className="rev-cust-cont1-ad">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginRight: "5px",
                      }}
                    >
                      {item.username}
                    </span>
                    <span style={{ fontSize: "12px", marginRight: "5px" }}>
                      reviewed
                    </span>
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "12px",
                        marginRight: "5px",
                      }}
                    >
                      {item.platformName}
                    </span>
                  </div>
                  <div className="rev-content1-ad">
                    <p
                      style={{
                        fontSize: "14px",
                        inlineSize: "270px",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.courseDescription}
                    </p>
                  </div>
                  <div>
                    <Button
                      id="add-btn"
                      onClick={() => {
                        handleConfirmUpdate(item._id);
                      }}
                      variant="outlined"
                    >
                      <AddLinkIcon style={{ fontSize: "1.3rem" }} />
                    </Button>
                    <Button
                      id="del-btn"
                      onClick={() => {
                        setIsDelete(true);
                        setId(item._id);
                      }}
                      variant="outlined"
                    >
                      <DeleteOutlineIcon style={{ fontSize: "1.3rem" }} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* delete Dialog */}
      <Dialog
        open={isDelete}
        onClose={handleCloseDeleteBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to delete ?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseDeleteBox}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  handleDeleteClick();
                }}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* updte Dialog */}
      <Dialog
        open={isUpdate}
        onClose={handleCloseUpdateBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to update ?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                onClick={handleCloseUpdateBox}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsUpdateForm(true)}
                variant="contained"
                sx={{ backgroundColor: "#0bb980", width: "50px" }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>

      {/* Update form  Dialog*/}
      <Dialog
        open={openUpdateForm}
        onClose={handleCloseUdateForm}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            width: "380px",
            height: "400px",
            padding: "10px 28px 10px",
            textAlign: "center",
          }}
        >
          <div className="main-div-dialog">
            <form onSubmit={handleSubmit(updateSubmit)}>
              <Box className="dialog-sub-box" style={{ lineHeight: "0" }}>
                <h4>Enter your Affiliate Link</h4>
                <Controller
                  name="Rating"
                  control={control}
                  defaultValue={a[0] && a[0].Rating}
                  render={({ field }) => (
                    <Rating name="read-only" readOnly value={field.value} />
                  )}
                />
              </Box>

              <Box className="dialog-sub-box">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="course-name">Course Name</label>
                  <Controller
                    name="courseName"
                    control={control}
                    defaultValue={a[0] && a[0].courseName}
                    disabled
                    render={({ field }) => (
                      <input
                        type="text"
                        id="course-name"
                        {...field}
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="platform-name">Platform name</label>
                  <Controller
                    name="platformName"
                    control={control}
                    defaultValue={a[0] && a[0].platformName}
                    disabled
                    render={({ field }) => (
                      <input
                        type="text"
                        id="platform-name"
                        disabled
                        {...field}
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="course-url">Course URL</label>
                  <Controller
                    name="courseURL"
                    control={control}
                    defaultValue={a[0] && a[0].courseURL}
                    disabled
                    render={({ field }) => (
                      <input
                        type="url"
                        id="course-url"
                        disabled
                        {...field}
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="affiliate-link">Enter Affiliate Link</label>
                  <Controller
                    name="affiliateLink"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <input
                        type="url"
                        id="affiliate-link"
                        {...field}
                        style={{
                          width: "325px",
                          height: "35px",
                          borderRadius: "5px",
                          border: "1px solid grey",
                        }}
                      />
                    )}
                  />
                </div>
              </Box>
              <div style={{ margin: "29px 120px 0px" }}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ backgroundColor: "rgb(9, 143, 96)", width: "100px" }}
                >
                  Update
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Dialog>

      {/* logout  Dialog*/}
      <Dialog
        // open={isLogout}
        // onClose={handleCloseLogoutBox}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="dialog-box-ad"
          style={{ width: "380px", height: "160px", paddingTop: "25px" }}
        >
          <div className="main-div-dialog-ad">
            <Typography
              style={{
                marginBottom: "25px",
                fontSize: "1.3rem",
                textAlign: "center",
              }}
            >
              Are you sure, you want to delete ?
            </Typography>
            <div style={{ textAlign: "center" }}>
              <Button
                // onClick={handleCloseLogoutBox}
                variant="outlined"
                sx={{
                  backgroundColor: "#ffff",
                  color: "black",
                  width: "50px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </Button>
              <Button
                // onClick={handleCloseLogoutBox}
                variant="contained"
                sx={{ backgroundColor: "red", width: "50px" }}
              >
                Yes
              </Button>
            </div>
          </div>
        </Box>
      </Dialog>


    </>
  );
};

export default Admin;
