import * as React from "react";
import { Heading } from "../components/Heading";
import { VIDEO_CARDS } from "../data/video-cards";
import { VideoCard } from "../components/VideoCard";
import { PageBreak } from "../components/PageBreak";

export const Listen = () => {
  return (
    <div>
      <Heading level={2} textCenter>
        Listen
      </Heading>
      {VIDEO_CARDS.map((card, i) => (
        <React.Fragment key={card.title}>
          <VideoCard {...card} />
          {i < VIDEO_CARDS.length - 1 && <PageBreak />}
        </React.Fragment>
      ))}
    </div>
  );
};
