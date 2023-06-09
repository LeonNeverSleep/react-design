import React from "react";
import { contacts } from "../Data";

const Preview = (props) => {
  const { name, email, budget, info } = props;
  return (
    <div className="container mx-auto mb-7 px-6" id="contact">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold">同步预览</h2>
        <div className="w-14 h-[3px] rounded-sm bg-blue"></div>
      </div>
      <div className="shadow-lg p-4 max-w-[700px] mx-auto">
        <div className="mt-8 flex  gap-12 flex-wrap justify-center">
          <div>
            <div className="mb-5">
              <h1>名称:</h1>
              <h2>{name}</h2>
            </div>
            <div className="mb-5">
              <h1>邮箱:</h1>
              <h2>{email}</h2>
            </div>
            <div className="mb-5">
              <h1>预算:</h1>
              <h2>{budget}</h2>
            </div>
          </div>
          <div>
            <span>项目描述:</span>
            <span>{info}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
