import './write.css'

export default function Write() {
  return (
    <div className="write">
      {/* this is write page */}
      <img
        className="writeImg"
        src={require("../../images/javascript.png")}
        alt="image"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-light fa-plus"></i>
          </label>
          <input type="file" id="fileInput" className="fileInputClass" />
          <input
            className="writeInput"
            type="text"
            placeholder="Add Ttile"
            id="addTitle"
            autoFocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Add Data"
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
