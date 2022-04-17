import React from "react";
import './Colorpalette.css'

export const Colorpalette = ({ colorPalettecolors }) => {
  const colors = ["#f59e0b","#fed7aa", "#bef264", "#fef3c7", "#e0f2fe"];
  return (
    <div className="colorpalette-container dis_flex">
      {colors.map((color) => {
        return (
          <div
            style={{ backgroundColor: `${color}` }}
            onClick={() => colorPalettecolors(color)}
            className="colors-palette"
          ></div>
        );
      })}
    </div>
  );
};
