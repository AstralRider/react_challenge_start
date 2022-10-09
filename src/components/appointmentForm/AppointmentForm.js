import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitle} type="text" />
      <input
        value={date}
        onChange={handleDate}
        type="date"
        min={getTodayString()}
      />
      <input value={time} onChange={handleTime} type="time" />
      <ContactPicker contacts={contacts} />
      <input value="submit" type="submit" />
    </form>
  );
};
