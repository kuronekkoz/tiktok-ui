import React from "react";

const jsx = () => {
  const element = <div id="root">Hello world</div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello world");
  const element2 = (
    <div>
      <span>Hello</span> <span>Wolrd</span>
    </div>
  );
  const element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });

  return (
    <div>
      <div className="heading" id="heading">
        This is heading
      </div>
      ;<div className="heading2"></div>
    </div>
  );
};

export default jsx;
