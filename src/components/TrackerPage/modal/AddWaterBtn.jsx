import React, { useState } from 'react';
import Modal from "react-modal";
import css from './AddWaterBtn.module.css'

const AddWaterBtn = ({ isOpen, onClose }) => {
  const [count, setCount] = useState(50);
  const [valtime, setValtime] = useState(new Date().toLocaleTimeString("ua-UA", { hour: "2-digit", minute: "2-digit", timeZone: "UTC", }));
  function increment() {
    if (count < 5000) {
      setCount(count + 50)};
}
function decrement() {
    if (count>50) { 
    setCount(count - 50)};
}
const change = event => {
    setValtime(event.target.value)
  } 
  //href="/icons.svg#icon-upload"  abo /icons.svg
  return (
    <Modal
    isOpen={isOpen}
    overlayClassName={css.moverlay}  
    className={css.mcontent}
    closeTimeoutMS={300}
    onRequestClose={()=>onClose()}
    ariaHideApp={false} >
    <buttom className={css.mclose} onClick={()=>onClose()}>X</buttom>
    <h2 className={css.water} >Add water</h2>
    <p className={css.choose} >Choose a value</p>
    <p className={css.amount}>Amount of water</p>
    <div className={css.countsum} > 
    <button className={css.incrbut}  onClick={increment} >+</button>
    <span className={css.incrcount}>{count} ml</span>
    <button className={css.incrbut} onClick={decrement} >-</button>
    </div>
    <p className={css.recording}>Recording time</p>
    <input className={css.inputtime} onChange={change} type="string" value={valtime} />
    
    <p className={css.enter}>Enter the value of the water used:</p>
    <input className={css.inputtime}  type="string" value={count} />
    <button className={css.btnsave} onClick={()=>onClose()}>Save</button>
</Modal>
  );
};
export default AddWaterBtn;
