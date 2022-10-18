import { FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import moment from "moment";

const Task = ({ task, onDelete, onToggle }) => {
  const [correctDate, setCorrectDate] = useState(null);

  useEffect(() => {
    correctDateFormat();
  }, []);

  const correctDateFormat = () => {
    //console.log(task.startDate);
    //moment.HTML5_FMT.DATETIME_LOCAL_MS
    //moment.format();
    const testDate = moment(task.startDate, moment.DATE);
    //const testDate2 = moment((testDate, "x").format("DD MM YYYY"));
    //@TODO: Milisekunden in korrekten gewünschten Format umändern
    console.log("testdate: " + testDate);
    const correctDateIntern = task.startDate;
    setCorrectDate(correctDateIntern);
  };
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{correctDate}</p>
    </div>
  );
};

export default Task;
