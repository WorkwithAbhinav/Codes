import { useState } from "react";
import React from "react";

export default function TextForms(props) {


  return (
    <>
    <div>
      <div className="mb-4">
        <h1>{props.heading}</h1>
        {/* <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/> */}
      </div>
      <div className="mb-4">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={Text}
          onClick={hovertext}
          onChange={handelchange}
        ></textarea>
      </div>

    </div>

    </>
  );
}
