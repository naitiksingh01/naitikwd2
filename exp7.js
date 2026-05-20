function Student(props) {
  return (
    <div className="item">
      <h4>{props.name}</h4>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

function App() {
  return (
    <div className="box">
      <h3>Student Details</h3>

      <Student name="Uday Sharma" course="Computer Science" marks="85" />
      <Student name="Vansh Garg" course="Mechanical Engineering" marks="92" />
      <Student name="Umang Sharma" course="MBA" marks="78" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
