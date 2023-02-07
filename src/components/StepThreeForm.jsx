import React from "react";

const StepThreeForm = () => {
  const planTypes = [
    {
      id: 1,
      heading: "Online service",
      content: "Access to multiplayer games",
      addOn: "$10/yr",
    },
    {
      id: 2,
      heading: "Larger storage",
      content: "Extra 1TB of cloud save",
      addOn: "$20/yr",
    },
    {
      id: 3,
      heading: "Customizable profile",
      content: "Customize theme on your profile",
      addOn: "$20/yr",
    },
  ];
  return (
    <>
      <form className="form__three">
        <div className="form__three__cards">
          {planTypes.map((plan, index) => (
            <div className="card" key={plan.id}>
              <div className="input__checkbox">
                <input type="checkbox" />
              </div>
              <div className="card__content">
                <h4>{plan.heading} </h4>
                <p>{plan.content} </p>
              </div>
              <p>+{plan.addOn}</p>
            </div>
          ))}
        </div>
        <div className="form__three__buttons">
          <button>Go Back</button>
          <button>Next Step</button>
        </div>
      </form>
    </>
  );
};

export default StepThreeForm;
