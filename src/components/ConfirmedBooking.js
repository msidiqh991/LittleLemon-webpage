import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ConfirmedBooking = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Swal.fire({
      title: "Booking has been Confirmed!",
      icon: "success",
      draggable: true,
    }).then(() => {
      navigate("/");
    });
  },);

  return (
    <div className="confirm">
      <div></div>
    </div>
  );
};

export default ConfirmedBooking;
