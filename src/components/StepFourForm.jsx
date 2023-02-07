import React from "react";

const StepFourForm = () => {
  return (
    <>
      <form className="form__three">
        <div className="form__three__cards">
          <div className="card">
            <div className="card__content">
              <h4>Arcade (Monthly)</h4>
              <p>Change </p>
            </div>
            <p>$9/mo</p>
          </div>
          <div className="card">
            <div className="card__content">
              <h4>Online service</h4>
              <p>$1/mo</p>
            </div>
            <div className="card__content">
              <h4>Large storage</h4>
              <p>$2/mo</p>
            </div>
          </div>
          <div className="card">
            <h4>Total(per Month)</h4>
            <h3>$12/mo</h3>
          </div>
        </div>

        <div className="form__three__buttons">
          <button>Go Back</button>
          <button>Next Step</button>
        </div>
      </form>
    </>
  );
};

export default StepFourForm;
