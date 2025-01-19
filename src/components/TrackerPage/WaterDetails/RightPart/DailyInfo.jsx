import { useSelector } from "react-redux";
import { selectDayWater } from "../../../../redux/Water/selectors";
import s from "../RightPart/DailyInfo.module.css";
import AddWaterModal from "../../modal/AddWaterModal";
import DeleteWaterModal from "../../modal/DeleteWaterModal/DeleteWaterModal";
import { useState } from "react";
import { EditWaterModal } from "../../modal/EditDrinkedWater";

const DailyInfo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dayWater = useSelector(selectDayWater);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openDeleteModal(id) {
    setSelectedId(id);
    setDeleteModalIsOpen(true);
    setSelectedId(null);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
    setSelectedId(null);
  }

  const openEditModal = (id) => {
    setDeleteModalIsOpen(false);
    setSelectedId(id);
  };

  const closeEditModal = () => {
    setSelectedId(null);
  };

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
              <button onClick={() => openEditModal(item._id)}>
                <svg className={s.iconDelete}>
                  <use href="icons.svg#icon-edit"></use>
                </svg>
              </button>
              {selectedId === item._id && (
                <EditWaterModal
                  isOpen={selectedId === item._id}
                  onClose={closeEditModal}
                  data={item}
                />
              )}
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
