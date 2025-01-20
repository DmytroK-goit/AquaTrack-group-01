import Modal from "react-modal";
import css from "../../TrackerPage/modal/AddWaterModal.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addWater } from "../../../redux/Water/operatios";

Modal.setAppElement("#root");

export default function AddWaterModal({ openModal, closeModal }) {
  const [water, setWater] = useState({
    count: 50,
    time: new Date().toLocaleTimeString("ua-UA", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });
  const [error, setError] = useState("");
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

  const validateInputs = () => {
    const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/; // Формат HH:mm
    if (water.count < 50 || water.count > 5000) {
      setError("The water amount must be between 50 ml and 5000 ml.");
      return false;
    }
    if (!timeRegex.test(water.time)) {
      setError("Time must be in the format HH:mm.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = () => {
    if (!validateInputs()) {
      return;
    }
    const data = { date: dateHours, volume: water.count };

    dispatch(addWater(data));
    closeModal();
    setWater({
      count: 50,
      time: new Date().toLocaleTimeString("ua-UA", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
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
      <svg className={css.mclose} onClick={closeModal}>
        <use href="/icons.svg#icon-x"></use>
      </svg>
      <h2 className={css.water}>Add water</h2>
      {error && <p className={css.error}>{error}</p>}
      <p className={css.choose}>Choose a value</p>
      <p className={css.amount}>Amount of water</p>
      <div className={css.countsum}>
        <button className={css.incrbut} onClick={decrement}>
          -
        </button>
        <span className={css.incrcount}>{water.count} ml</span>
        <button className={css.incrbut} onClick={increment}>
          +
        </button>
      </div>
      <p className={css.recording}>Recording time</p>
      <input
        className={css.inputtime}
        onChange={change}
        type="string"
        maxlength="5"
        value={water.time}
      />

      <p className={css.enter}>Enter the value of the water used:</p>
      <input
        className={css.inputtime}
        type="number"
        min="50"
        max="5000"
        value={water.count}
        onChange={(e) => setWater({ ...water, count: Number(e.target.value) })}
      />
      <button className={css.btnsave} onClick={handleSave}>
        Save
      </button>
    </Modal>
  );
}
