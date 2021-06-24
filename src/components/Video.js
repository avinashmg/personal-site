import { useState, useEffect } from "react";
import axios from "axios";
const VideoPlayer = () => {
  const [data, setData] = useState("http//:localhost:8080/");

  useEffect(() => {
    axios.get(`http://localhost:8080`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }, []);
  });
  return (
    <div className="videoPlayer">
      <iframe src={data} frameborder="0" allowfullscreen=""></iframe>
    </div>
  );
};

export default VideoPlayer;
