import React from "react";
import { useState } from "react";
import "../pages/form.css";

function Form() {
  const [state, setState] = useState(true);
  const [option, setOption] = useState(true);
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [transfer, setTransfer] = useState("");
  const [destination, setDestination] = useState("");
  const amountRegex = /[0-9]/;

  function changeStep() {
    setState(!state);
  }

  return (
    <body>
      <header className="flex justify-between bg-[#F8F8F8] ml-0">
        <div className="flex flex-col pl-6">
          <div className="titletext">National Transfer</div>
          {state ? (
            <div className="mb-4 font-bold text-[#71717a]">Information</div>
          ) : (
            <div className="mb-4 font-bold text-[#71717a]">Summary</div>
          )}
        </div>
        {state ? (
          <div className="flex flex-row-reverse mr-8 items-center">
            <div className="steps">step 1/2</div>
            <div className="whitecircle"></div>
          </div>
        ) : (
          <div className="flex flex-row-reverse mr-8 items-center">
            <div className="steps">step 2/2</div>
            <div className="fullcircle"></div>
          </div>
        )}
      </header>
      <div className="pl-6 pt-4">
        {state ? (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
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
                className="border-2 border-[#d1d5db] w-72 pl-2 pr-2 pt-2 pb-24 resize-none"
                value={transfer}
                onChange={(e) => setTransfer(e.target.value)}
              />
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <input
                  className="border-2 border-[#d1d5db] pl-2 pr-2 h-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                <div className="text-[#71717a] pl-4 font-bold">EUR</div>
              </div>
            </div>

            <button className="bluebutton" onClick={changeStep}>
              Next Step
            </button>
          </>
        ) : account === "Choose Account" ? (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
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
                <option className="text-[#71717a]">Other Account</option>
              </select>
            </div>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
                Destination IBAN
              </div>
              <input
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
                className="border-2 border-[#d1d5db] w-72 pl-2 pr-2 pt-2 pb-24 resize-none"
                value={transfer}
                onChange={(e) => setTransfer(e.target.value)}
              />
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <input
                  className="border-2 border-[#d1d5db] pl-2 pr-2 h-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                <div className="text-[#71717a] pl-4 font-bold">EUR</div>
              </div>
            </div>
            <div>Choose an account!</div>
            <button className="bluebutton" onClick={changeStep}>
              Next Step
            </button>
          </>
        ) : amount.length < 3 ||
          transfer.length < 10 ||
          destination.length !== 25 ||
          !amountRegex.test(amount) ? (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
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
                className="border-2 border-[#d1d5db] w-72 pl-2 pr-2 pt-2 pb-24 resize-none"
                value={transfer}
                onChange={(e) => setTransfer(e.target.value)}
              />
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <input
                  className="border-2 border-[#d1d5db] pl-2 pr-2 h-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                <div className="text-[#71717a] pl-4 font-bold">EUR</div>
              </div>
            </div>
            <div>
              Something is wrong with the information filled. Check the
              information provided.
            </div>
            <button className="bluebutton" onClick={changeStep}>
              Next Step
            </button>
          </>
        ) : amount.length > 10 ? (
          <>
            <div className="mb-6">
              <div className="font-extrabold text-[#4b5563] mb-1">
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
                className="border-2 border-[#d1d5db] w-72 pl-2 pr-2 pt-2 pb-24 resize-none"
                value={transfer}
                onChange={(e) => setTransfer(e.target.value)}
              />
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <input
                  className="border-2 border-[#d1d5db] pl-2 pr-2 h-8"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                ></input>
                <div className="text-[#71717a] pl-4 font-bold">EUR</div>
              </div>
            </div>
            <div>
              The amount you are trying to transfer is too large. Contact your
              bank to proceed!
            </div>
            <button className="bluebutton" onClick={changeStep}>
              Next Step
            </button>
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
              <div>{transfer}</div>
            </div>
            <div className="mb-60">
              <div className="font-extrabold text-[#4b5563] mb-1">Amount</div>
              <div className="flex items-center">
                <div className="text-[#71717a]">{amount}</div>
                <div className="text-[#71717a] pl-1">EUR</div>
              </div>
            </div>
            <button className="whitebutton" onClick={changeStep}>
              Back
            </button>
            <button className="bluebutton">Confirm</button>
          </>
        )}
      </div>
    </body>
  );
}

export default Form;
