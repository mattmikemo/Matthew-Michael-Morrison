import 'vidstack/styles/defaults.css'

import { defineCustomElements } from 'vidstack/elements';

defineCustomElements();
// the `.js` extension is required.
import 'vidstack/define/media-player.js';

<media-player
  title="Sprite Fight"
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=268&width=980"
  thumbnails="https://media-files.vidstack.io/sprite-fight/thumbnails.vtt"
  aspect-ratio="16/9"
  crossorigin
>
  <media-outlet>
    <media-poster
      alt="Girl walks into sprite gnomes around her friend on a campfire in danger!"
    ></media-poster>
   <track
      src="https://media-files.vidstack.io/sprite-fight/subs/english.vtt"
      label="English"
      srclang="en-US"
      kind="subtitles"
      default
    />
    <track
      src="https://media-files.vidstack.io/sprite-fight/chapters.vtt"
      srclang="en-US"
      kind="chapters"
      default
    />
  </media-outlet>
  <media-community-skin></media-community-skin>
</media-player>
