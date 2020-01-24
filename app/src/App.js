import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Tabs, TabItem} from './comp/tab/TabItem';

 // node-sass -v    // 4.13.1



function App() {


  return (
    <div className="App">
        <Tabs defaultIndex="1" onTabClick={console.log}>
            <TabItem label="A" index="1">
                Lorem ipsum
            </TabItem>
            <TabItem label="B" index="2">
                Dolor sit amet
            </TabItem>
        </Tabs>
    </div>
  );
}

export default App;
