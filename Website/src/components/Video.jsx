
import React from "react";
import 'vidstack/styles/defaults.css';
import { MediaOutlet, MediaPlayer } from '@vidstack/react';

export default function Video({source, poster}) {
  const [autoplay, loop] = "true";
  return <MediaPlayer
  autoplay={autoplay}
  loop={loop}
  src={source}
  poster={poster}
  controls
>
  {/* ^ remove `controls` attribute if you're designing a custom UI */}
  <MediaOutlet />
</MediaPlayer>
;
}