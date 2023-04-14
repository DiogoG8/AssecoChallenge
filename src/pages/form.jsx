import React from "react";
import "../pages/form.css";

function Form() {
  return (
    <body>
      <header className="header">
        <div className="titletext">National Transfer</div>
        <div>Information</div>
        <div>Summary</div>
        <div>
          <div className="steps">step 1/2</div>
          <div className="whitecircle"></div>
        </div>
        <div></div>
        <div>
          <div className="steps">step 2/2</div>
          <div className="fullcircle"></div>
        </div>
      </header>
      <div>
        <div className="font-medium">Origin Account</div>
        <input className="styleinput"></input>
      </div>
      <div>
        <div className="font-medium">Destination IBAN</div>
        <input className="styleinput"></input>
      </div>
      <div>
        <div className="font-medium">Transfer Description</div>
        <input className="styleinput"></input>
      </div>
      <div>
        <div className="font-medium">Amount</div>
        <input className="styleinput"></input>
        <div className="texteuro">EUR</div>
      </div>
      <button className="bluebutton">Next Step</button>
      <button className="whitebutton">Back</button>
      <button className="bluebutton">Confirm</button>
    </body>
  );
}

export default Form;
