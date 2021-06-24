import { useState, useEffect } from "react";
import axios from "axios";
const VideoPlayer = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(`http://194.195.114.27:8080/`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }, []);
  });
  return (
    <div id="video" className="videoPlayer">
      <iframe
        title="Youtube Video"
        src={data}
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
