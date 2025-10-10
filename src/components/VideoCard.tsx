import * as React from "react";
import { VideoCardData } from "../data/video-cards";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

export const VideoCard: React.FC<VideoCardData> = ({
  title,
  embedLink,
  performers,
  venue,
}) => {
  return (
    <div className="my-4">
      <Heading level={3}>{title}</Heading>
      <Paragraph>
        {performers.join(", ")}
        <br />
        {venue}
      </Paragraph>
      <div className="my-4">
        <iframe
          className="w-full aspect-video"
          src={embedLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  );
};
