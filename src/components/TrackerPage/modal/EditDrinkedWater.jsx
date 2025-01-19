import React, { useState } from "react";
import Modal from "react-modal";
import css from "./AddWaterModal.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

export const EditWaterModal = ({ isOpen, onClose, data }) => {
  const [water, setWater] = useState({
    id: data.id,
    count: data.amount,
    time: data.date,
  });

  //time: data.date.slice(8)

  const dispatch = useDispatch();

  function increment() {
    if (water.count < 5000) {
      setWater({ ...water, count: water.count + 50 });
    }
  }
  function decrement() {
    if (water.count > 50) {
      setWater({ ...water, count: water.count - 50 });
    }
  }
  const change = (event) => {
    setWater({ ...water, time: event.target.value });
  };

  const date = new Date().toISOString().split("T")[0];
    const dateHours = `${date}T${water.time}`;
  
    const handleSave = (data, actions) => {
      const data = { date: dateHours, volume: water.count };
      dispatch(addWater(data));
      actions.resetInput();
    };
  
  const orderSchema = Yup.object().shape({
    count: Yup.number(),
    time: Yup.string().max(5),
  });  

  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={css.moverlay}
      className={css.mcontent}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <button className={css.mclose} onClick={() => onClose()}>
        X
      </button>
      <h2 className={css.water}>Edit the entered amount of water</h2>
      <p className={css.choose}>Correct entered data</p>
      <p className={css.amount}>Amount of water</p>
      <div className={css.countsum}>
        <button className={css.incrbut} onClick={increment}>
          +
        </button>
        <span className={css.incrcount}>{water.count} ml</span>
        <button className={css.incrbut} onClick={decrement}>
          -
        </button>
      </div>
      <p className={css.recording}>Recording time</p>
      <input
        className={css.inputtime}
        onChange={change}
        type="string"
        value={water.time}
      />

      <p className={css.enter}>Enter the value of the water used:</p>
      <input className={css.inputtime} type="string" value={water.count} />
      <button className={css.btnsave} onClick={handleSave}>
        Save
      </button>
    </Modal>
  );
};
