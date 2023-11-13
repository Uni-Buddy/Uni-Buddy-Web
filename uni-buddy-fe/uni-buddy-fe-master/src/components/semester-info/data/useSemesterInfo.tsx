import { useAppDispatch, useAppSelector } from '@libs/stores';
import { semesterSlice } from '@libs/stores/semester';

const useSemesterInfo = () => {
  const dispatch = useAppDispatch();
  const isShowModal = useAppSelector((state) => state.semester.isShowModal);

  const handleModalClose = () => {
    dispatch(semesterSlice.actions.setIsShoModal(false));
  };
  return {
    isShowModal,
    handleModalClose,
  };
};

export default useSemesterInfo;
