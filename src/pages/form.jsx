import React from "react";
import { useState, useEffect } from "react";
import "../pages/form.css";

function Form() {
  const [state, setState] = useState(true);
  const [errors, setErrors] = useState(true);
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [transfer, setTransfer] = useState("");
  const [destination, setDestination] = useState("");

  /*RegEx Used to Build Conditions*/
  const amountRegex = /[0-9]/;
  const destinationRegex = /^PT[0-9]{2}[0-9]{21}$/;
  const regex1 = /(.{36}) /g;
  const regex2 = /^0+/;

  useEffect(() => {
    setErrors("");
    setState(true);
  }, [amount, transfer, account, destination]);

  function amountStep() {
    setState(!state);
    setErrors(
      <div className="ml-4 text-base">
        &#42; Something is wrong with the information filled. Check the
        information provided.
      </div>
    );
  }
  function backStep() {
    setState(!state);
    setErrors("");
  }

  return (
    <body>
      <header className="flex justify-between bg-[#F8F8F8] ml-0">
        <div className="flex flex-col pl-6">
          <div className="text-[#00a3e0] mt-4 font-semibold text-2xl">
            National Transfer
          </div>
          {state ? (
            <div className="mb-4 font-bold text-[#71717a]">Information</div>
          ) : (
            <div className="mb-4 font-bold text-[#71717a]">Summary</div>
          )}
        </div>
        {state ? (
          <div className="flex flex-row-reverse mr-8 items-center">
            <div className="text-[#c5c5c5] pl-2">step 1/2</div>
            <div className="whitecircle"></div>
          </div>
        ) : (
          <div className="flex flex-row-reverse mr-8 items-center">
            <div className="text-[#c5c5c5] pl-2">step 2/2</div>
            <div className="fullcircle"></div>
          </div>
        )}
      </header>
      <div className="pl-6 pt-4">
        {state === true ||
        account === "Choose Account" ||
        amount < 100 ||
        amount > 10000 ||
        transfer.length < 20 ||
        destination.length !== 25 ||
        !destinationRegex.test(destination) ||
        !amountRegex.test(amount) ? (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1 ">
                Origin Account
              </div>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="border-2 border-[#d1d5db] pl-2 pr-12 w-80 h-8 text-[#71717a]  appearance-none"
              >
                <option value="Default" className="text-[#71717a]">
                  Choose Account
                </option>
                <option value="My Account" className="text-[#71717a]">
                  My Account - 999403020030
                </option>
              </select>
            </div>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
                Destination IBAN
              </div>
              <input
                placeholder="IBAN (Portugal Standards)"
                className="border-2 border-[#d1d5db]  pl-2 pr-2 w-80 h-8"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              ></input>
            </div>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
                Transfer Description
              </div>
              <textarea
                wrap="hard"
                placeholder="Description between 20 to 70 letters"
                className="border-2 border-[#d1d5db] w-72 pl-2 pr-2 pt-2 pb-24 resize-none break-words "
                value={transfer}
                onChange={(e) => setTransfer(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <input
                  placeholder="100€ - 10000€"
                  className="border-2 border-[#d1d5db] pl-2 pr-2 h-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                <div className="text-[#71717a] pl-4 font-bold">EUR</div>
              </div>
            </div>
            <div className="flex flex-row items-baseline">
              <button className="bluebutton" onClick={amountStep}>
                Next Step
              </button>
              {errors}
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
                Origin Account
              </div>
              <div>{account}</div>
            </div>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
                Destination IBAN
              </div>
              <div>{destination}</div>
            </div>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
                Transfer Description
              </div>
              <div className="whitespace-pre-line">
                {transfer.replace(regex1, "$1\n")}
              </div>
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <div className="text-[#71717a]">
                  {amount.replace(regex2, "")}
                </div>
                <div className="text-[#71717a] pl-1">EUR</div>
              </div>
            </div>
            <div className="flex flex-row items-baseline">
              <>
                <button className="whitebutton" onClick={backStep}>
                  Back
                </button>
                <button className="bluebutton">Confirm</button>
              </>
            </div>
          </>
        )}
      </div>
    </body>
  );
}

export default Form;
