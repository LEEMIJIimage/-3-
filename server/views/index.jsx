import React from "react";
import DefaultLayout from "./layout/default";
import Header from "./layout/header";

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Header />
      <div>Hello {props.name}</div>
    </DefaultLayout>
  );
}

export default HelloMessage;
