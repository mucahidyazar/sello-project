import React from "react";

export default function SectionTitle(props) {
  return (
    <div className="trending__title">
      <span className="trending__title--item">{props.number}</span>
      <span className="trending__title--item">{props.title}</span>
    </div>
  );
}
