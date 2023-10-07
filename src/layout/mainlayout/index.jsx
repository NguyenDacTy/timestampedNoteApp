import "./style.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { useContext } from "react";
import { MyContext } from "../../context";
const MainLayout = () => {
  const { noteTitle, setNoteTitle } = useContext();
  // const { noteDetail, setNoteDetail } = useContext(MyContext);
  console.log(useApp);
  const handleTitle = (e) => {
    let getTitle = e.target.value;
    // setNoteTitle(getTitle);
    console.log(getTitle);
  };
  const handleDetail = (e) => {
    let getDetail = e.target.value;
    // setNoteDetail(getDetail);
  };

  const handleAdd = () => {
    console.log(handleAdd);
  };

  //   const handleReset = () => {
  //     setNoteDetail("");
  //     setNoteTitle("");
  //   };

  return (
    <div className="container">
      <div className="main-container">
        <h3 className="h3">Timestamped Notes App</h3>
        <div className="main-container_ipn">
          <input onChange={handleTitle} placeholder="Note title" />
          <input onChange={handleDetail} placeholder="Note Details" />
        </div>
        <div className="main-container_btn">
          <button className="btn-add" onClick={handleAdd}>
            Add Note
          </button>
        </div>
      </div>
      <div className="list-container">
        <div className="list-container__stt">
          <h3 className="h3">REACRJS</h3>
          <div>
            <p style={{ margin: "0px", paddingBottom: "10px" }}>Recoder: </p>
            <div>
              <Link style={{ textDecoration: "none" }} to={ROUTES.DETAIL_PAGE}>
                <span className="cursor">(Show Detail) </span>
              </Link>
              <span className="cursor"> (Remove Note)</span>
            </div>
          </div>
        </div>
        <div className="list-container__stt">
          <h3 className="h3">Html</h3>
          <div>
            <p style={{ margin: "0px", paddingBottom: "10px" }}>Recoder: </p>
            <div>
              <Link style={{ textDecoration: "none" }} to={ROUTES.DETAIL_PAGE}>
                <span className="cursor">(Show Detail) </span>
              </Link>
              <span className="cursor"> (Remove Note)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
