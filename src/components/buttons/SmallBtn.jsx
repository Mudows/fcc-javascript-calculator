import React from "react";

export default function SmallBtn({ sign, btnId }) {
  return (
    <div className="btn-small" id={ btnId }>
      { sign }
    </div>
  )
}
