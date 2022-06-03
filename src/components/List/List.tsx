import React from "react";

import { Column } from 'components';
import { ListItem, ListItemProps } from 'components';


type ListProps = {
  items: ListItemProps[];
}


export const List: React.FC<ListProps> = ({ items }) => {
  return <>
    <Column margin="16px 0 0 0">

      {items.map((item, index) => (
        <ListItem  key={index} {...item}/>
      ))}   

    </Column>
  </>
}