import { useSelector } from "react-redux";
import {
  selectDayWater,
  waterSelectors,
} from "../../../../redux/Water/selectors";
import s from "../RightPart/DailyInfo.module.css";
import AddWaterModal from "../../modal/AddWaterModal";
import DeleteWaterModal from "../../modal/DeleteWaterModal/DeleteWaterModal";
import { EditWaterModal } from "../../modal/EditDrinkedWater";
import { useState } from "react";
import Modal from "../../modal/Modal/Modal";
import { selectSelectedDate } from "../../../../redux/DateSlice";
import LoaderComponent from "../../../LoaderComponent/LoaderComponent";

const DailyInfo = () => {
  const isLoading = useSelector(waterSelectors.selectIsLoading);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const dayWater = useSelector(selectDayWater);
  const selectedDate = useSelector(selectSelectedDate);

  const formatDateWithoutYear = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    return `${day}, ${month}`;
  };

  const today = new Date().toISOString().split("T")[0];
  const title =
    selectedDate === today ? "Today" : formatDateWithoutYear(selectedDate);

  const openAddModal = () => setModalIsOpen(true);
  const closeAddModal = () => setModalIsOpen(false);

  const openEditModal = (id) => {
    setSelectedId(id);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = (id) => {
    setSelectedId(id);
    setIsDeleteModalOpen(true);
  };
  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedId(null);
  };

  return (
    <div className={s.container}>
      <div className={s.qwe}>
        <h2 className={s.header}>{title}</h2>

        <button onClick={openAddModal} className={s.btn}>
          <svg className={s.iconPlus}>
            <use href="icons.svg#icon-plus"></use>
          </svg>
          Add Water
        </button>
        <AddWaterModal openModal={modalIsOpen} closeModal={closeAddModal} />
      </div>

      {isLoading ? (
        <LoaderComponent />
      ) : Array.isArray(dayWater) && dayWater.length > 0 ? (
        <ul className={s.scrollContainer}>
          {dayWater.map((item) => (
            <li key={item._id} className={s.item}>
              <svg className={s.icon}>
                <use href="icons.svg#icon-CupPhone"></use>
              </svg>
              <div className={s.info}>
                <p className={s.ml}>{item.volume} ml</p>
                <p className={s.time}>
                  {new Date(item.date).toLocaleTimeString("ua-UA", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className={s.change}>
                <button onClick={() => openEditModal(item._id)}>
                  <svg className={s.iconDelete}>
                    <use href="icons.svg#icon-edit"></use>
                  </svg>
                </button>
                {isEditModalOpen && selectedId === item._id && (
                  <EditWaterModal
                    isOpen={isEditModalOpen}
                    onClose={closeEditModal}
                    data={item}
                  />
                )}
                <button onClick={() => handleDelete(item._id)}>
                  <svg className={s.iconDelete}>
                    <use href="icons.svg#icon-dell"></use>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.noWaterMessage}>No water added for this day.</p>
      )}

      {isDeleteModalOpen && (
        <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
          <DeleteWaterModal
            closeModal={handleCloseDeleteModal}
            waterId={selectedId}
          />
        </Modal>
      )}
    </div>
  );
};

export default DailyInfo;
