import { useState, useEffect } from "react";
import axios from "axios";
const VideoPlayer = () => {
  const [data, setData] = useState(false);

  useEffect(() => {
    axios.get(`https://testsite-personal.herokuapp.com/`).then((res) => {
      setData(res.data);
      console.log(res.data);
    }, []);
  });
  if (data !== false) {
    return (
      <div id="video" className="videoPlayer">
        <iframe src={data} frameborder="0" allowfullscreen=""></iframe>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default VideoPlayer;
