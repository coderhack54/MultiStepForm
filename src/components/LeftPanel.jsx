import React from "react";

const LeftPanel = ({ steps }) => {
  return (
    <div className="leftpanel">
      <img
        src="/assets/images/bg-sidebar-desktop.svg"
        draggable="false"
        className="leftpanel__img"
        alt=""
      />
      <img
        src="/assets/images/bg-sidebar-mobile.svg"
        draggable="false"
        className="leftpanel__img__tablet"
        alt=""
      />
      <div className="leftpanel__steps">
        {steps.map((item, index) => (
          <div className="leftpanel__steps__step" key={item.id}>
            <p className={index == 0 && `active`}>{item.id}</p>
            <div>
              <h5>STEP{item.id}</h5>
              <h4>{item.label}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftPanel;
