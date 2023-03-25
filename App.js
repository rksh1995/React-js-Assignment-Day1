const heading = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},React.createElement("h2",{id:"heading"},"I am Software Engineer")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);