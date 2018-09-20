import React from "react";
import VideListItem from "./video_list_item";
import VideoListItem from "./video_list_item";

const VideoList = ({ videos, onVideoSelect, ...props }) => {
  const videoItems = videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
