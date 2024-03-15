// Alert.js
import React from "react";

export default function Alert(props) {
  return (
    props.msgAlert && (
      <div className={`alert alert-${props.msgAlert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.msgAlert.type}</strong> {props.msgAlert.message} {/* Added space between type and message */}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}
