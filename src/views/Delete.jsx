import { useState } from "react";

const Delete = ({ onConfirm }) => {
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        className="danger"
        onClick={() => setConfirming(true)}
      >
        Delete
      </button>
    );
  }

  return (
    <div className="delete-confirm">
      <span>Delete this plant?</span>
      <button
        type="button"
        className="danger"
        onClick={() => {
          onConfirm();
          setConfirming(false);
        }}
      >
        Yes
      </button>
      <button
        type="button"
        className="ghost"
        onClick={() => setConfirming(false)}
      >
        No
      </button>
    </div>
  );
};

export default Delete;