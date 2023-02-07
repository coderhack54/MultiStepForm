import React from "react";
import StepOneForm from "./StepOneForm";

const FormHighOrderComponent = ({ component, heading, paragraph }) => {
  return (
    <>
      <h1>{heading}</h1>
      <p>{paragraph}</p>

      {component}
    </>
  );
};

export default FormHighOrderComponent;
