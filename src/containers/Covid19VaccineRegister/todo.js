import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCovidVaccineRegister,
  editCovidVaccineRegister,
  deleteCovidVaccineRegister,
} from "../../actions/covidVaccineRegister";
import Loading from "../../components/Loading/index";

const TodoList = () => {
  const dispatch = useDispatch();
  const covidVaccineRegister = useSelector(
    (state) => state.covidVaccineRegister
  );

  // const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    dispatch(getCovidVaccineRegister());
  }, [dispatch]);

  const handleDelete = (key) => {
    dispatch(deleteCovidVaccineRegister(key));
  };
  const handleUpdate = (key, data) => {
    dispatch(editCovidVaccineRegister(key, data));
  };
  return covidVaccineRegister.data ? (
    <div style={{ marginTop: 40 }}>
      {covidVaccineRegister.data.length > 0 ? (
        <ul>
          {covidVaccineRegister.data.map((item) => {
            return (
              <li>
                {item.name} {item.lastname}
                <button
                  onClick={() => {
                    handleUpdate(item.key, {
                      name: "x",
                      lastname: "x",
                      age: "1",
                      nationalId: "x-xxxx-xxxxx-xx-x",
                      phoneNumber: "xxx-xxxxxxx",
                      address: [
                        "กรุงเทพมหานคร",
                        "เขตพระนคร",
                        "พระบรมมหาราชวัง",
                      ],
                    });
                  }}
                >
                  update
                </button>
                <button
                  onClick={() => {
                    handleDelete(item.key);
                  }}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <Loading style={{ display: "flex", justifyContent: "center" }} />
      )}
    </div>
  ) : null;
};
export default TodoList;
