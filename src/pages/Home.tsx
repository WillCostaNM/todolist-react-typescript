import React from "react";

// Components
import { Text, Input, Button, Row } from "components";

export const Home = () => {
  return<div>
    <Text>Tasks</Text>
    <Row>
      <Input placeholder="Enter a task name here..."/>
      <Button>OK</Button>
    </Row>
  </div>
}
