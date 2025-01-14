import React, { useState } from 'react';
import Modal from "react-modal";
import css from './AddWaterBtn.module.css'

const EditDrinkenWater = ({ isOpen, onClose }) => {
  const [editCount, setEditCount] = useState(150);
  const [editTime, setEditTime] = useState(new Date().toLocaleTimeString("ua-UA", { hour: "2-digit", minute: "2-digit", timeZone: "UTC", }));
    
    function increment() {
        if (editCount < 5000) {  
        setEditCount(editCount + 50)};
    }
    function decrement() {
        if (editCount>50) { 
            setEditCount(editCount - 50)};
    }
    const change = event => {
        setEditTime(event.target.value)
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
    <h2 className={css.water} >Edit the entered amount of water</h2>
    <p className={css.choose} >Correct entered data</p>
    <p className={css.amount}>Amount of water</p>
    <div className={css.countsum} > 
    <button className={css.incrbut}  onClick={increment} >+</button>
    <span className={css.incrcount}>{editCount} ml</span>
    <button className={css.incrbut} onClick={decrement} >-</button>
    </div>
    <p className={css.recording}>Recording time</p>
    <input className={css.inputtime} onChange={change} type="string" value={editTime} />
    
    <p className={css.enter}>Enter the value of the water used:</p>
    <input className={css.inputtime}  type="string" value={editCount} />
    <button className={css.btnsave} onClick={()=>onClose()}>Save</button>
</Modal>
  );
};
export default EditDrinkenWater;
