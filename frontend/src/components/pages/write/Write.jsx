import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../../context/Context";
export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  
  const handleWriteSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      // const data = FormData();// new operator nhi use kra
      const data = new FormData();

      // having the error that file with same name is uplioading
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);

      newPost.photo = filename;

      try {
        await axios.post("/upload", data);
      } catch (error) {
        // if error occurs a new component would be displayed here.
      }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace('/post/'+res.data.id)
    } catch (error) {
      // if error occurs a new component would be displayed here.
    }
  };
  return (
    <div className="write">
      {/* this is write page */}
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="image" />
      )}
      <form className="writeForm" onSubmit={handleWriteSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-light fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            className="fileInputClass"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            type="text"
            placeholder="Add Ttile"
            id="addTitle"
            autoFocus="true"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Add Data"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
