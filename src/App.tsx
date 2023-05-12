import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./model/reminder";
import reminderService from "./services/reminderService";
//import { removeReminder } from "./services/reminderUiHelper";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);
  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  };
  const removeReminder = (id: number): boolean => {
    console.log("remove", id);
    setReminders(reminders.filter((item) => item.id !== id));
    return true;
  };
  return (
    <div className="App">
      <button className="btn btn-primary">Click me</button>

      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminder}
      ></ReminderList>
    </div>
  );
}

export default App;
