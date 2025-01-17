import { useState } from "react";
import s from "../RightPart/DailyInfo.module.css";
import AddWaterModal from "../../modal/AddWaterModal";

const DailyInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={s.container}>
      <div className={s.qwe}>
        <h2 className={s.header}>Today</h2>

        <button onClick={openModal} className={s.btn}>
          <svg className={s.iconPlus}>
            <use href="icons.svg#icon-plus"></use>
          </svg>
          Add Water
        </button>
        <AddWaterModal openModal={modalIsOpen} closeModal={closeModal} />
      </div>
      <ul className={s.scrollContainer}>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href="icons.svg#icon-CupPhone"></use>
          </svg>
          <div className={s.info}>
            <p className={s.ml}>250 ml</p>
            <p className={s.time}>7:00 AM</p>
          </div>
          <div className={s.change}>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-edit"></use>
              </svg>
            </button>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-dell"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href="icons.svg#icon-CupPhone"></use>
          </svg>
          <div className={s.info}>
            <p className={s.ml}>250 ml</p>
            <p className={s.time}>7:00 AM</p>
          </div>
          <div className={s.change}>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-edit"></use>
              </svg>
            </button>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-dell"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href="icons.svg#icon-CupPhone"></use>
          </svg>
          <div className={s.info}>
            <p className={s.ml}>250 ml</p>
            <p className={s.time}>7:00 AM</p>
          </div>
          <div className={s.change}>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-edit"></use>
              </svg>
            </button>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-dell"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href="icons.svg#icon-CupPhone"></use>
          </svg>
          <div className={s.info}>
            <p className={s.ml}>250 ml</p>
            <p className={s.time}>7:00 AM</p>
          </div>
          <div className={s.change}>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-edit"></use>
              </svg>
            </button>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-dell"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href="icons.svg#icon-CupPhone"></use>
          </svg>
          <div className={s.info}>
            <p className={s.ml}>250 ml</p>
            <p className={s.time}>7:00 AM</p>
          </div>
          <div className={s.change}>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-edit"></use>
              </svg>
            </button>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-dell"></use>
              </svg>
            </button>
          </div>
        </li>
        <li className={s.item}>
          <svg className={s.icon}>
            <use href="icons.svg#icon-CupPhone"></use>
          </svg>
          <div className={s.info}>
            <p className={s.ml}>250 ml</p>
            <p className={s.time}>7:00 AM</p>
          </div>
          <div className={s.change}>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-edit"></use>
              </svg>
            </button>
            <button>
              <svg className={s.iconDelete}>
                <use href="icons.svg#icon-dell"></use>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default DailyInfo;
