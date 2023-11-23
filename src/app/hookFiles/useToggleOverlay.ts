import { useCallback, useState } from "react";

let visible = false;
// const [visible, setVisible] = useState(false);

const useToggleOverlay: any = () => {
  const toggleOverlay = () => {
    console.log("called??");
    document.body.style.overflow = visible ? "auto" : "hidden";
    visible = !visible;
  };

  return [visible, toggleOverlay];
};

export default useToggleOverlay;
