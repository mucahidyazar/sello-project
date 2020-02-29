import React from "react";

export default function SectionTitle(props) {
  return (
    <p className="trending__title">
      {props.number}
      <hr />
      {props.title}
    </p>
  );
}
