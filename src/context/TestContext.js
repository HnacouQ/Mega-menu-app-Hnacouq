import React from "react";

export const TestCx = React.createContext();

TestContext.propTypes = {};

function TestContext(props) {
  return (
    <TestCx.Provider value={{ name: "Quốc Anh" }}>
      {props.children}
    </TestCx.Provider>
  );
}

export default TestContext;
