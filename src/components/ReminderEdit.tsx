import React, { useState } from "react";
interface ReminderEditProps {
  onReminderEdit: (ti: string) => void;
}

function ReminderEdit({ onReminderEdit }: ReminderEditProps): JSX.Element {
  const [title, setTitle] = useState("");
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.length < 3) {
      alert("Please add a title of length 3 characters or more");
    } else {
      onReminderEdit(title);
      setTitle("");
    }
  };
  return (
    <form className="my-3" onSubmit={submitForm}>
      <label htmlFor="title" />
      <input
        id="text"
        type="text"
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="btn btn-primary rounded-pill my-2">
        Add reminder
      </button>
    </form>
  );
}
export default ReminderEdit;
