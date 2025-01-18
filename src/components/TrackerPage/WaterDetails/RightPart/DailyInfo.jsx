import { useSelector } from "react-redux";
import { selectDayWater } from "../../../../redux/Water/selectors";
import s from "../RightPart/DailyInfo.module.css";
import AddWaterModal from "../../modal/AddWaterModal";
import { EditWaterModal } from "../../modal/EditDrinkedWater";
import DeleteWaterModal from "../../modal/DeleteWaterModal/DeleteWaterModal";
import { useState } from "react";

const DailyInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalEditIsOpen, setEditIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dayWater = useSelector(selectDayWater);

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

  function openDeleteModal(id) {
    setSelectedId(id);
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
    setSelectedId(null);
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
        {dayWater.map((item) => (
          <li key={item._id} className={s.item}>
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
              <button onClick={() => openDeleteModal(item._id)}>
                <svg className={s.iconDelete}>
                  <use href="icons.svg#icon-dell"></use>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
      {deleteModalIsOpen && (
        <DeleteWaterModal closeModal={closeDeleteModal} _id={selectedId} />
      )}
    </div>
  );
};

export default DailyInfo;
