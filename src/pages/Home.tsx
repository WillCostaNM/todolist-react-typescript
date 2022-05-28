import React from "react";

// Components
import { Text, Input, Button } from "components";

export const Home: React.FC = () => {
  return<div>
    <Text>Tasks</Text>
    <Input placeholder="Enter a task name here..."/>
    <Button>OK</Button>
  </div>
}