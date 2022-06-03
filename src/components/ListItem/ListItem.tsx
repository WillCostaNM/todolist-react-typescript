import React from "react";
import { useTheme } from "styled-components";
import { Column, Text } from "components";

export type ListItemProps = {
  label: string
}

export const ListItem: React.FC<ListItemProps> = ({label}) => {
  const theme = useTheme();
  
  return <>
    <Column
      width="100%"
      backgroundColor="rgba(0, 0, 0, 0.1)"
      padding="20px"
      margin="0 0 8px 0"
      borderRadius="4px"
      borderLeft={`4px solid rgb(${theme.colors.text})`}
    >
      <Text>{label}</Text>
    </Column>
  </>
}
