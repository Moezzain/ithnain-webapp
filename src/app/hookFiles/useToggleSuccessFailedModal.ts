import { useCallback, useState } from "react";

const useToggleSuccessFailedModal = () => {
  const [visibleSuccess, setVisibleSuccess] = useState(false);
  const [visibleFailed, setVisibleFailed] = useState(false);

  const toggleModalSuccess = useCallback(() => {
    setVisibleSuccess(!visibleSuccess);
  }, [visibleSuccess]);
  const toggleModalFailed = useCallback(() => {
    setVisibleFailed(!visibleFailed);
  }, [visibleFailed]);

  return [visibleSuccess, visibleFailed, toggleModalSuccess, toggleModalFailed];
};

export default useToggleSuccessFailedModal;
