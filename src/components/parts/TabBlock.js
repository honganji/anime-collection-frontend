import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./TabBlock.css";

export default function TabBlock(props) {
  const navigator = useNavigate();
  function generateTabs() {
    let tabList = [];
    if (props.numOfTabs === 0) {
      tabList.push(
        <div id='tab-block' onClick={() => navigator("/detail")}>
          1
        </div>
      );
    } else {
      for (let i = 1; i <= props.numOfTabs; i++) {
        tabList.push(
          <div id='tab-block' onClick={() => navigator("/detail")}>
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
