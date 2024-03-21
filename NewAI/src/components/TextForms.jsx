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

      <button type="button" className="btn btn-primary mx-2" onClick={upc}>
        TO UPPERCASE
      </button>
      <button type="button" className="btn btn-secondary mx-2" onClick={lwc}>
        to lowercase
      </button>
      <button
        type="button"
        className="btn btn-success mx-2"
        onClick={removespace}
      >
        NoSpace
      </button>
      <button type="button" className="btn btn-danger mx-2" onClick={clearter}>
        Clear
      </button>
    </div>
    <div className="container my-3">
      <h2>Text Summary 
      </h2>
      <p className="font-size-32 fw-bold"> ~ {Text.split(" ").filter((elem)=>{return elem.length!=0}).length} Words and {Text.length} Characters</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
    </>
  );
}
