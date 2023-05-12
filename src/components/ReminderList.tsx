import React from "react";
import Reminder from "../model/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item.id} className="list-group-item">
          {item.title}{" "}
          <button
            className="btn btn-outline-danger rounded-pill mx-2"
            onClick={() => onRemoveReminder(item.id)}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
