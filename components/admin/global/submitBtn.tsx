import React from "react";

interface ISubmitBtn {
  onSubmit: () => Promise<void>;
}

const SubmitBtn: React.FC<ISubmitBtn> = ({ onSubmit }) => {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onSubmit}
        className="shadow-sm py-1.5 px-6 text-sm cursor-pointer font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none"
      >
        تایید
      </button>
    </div>
  );
};

export default SubmitBtn;
