import React from "react";

export default function Root(props) {
  return (
    <section style={{ backgroundColor: "green" }}>
      {props.name} is mounted! Hooray!
    </section>
  );
}
