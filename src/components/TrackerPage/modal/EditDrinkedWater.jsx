import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import css from "./AddWaterModal.module.css";
import { editWater } from "../../../redux/Water/operatios";

export const EditWaterModal = ({ isOpen, onClose, data }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    time: data ? data.date.split("T")[1] : "",
    count: data ? data.volume : 50,
  });

  const [error, setError] = useState("");
  
  useEffect(() => {
    if (data && data.date) {
      const timePart = data.date.split("T")[1];
      setState((prevState) => ({
        ...prevState,
        time: timePart,
        count: data.volume,
      }));
    }
  }, [data]);

  const increment = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count < 5000 ? prev.count + 50 : prev.count,
    }));
  };

  const decrement = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count > 50 ? prev.count - 50 : prev.count,
    }));
  };

  const handleTimeChange = (event) => {
    setState({ ...state, time: event.target.value });
  };

  const handleCountChange = (event) => {
    setState({ ...state, count: Number(event.target.value) });
  };

  const validateInputs = () => {
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; // Формат HH:mm
    if (state.count < 50 || state.count > 5000) {
      setError("The water amount must be between 50 ml and 5000 ml.");
      return false;
    }
    if (!timeRegex.test(state.time)) {
      setError("Time must be in the format HH:mm.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = () => {
    if (!data || !data._id) return;
    if (!validateInputs()) {
      return;
    }
    const updatedData = {
      date: `${data.date.split("T")[0]}T${state.time}`,
      volume: state.count,
    };
    
    dispatch(editWater({ _id: data._id, updateData: updatedData }));
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.moverlay}
      className={css.mcontent}
      closeTimeoutMS={300}
      onRequestClose={onClose}
      ariaHideApp={false}
    > 
     <svg className={css.mclose} onClick={onClose}>
        <use href="/icons.svg#icon-x"></use></svg>
      <h2 className={css.water}>Edit the entered amount of water</h2>
       {error && <p className={css.error}>{error}</p>}
      <p className={css.choose}>Correct entered data</p>
      <p className={css.amount}>Amount of water</p>
      <div className={css.countsum}>
        <button className={css.incrbut} onClick={decrement}>
          -
        </button>
        <span className={css.incrcount}>{state.count} ml</span>
        <button className={css.incrbut} onClick={increment}>
          +
        </button>
      </div>
      <p className={css.recording}>Recording time</p>
      <input
        className={css.inputtime}
        onChange={handleTimeChange}
        type="time"
        value={state.time}
      />

      <p className={css.enter}>Enter the value of the water used:</p>
      <input
        className={css.inputtime}
        type="number"
        value={state.count}
        onChange={handleCountChange}
      />
      <button className={css.btnsave} onClick={handleSubmit}>
        Save
      </button>
    </Modal>
  );
};
