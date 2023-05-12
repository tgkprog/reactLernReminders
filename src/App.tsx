import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import ReminderEdit from "./components/ReminderEdit";
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
    console.log("reminders\n", reminders, "\n");
    setReminders(reminders);
  };
  const removeReminder = async (id: number) => {
    console.log("remove", id);
    await reminderService.removeReminder(id);
    await loadReminders();
  };
  const reminderAdded = async (title: string) => {
    console.log("reminderAdded", title);
    const newReminder = await reminderService.editReminder(title);
    setReminders([newReminder, ...reminders]);
  };
  return (
    <div className="App">
      <ReminderEdit onReminderEdit={reminderAdded} />
      <ReminderList
        items={reminders}
        onRemoveReminder={removeReminder}
      ></ReminderList>
    </div>
  );
}

export default App;
