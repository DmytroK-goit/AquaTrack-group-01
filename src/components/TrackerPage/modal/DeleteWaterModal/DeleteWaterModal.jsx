import { useDispatch, useSelector } from "react-redux";
import { delWater } from "../../../../redux/Water/operatios";
import {
  selectDayWater,
  selectIsLoading,
} from "../../../../redux/Water/selectors";
import css from "./DeleteWaterModal.module.css";
import toast from "react-hot-toast";
import { selectMonthWater } from "../../../../redux/Water/selectors";

const DeleteWaterModal = ({ closeModal, waterId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDelete = () => {
    dispatch(delWater(waterId))
      .unwrap()
      .then(() => {
        toast.success("The water record was successfully deleted!");
        closeModal();
      })
      .catch((error) => {
        toast.error(`Failed to delete the water record: ${error.message}`);
      });
  };

  const buttonColorClass = `${css.btn} ${css.btnColor}`;
  const buttonCancelClass = `${css.btn} ${css.btnCancel}`;

  return (
    <div className={css.modal}>
      <h3 className={css.modalHead}>Delete entry</h3>
      <p className={css.modalText}>
        Are you sure you want to delete the entry?
      </p>
      <div className={css.logOutButtons}>
        <button
          className={buttonColorClass}
          onClick={handleDelete}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
        <button className={buttonCancelClass} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;
