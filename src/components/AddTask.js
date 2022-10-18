import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import de from "date-fns/locale/de";
registerLocale("de", de);

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const setCorrectDateFormat = (date) => {
    //console.log(date);
    const correctDate = new Date();
    setStartDate(correctDate);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, startDate, reminder });

    setText("");
    setStartDate("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control form-date-picker">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          monthsShown={2}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          locale="de"
          dateFormat="dd. MMMM yyyy HH:mm"
          value={startDate}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          name=""
          id=""
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
