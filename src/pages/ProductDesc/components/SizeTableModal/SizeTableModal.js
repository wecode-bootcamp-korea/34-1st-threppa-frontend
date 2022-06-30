import React from "react";
import "./SizeTableModal.scss";

const SizeTableModal = ({ setIsSizeModal }) => {
  return (
    <>
      <div className="blackModal" />
      <div className="whiteModalStickyBox">
        <div className="whiteModal">
          <button
            onClick={() => {
              setIsSizeModal(false);
            }}
          >
            X
          </button>
          <img src="/images/sizeTable_01.png" alt="nonono!" />
        </div>
      </div>
    </>
  );
};

export default SizeTableModal;
