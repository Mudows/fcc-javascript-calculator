import React from "react";

export default function WideBtn({ sign, btnId, handleClick }) {
  return (
    <div className="btn-wide" id={ btnId } onClick={ handleClick }>
      { sign }
    </div>
  )
}
