import Modal from "react-modal";
import css from "../../TrackerPage/modal/AddWaterModal.module.css";
import { useState } from "react";

Modal.setAppElement("#root");

export default function AddWaterModal({ openModal, closeModal }) {
  const [state, setState] = useState({
    count: 50,
    time: new Date().toLocaleTimeString("ua-UA", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    }),
  });
  function increment() {
    if (state.count < 5000) {
      setState({ ...state, count: state.count + 50 });
    }
  }
  function decrement() {
    if (state.count > 50) {
      setState({ ...state, count: state.count - 50 });
    }
  }
  const change = (event) => {
    setState({ ...state, time: event.target.value });
  };
  return (
    <Modal
      isOpen={openModal}
      overlayClassName={css.moverlay}
      className={css.mcontent}
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >
      <buttom className={css.mclose} onClick={closeModal}>
        X
      </buttom>
      <h2 className={css.water}>Add water</h2>
      <p className={css.choose}>Choose a value</p>
      <p className={css.amount}>Amount of water</p>
      <div className={css.countsum}>
        <button className={css.incrbut} onClick={increment}>
          +
        </button>
        <span className={css.incrcount}>{state.count} ml</span>
        <button className={css.incrbut} onClick={decrement}>
          -
        </button>
      </div>
      <p className={css.recording}>Recording time</p>
      <input
        className={css.inputtime}
        onChange={change}
        type="string"
        value={state.time}
      />

      <p className={css.enter}>Enter the value of the water used:</p>
      <input className={css.inputtime} type="string" value={state.count} />
      <button className={css.btnsave} onClick={() => onSave(state)}>
        Save
      </button>
    </Modal>
  );
}
