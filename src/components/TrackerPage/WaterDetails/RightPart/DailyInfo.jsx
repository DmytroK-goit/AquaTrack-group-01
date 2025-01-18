import { useSelector } from "react-redux";
import { selectDayWater } from "../../../../redux/Water/selectors"; // Убедитесь, что путь к селектору верный
import s from "../RightPart/DailyInfo.module.css";
import AddWaterModal from "../../modal/AddWaterModal";
import { EditWaterModal } from "../../modal/EditDrinkedWater";
import { useState } from "react";

const DailyInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditIsOpen, setEditIsOpen] = useState(false);
  const dayWater = useSelector(selectDayWater); // Получение данных из селектора

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openEditModal() {
    setEditIsOpen(true);
  }

  function closeEditModal() {
    setEditIsOpen(false);
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
        {dayWater.map((item, index) => (
          <li key={index} className={s.item}>
            <svg className={s.icon}>
              <use href="icons.svg#icon-CupPhone"></use>
            </svg>
            <div className={s.info}>
              <p className={s.ml}>{item.volume} ml</p>
              <p className={s.time}>
                {new Date(item.date).toLocaleTimeString()}
              </p>
            </div>
            <div className={s.change}>
              <button onClick={openEditModal}>
                <svg className={s.iconDelete}>
                  <use href="icons.svg#icon-edit"></use>
                </svg>
              </button>
              <EditWaterModal
                isOpen={modalEditIsOpen}
                onClose={closeEditModal}
              />
              <button>
                <svg className={s.iconDelete}>
                  <use href="icons.svg#icon-dell"></use>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyInfo;
