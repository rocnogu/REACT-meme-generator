import "./index.css";
import { useState } from "react";
import jsonData from "./Data.json";

//
export default function App() {
  //
  const [data, setData] = useState(jsonData.memes);
  const [valueTop, setValueTop] = useState("");
  const [valueBottom, setValueBottom] = useState("");
  const [index, setIndex] = useState(0);
  //
  //
  // change the text   // change the text
  const handleChangeTop = (top) => {
    setValueTop(top.target.value);
  };
  const handleChangeBottom = (bottom) => {
    setValueBottom(bottom.target.value);
  };

  //  change the   picture // change the   picture
  const handleNext = () => {
    if (index < 99) {
      setIndex((p) => p + 1);
    } else if (index === 99) {
      setIndex(0);
    } else {
      console.log("handleNext if dosnt work");
    }
  };
  //
  const handlePrevious = () => {
    if (index > 0) {
      setIndex((p) => p - 1);
    } else if (index === 0) {
      setIndex(99);
    } else {
      console.log("handlePrevious if dosnt work");
    }
  };
  //
  //
  const upload = [
    {
      id: "asdfafa5",
      name: "new upload",
      url: "https://i.imgflip.com/1g8my4.jpg",
      width: 600,
      height: 908,
      box_count: 3
    }
  ];

  const handleUpload = () => {
    setData(upload.concat(data));
    console.log(data);
  };
  //
  //
  // return
  return (
    <div className="App">
      {data.length ? (
        <div className="container">
          <div className="butons">
            <button onClick={(p) => handlePrevious(p)}> previous</button>
            <button onClick={(p) => handleNext(p)}> next</button>
          </div>

          <div className="image_div">
            <img key={index} src={data[index].url} alt="img" className="img" />
          </div>
          <input
            placeholder="TOP TEXT"
            value={valueTop}
            onChange={handleChangeTop}
            type="text"
            className="top"
            id="top"
            name="top"
          />

          <input
            placeholder="BOTTOM TEXT"
            value={valueBottom}
            onChange={handleChangeBottom}
            type="text"
            className="bottom"
            id="bottom"
          />
          <div>
            <button onClick={(p) => handleUpload(p)}>upload</button>
          </div>
        </div>
      ) : (
        "loading..."
      )}
    </div>
  );
}
