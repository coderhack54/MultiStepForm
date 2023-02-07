import React from "react";

const StepTwoForm = () => {
  const planTypes = [
    {
      id: 1,
      image: "/assets/images/icon-arcade.svg",
      heading: "Arcade",
      price: "$90/yr",
    },
    {
      id: 2,
      image: "/assets/images/icon-advanced.svg",
      heading: "Advanced",
      price: "$120/yr",
    },
    {
      id: 3,
      image: "/assets/images/icon-pro.svg",
      heading: "Pro",
      price: "$150/yr",
    },
  ];
  return (
    <>
      <form className="form__two">
        <div className="form__two__cards">
          {planTypes.map((plan, index) => (
            <div className="card" key={plan.id}>
              <div>
                <img src={plan.image} alt={plan.heading} />
              </div>
              <div>
                <h4>{plan.heading} </h4>
                <p>{plan.price} </p>
                <h5>2 months free</h5>
              </div>
            </div>
          ))}
        </div>
        <div className="form__two__switchbox">
          <span>Monthly</span>
          <label className="switch">
            <input type="checkbox" id="check" />
            <span className="slider round"></span>
          </label>
          <span>Yearly</span>
        </div>
        <div className="form__two__buttons">
          <button>Go Back</button>
          <button>Next Step</button>
        </div>
      </form>
    </>
  );
};

export default StepTwoForm;
