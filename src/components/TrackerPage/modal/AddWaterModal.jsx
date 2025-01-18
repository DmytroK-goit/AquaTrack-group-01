import Modal from "react-modal";
import css from "../../TrackerPage/modal/AddWaterModal.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

Modal.setAppElement("#root");

export default function AddWaterModal({ openModal, closeModal }) {
  const [water, setWater] = useState({
    count: 50,
    time: new Date().toLocaleTimeString("ua-UA", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "UTC",
    }),
  });

  const dispatch = useDispatch()
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
   
  const handleSave = () => {
    const data = {date: dateHours, volume: water.count, };
    dispatch(addWater(data));
  };
  console.log({date});
  
  return (
    <Modal
      isOpen={openModal}
      overlayClassName={css.moverlay}
      className={css.mcontent}
      closeTimeoutMS={300}
      onRequestClose={closeModal}
      ariaHideApp={false}
    >    
      <buttom className={css.mclose} onClick={closeModal}> X    
      </buttom>
      <h2 className={css.water}>Add water</h2>
      <p className={css.choose}>Choose a value</p>
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
}
