import NotFoundImg from "../../assets/img/notFound.png";
import "./style.css";

const DataNotFound = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center">
        <div className="fs-2 text-light text-uppercase fw-bold">
          404 Data Not Found
        </div>
        <div className="fs-5 text-light text-uppercase fw-bold">
          These are not the driods you're looking for .
        </div>
        <img className="img mt-4" src={NotFoundImg} alt="Not Found" />
      </div>
    </div>
  );
};

export default DataNotFound;
