const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: "h1", className: "title" }, "React IS rendered"),
    React.createElement(Person, { name: "David Lee", occupation: "Chef" }, null),
    React.createElement(Person, { name: "Rachel Chen", occupation: "Journalist" }, null),
    React.createElement(Person, { name: "Liam Johnson", occupation: "Financial Analyst" }, null),
  ]);
};

const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
