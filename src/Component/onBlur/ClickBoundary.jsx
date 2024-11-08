import React, { useEffect, forwardRef } from "react";

const ClickBoundary = forwardRef((props, ref) => {
  const { onInsideClick, onOutsideClick, children } = props;
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onOutsideClick) {
          onOutsideClick();
        }
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleDocumentClick, { capture: true });
    };
  }, [onInsideClick, onOutsideClick]);

  return (
    <>
      {children}
    </>
  );
})

export default ClickBoundary;
