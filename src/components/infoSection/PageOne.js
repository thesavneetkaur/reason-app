import React from "react";
import InfoSection from "./InfoSection";

function PageOne() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "2rem",
        width: "100vw",
      }}>
      <p style={{ fontSize: "2rem" }}>
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare
        tempus aliquet. Pellentesque finibus, est et iaculis suscipit, dolor
        nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi eros
        est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis
        pellentesque pretium. Praesent sollicitudin vestibulum iaculis. Mauris a
        finibus orci. Quisque ipsum nunc, efficitur sit amet blandit ut, aliquam
        quis dui. Phasellus interdum leo eu ipsum malesuada, et interdum diam
        egestas. Maecenas pretium fermentum tortor ac tincidunt. Curabitur
        consectetur dolor libero, at aliquam est ornare eleifend. Aliquam at
        finibus dolor.”{" "}
      </p>
    </div>
  );
}

export default PageOne;
