import React from "react";

export default function FormattedDate(props) {
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let year = props.date.getFullYear();
  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let day = days[props.date.getDay()];
  let hour = props.date.getHours();
  let minutes = props.date.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day} {hour}:{minutes}, {date} {month} {year}
    </div>
  );
}
