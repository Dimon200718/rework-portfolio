import './TagCloud.scss'

import React, { useEffect } from "react";

const tags = [
    "React", "JavaScript", "Jquery", "HTML", "CSS", "Wordpress",
    "Figma", "PHP", "Git", "Keyframe", "Sass",
    "React", "JavaScript", "Jquery", "HTML", "CSS", "Wordpress",
    "Figma", "PHP", "Git", "Keyframe", "Sass",
];

const TagCanvas3D = () => {
  useEffect(() => {
    if (window.TagCanvas) {
      try {
        window.TagCanvas.Start("tagcanvas", "taglist", {
          textColour: "rgb(34, 238, 238)",
          outlineColour: "#232323",
          depth: 0.8,
          maxSpeed: 0.1 ,
          scroll:false,
          wheelZoom: false,
          zoom: 1,
          textHeight: 25,
          font: "'Exo 2', sans-serif",
        });
      } catch (e) {
        console.log("TagCanvas error:", e);
      }
    }
  }, []);

  const handleTagClick = (e, id) => {
    e.preventDefault();
    if (window.TagCanvas && window.TagCanvas.TagToFront) {
      window.TagCanvas.TagToFront("tagcanvas", { id }, 500);
    }
  };  

  return (
    <div>
      <canvas
        width="600"
        height="500"
        id="tagcanvas"
        style={{ display: "block", margin: "0 auto", position:"relative", zIndex: "3"}}
      >
        <p>Update your browser to see the canvas.</p>
      </canvas>

      <div id="taglist" style={{ display: "none" }}>
      <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <a
                href="#"
                id={(index + 1).toString()}
                onClick={(e) => handleTagClick(e, (index + 1).toString())}
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagCanvas3D;