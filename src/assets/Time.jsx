import React from 'react';
import "./DateTime.css";
import { useState } from "react";
import { RiTimeLine } from 'react-icons/ri';
import { VscCheckAll } from 'react-icons/vsc';



const Clock = () => {

  let time = new Date().toLocaleDateString();

  const [Dtime, setDtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setDtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div className="logoClock">

      <div className="logo">
        <h2 className="header__title">
          <VscCheckAll className="check"/>Lumi<span>Code</span>
        </h2>
      </div>
      
      {/*Time*/}
      <div className="clock">
        <RiTimeLine className="time"/> {Dtime}
      </div>

    </div>
  )
}

export default Clock;