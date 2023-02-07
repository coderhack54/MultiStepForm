import React, { useState } from "react";
import FormHighOrderComponent from "./FormHighOrderComponent";
import LeftPanel from "./LeftPanel";
import StepFourForm from "./StepFourForm";
import StepOneForm from "./StepOneForm";
import StepThreeForm from "./StepThreeForm";
import StepTwoForm from "./StepTwoForm";

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(4);
  const steps = [
    {
      id: 1,
      label: "your info",
    },
    {
      id: 2,
      label: "select plan",
    },
    {
      id: 3,
      label: "add-ons",
    },
    {
      id: 4,
      label: "summary",
    },
  ];
  return (
    <div className="multiform">
      <div className="multiform__img">
        <LeftPanel steps={steps} />
      </div>
      <div className="multiform__form">
        {currentStep === 1 && (
          <FormHighOrderComponent
            component={<StepOneForm />}
            heading={"Personal Info"}
            paragraph={
              "Please provide your name,email address, and phone number."
            }
          />
        )}
        {currentStep === 2 && (
          <FormHighOrderComponent
            component={<StepTwoForm />}
            heading={"Select your plan"}
            paragraph={"You have the option of monthly or year billing."}
          />
        )}
        {currentStep === 3 && (
          <FormHighOrderComponent
            component={<StepThreeForm />}
            heading={"Pick add-ons"}
            paragraph={"Add-ons help enhance your gaming experience"}
          />
        )}
        {currentStep === 4 && (
          <FormHighOrderComponent
            component={<StepFourForm />}
            heading={"Finishing up"}
            paragraph={"Double-check everything looks OK before confirming"}
          />
        )}
      </div>
    </div>
  );
};

export default MultiForm;
