import React from "react";

function AnthemSection() {
  return (
    <div className="relative">
      <div className="relative w-full max-h-screen bg-black overflow-hidden">
        <iframe
          className="w-full h-[90vh] md:h-screen border-none"
          src="https://player.vimeo.com/video/1028382110?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          title="Anthem Video"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default AnthemSection;
