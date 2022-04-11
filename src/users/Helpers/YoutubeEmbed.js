import React from "react";

export default function YoutubeEmbed() {
  return (
    <div className="video-responsive" style={videoDiv}>
      <iframe
        width="70%"
        height="80%"
        src="https://www.youtube.com/embed/TXxwt1eFF98"
        frameborder="0"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
const videoDiv = {
  width: "100%",
  height: "60%",
  padding: 10,
};
