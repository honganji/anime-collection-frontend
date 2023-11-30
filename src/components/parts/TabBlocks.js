import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./TabBlocks.css";

// tab boxes that is put at the bottom of the page
export default function TabBlocks(props) {
  const navigator = useNavigate();

  function generateTabs() {
    let tabList = [];
    if (props.numOfTabs === 0) {
      tabList.push(
        <div id='tab-blocks' onClick={() => navigator("/?tab=1")} key={1}>
          1
        </div>
      );
    } else {
      for (let i = 1; i <= props.numOfTabs; i++) {
        tabList.push(
          <div id='tab-blocks' onClick={() => navigator(`/?tab=${i}`)} key={i}>
            {i}
          </div>
        );
      }
    }
    return tabList;
  }

  return (
    generateTabs()
  );
}
