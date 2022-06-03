import React from "react";
import { useTheme } from "styled-components";

// Components
import { Text, Input, Row, Column, List } from "components";
import { ConfirmButton } from "./ConfirmButton";

export const Home = () => {
  const theme = useTheme();

  return<div>
    <Column width="600px" margin="0 auto">
      <Text fontSize={`${theme.fontSizes.bodyLarge}px`}>Tasks</Text>
      <Row width="100%" margin="8px 0 0 0">
        <Input height="40px" flex="1" placeholder="Enter a task name here..."/>
        <ConfirmButton>
          OK
        </ConfirmButton>
      </Row>

      <List items={[
        {label: 'Task 1'},
        {label: 'Task 2'},
        {label: 'Task 3'},
        {label: 'Task 4'}
      ]}/>
      
    </Column>
  </div>
}
