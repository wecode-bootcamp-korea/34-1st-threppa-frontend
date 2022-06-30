import React from "react";
import "./InputField.scss";

const InputField = ({
  id,
  className,
  context,
  label,
  name,
  type,
  userInfo,
  setUserInfo,
}) => {
  const handleInput = e => {
    const { value, name } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id={id} className={className}>
      <label htmlFor={label}>
        <span
          className={
            userInfo[name] !== ""
              ? "placeHolderHasValue placeHolder"
              : "placeHolder"
          }
        >
          {context}
        </span>
        <input
          type={type}
          name={name}
          onInput={handleInput}
          required
          autoComplete="off" // 자동완성 방지
          autoCapitalize="off" // 모바일에서, 첫글자 대문자 방지
          value={userInfo.name}
          className={userInfo[name] !== "" ? "inputHasValue" : ""}
        />
      </label>
    </div>
  );
};

export default InputField;
