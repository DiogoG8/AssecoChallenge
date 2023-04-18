import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Form() {
  /*States Used to Work with JS*/
  const [button, setButton] = useState(true);
  const [confirmbutton, setConfirmbutton] = useState(true);
  const [errors, setErrors] = useState(true);
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [destination, setDestination] = useState("");

  /*RegEx Used to Build Conditions*/
  const amountRegex = /[0-9]/;
  const IBANRegex = /^PT[0-9]{2}[0-9]{21}$/;
  const descriptionRegex = /(.{36}) /g;
  const zeroRegex = /^0+/;

  /*useEffect to Clean the "errors" State*/
  useEffect(() => {
    setErrors("");
    setButton(true);
  }, [amount, description, account, destination]);

  /*Next Button Event Handler*/
  function nextStep() {
    setButton(!button);
    setConfirmbutton(!confirmbutton);
    setErrors(
      <div className="ml-4 text-base">
        &#42; Something is wrong with the information filled. Check the
        information provided.
      </div>
    );
  }

  /*Back Button Event Handler*/
  function backStep() {
    setButton(true);
    setErrors("");
  }

  /*EXTRA - POST Mechanism*/
  function postingTransfer(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/transfers", {
        description,
        destination,
        account,
        amount,
      })
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });
    setConfirmbutton(true);
    setErrors("");
  }

  return (
    <body>
      <header className="flex justify-between bg-[#F8F8F8] ml-0">
        <div className="flex flex-col pl-6">
          <div className="text-[#00a3e0] mt-4 font-semibold text-2xl">
            National Transfer
          </div>
          {button ? (
            <div className="mb-4 font-bold text-[#71717a]">Information</div>
          ) : (
            <div className="mb-4 font-bold text-[#71717a]">Summary</div>
          )}
        </div>
        {button ? (
          <div className="flex flex-row-reverse mr-8 items-center">
            <div className="text-[#c5c5c5] pl-2">step 1/2</div>
            <div className="bg-[#F8F8F8] border-solid border-2 border-[#00a3e0] ml-8 w-4 h-4 rounded-full border-r-[#e9e6e6] border-b-[#e9e6e6] rotate-[135deg]"></div>
          </div>
        ) : (
          <div className="flex flex-row-reverse mr-8 items-center">
            <div className="text-[#c5c5c5] pl-2">step 2/2</div>
            <div className="bg-[#F8F8F8] border-solid border-2 border-[#00a3e0] ml-8 w-4 h-4 rounded-full"></div>
          </div>
        )}
      </header>
      <div className="pl-6 pt-4">
        {(button === true && confirmbutton === true) ||
        account === "Choose Account" ||
        amount < 100 ||
        amount > 10000 ||
        description.length < 20 ||
        destination.length !== 25 ||
        !IBANRegex.test(destination) ||
        !amountRegex.test(amount) ? (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1 ">
                Origin Account
              </div>
              <select
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="border-2 border-[#d1d5db] pl-2 pr-12 w-80 h-8 text-[#71717a]"
              >
                <option className="text-[#71717a]">Choose Account</option>
                <option className="text-[#71717a]">
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
                placeholder="Description (at least 20 letters)"
                className="border-2 border-[#d1d5db] w-72 pl-2 pr-2 pt-2 pb-24 resize-none break-words "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
              <button
                className="bg-[#00a3e0] text-white w-32 h-8 mb-8 rounded font-bold"
                onClick={nextStep}
              >
                Next Step
              </button>
              {errors}
            </div>
          </>
        ) : button === false && confirmbutton === false ? (
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
                {description.replace(descriptionRegex, "$1\n")}
              </div>
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <div>{amount.replace(zeroRegex, "")}</div>
                <div className="pl-1">EUR</div>
              </div>
            </div>
            <div className="flex flex-row items-baseline">
              <>
                <button
                  className="bg-white text-[#00a3e0] w-32 h-8  mr-4 rounded border-solid border-2 border-[#00a3e0] font-bold"
                  onClick={backStep}
                >
                  Back
                </button>
                <button
                  className="bg-[#00a3e0] text-white w-32 h-8 mb-8 rounded font-bold"
                  onClick={postingTransfer}
                >
                  Confirm
                </button>
              </>
            </div>
          </>
        ) : button === false && confirmbutton === true ? (
          <>
            <div> Your transfer has been done!</div>
            <div>
              For more information contact us via email or phone number!
            </div>
            <button
              className="bg-white text-[#00a3e0] w-32 h-8  mr-4 rounded border-solid border-2 border-[#00a3e0] font-bold"
              onClick={backStep}
            >
              Back
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </body>
  );
}

export default Form;
