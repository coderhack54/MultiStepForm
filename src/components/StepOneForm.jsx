import React from "react";

const StepOneForm = () => {
  return (
    <>
      <form className="form__one">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input type="phone" name="phone" />
        </div>
        <button>Next Step</button>
      </form>
    </>
  );
};

export default StepOneForm;
