import React from "react";

const VideoCard = ({ info }) => {
  if (info == undefined) return <h1>Loading..</h1>;
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img src={thumbnails.medium.url} className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
