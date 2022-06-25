import React from "react";
import "./Field.scss";

const Field = ({
  id,
  className,
  context,
  label,
  name,
  type,
  userInfo,
  setUserInfo,
}) => {
  const onInput = e => {
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
          id={label}
          name={name}
          onInput={onInput}
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

export default Field;
