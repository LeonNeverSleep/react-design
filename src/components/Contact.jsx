import React, { useState } from "react";
import { contacts } from "../Data";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState(0);
  const [info, setInfo] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
    props.onNameChange(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    props.onEmailChange(e.target.value);
  };
  const handleChangeBudget = (e) => {
    setBudget(e.target.value);
    props.onBudgetChange(e.target.value);
  };
  const handleChangeInfo = (e) => {
    setInfo(e.target.value);
    props.onInfoChange(e.target.value);
  };
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">联系我们</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          {contacts.map((contact) => {
            const { id, icon, text } = contact;
            return (
              <div className="flex gap-2 items-center flex-col" key={id}>
                <div className="text-blue text-xl">{icon}</div>
                <div className="text-[0.9rem] opacity-80">{text}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex  gap-12 flex-wrap justify-center">
          <div>
            <div className="mb-5">
              <input
                type="text"
                value={name}
                onChange={(e) => handleChangeName(e)}
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                value={budget}
                onChange={(e) => handleChangeBudget(e)}
                className="outline-none bg-transparent border border-solid border-blue p-2 text-[0.9rem]"
                placeholder="Budget"
              />
            </div>
          </div>
          <div>
            <textarea
              placeholder="Project Description"
              value={info}
              onChange={(e) => handleChangeInfo(e)}
              className="outline-none bg-transparent border border-solid border-blue resize-none text-[0.9rem] p-2 h-40 w-80"
            ></textarea>
            <div className="mt-2 text-end">
              <a className="text-[0.9rem] text-blue">发送</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
