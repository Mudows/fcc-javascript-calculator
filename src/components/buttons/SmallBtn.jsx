import React from "react";

export default function SmallBtn({ sign, btnId, handleClick }) {
  return (
    <div className="btn-small" id={ btnId } onClick={ handleClick }>
      { sign }
    </div>
  )
}
