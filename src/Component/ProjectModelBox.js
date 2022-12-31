import React from "react";
import Data from "./projectsData.json";

function ProjectModelBox() {
  return (
    <>
      {Data.data.map((item) => {
        const { id, img, title, detail } = item;
        return (
          <div key={id}>
            <div>
              <img src={img} alt={""} />
              <h1>{title}</h1>
              <div className="BG">
                <h1>{detail}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectModelBox;
