import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <div>
      {copied && (
        <div style={{ position: "absolute", bottom: "3rem", fontSize: "2rem" }}>
          Copied to Clipboard
        </div>
      )}
    </div>,
    document.getElementById("popup-content")
  );
};

export default PopupContent;
