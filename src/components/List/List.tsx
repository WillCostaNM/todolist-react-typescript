import React from "react";

import { Column } from 'components';
import { ListItem } from 'components';


type Props = {
  items: [];
}


export const List: React.FC<Props> = ({ items }) => {
  return <>
    <Column>

      {items.map((item, index) => (
        <ListItem  key={index}/>
      ))}   

    </Column>
  </>
}