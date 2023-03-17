
import React from "react";
import 'vidstack/styles/defaults.css';
import { MediaOutlet, MediaPlayer } from '@vidstack/react';


export default function Counter() {
  return <MediaPlayer
  src="https://gateway.pinata.cloud/ipfs/Qme47jcBrZBWdgrRijag587zxfURdoFsM7oa3G4yggiM5r?_gl=1*s7wbop*_ga*NGE1NmQ4NzgtODZiOS00NmRjLThjOTgtMGVkZWUzYmNjMjk1*_ga_5RMPXG14TE*MTY3OTA2ODg0Ni4xLjEuMTY3OTA2OTA3OC40NS4wLjA."
  poster="https://media-files.vidstack.io/poster.png"
  controls
>
  {/* ^ remove `controls` attribute if you're designing a custom UI */}
  <MediaOutlet />
</MediaPlayer>
;
}