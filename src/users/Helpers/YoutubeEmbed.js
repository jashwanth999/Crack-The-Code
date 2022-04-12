import React from "react";

export default function YoutubeEmbed(props) {
  return (
    <iframe
      width={400}
      height={200}
      src={props.link}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  );
}

