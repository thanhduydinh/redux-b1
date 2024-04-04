// DeleteFormLayout.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// eslint-disable-next-line react/prop-types
function DeleteFormLayout({ student, getModalDelete, sendDelete }) {
  const { isFormVisible, isChecked } = useSelector((state) => ({
    isFormVisible: state.isFormVisible,
    isChecked: state.isChecked,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "SET_FORM_VISIBILITY", payload: true });
  }, [getModalDelete, dispatch]);

  const handleCheck = (e) => {
    dispatch({ type: "SET_CHECKED", payload: e.target.checked });
  };

  const handleCloseForm = () => {
    dispatch({ type: "SET_FORM_VISIBILITY", payload: !isFormVisible });
  };

  const handlerDeleteSubmit = () => {
    if (isChecked) {
      sendDelete(isChecked, student);
      dispatch({ type: "SET_FORM_VISIBILITY", payload: false });
    }
  };

  return (
    <>
      {isFormVisible && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseForm}>
              &times;
            </span>
            <div className="content">
              <div className="checkbox-wrapper-1">
                <input
                  id="example-1"
                  className="substituted"
                  type="checkbox"
                  aria-hidden="true"
                  checked={isChecked}
                  onChange={handleCheck}
                />
                <label htmlFor="example-1"></label>
              </div>
              <p>Tôi không phải người máy</p>
              <img
                src="/src/component/img/z5241423580382_743311370f186f9e4951fec60ed18bd5.jpg"
                alt=""
              />
            </div>
            <button className="delete-btn" onClick={handlerDeleteSubmit}>
              Xác nhận xóa
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteFormLayout;
