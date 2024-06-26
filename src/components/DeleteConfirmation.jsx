import { useEffect } from "react";
import ProgressBar from "./ProgressBar.jsx";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log("TIMER set");
    const timer = setTimeout(() => {
      onConfirm();
    }, 3000);

    return () => {
      console.log("cleaning up timer");
      clearTimeout(timer);
    };
  }, [onConfirm]);
  //we can face an infinite loop when adding functions as dependencies in useEffect
  //onConfirm function value will be different whenever the app component re-executes again. new function will get creted with every execution
  //solution - useCallback to wrap the dependencies functions

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar />
    </div>
  );
}
