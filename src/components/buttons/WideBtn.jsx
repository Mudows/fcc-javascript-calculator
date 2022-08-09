import React from "react";

export default function WideBtn({ sign, btnId }) {
  return (
    <div className="btn-wide" id={ btnId }>
      { sign }
    </div>
  )
}
