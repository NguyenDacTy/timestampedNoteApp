import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { ROUTES } from "../const/routes";

const DetailPage = () => {
  return (
    <div className="detail-container">
      <div className="detail-container__box">
        <div className="detail-container__box-title">
          <h3>Reactjs</h3>
          <div>
            <p style={{ margin: "0px", paddingBottom: "10px" }}>Recoder: </p>
            <div>
              <Link style={{ textDecoration: "none" }} to={ROUTES.HOME_PAGE}>
                <span className="cursor">(Hiden Detail) </span>
              </Link>
              <span className="cursor"> (Remove Note)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
