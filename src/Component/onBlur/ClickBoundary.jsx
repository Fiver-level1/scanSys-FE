import React, { useEffect, forwardRef } from "react";

const ClickBoundary = forwardRef((props, ref )=> {
  const { onInsideClick, onOutsideClick, children } = props;
//   console.log(ref.current)
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        if (onOutsideClick) {
            onOutsideClick();
        }
      }
    };

    // Attach event listener to the whole document
    document.addEventListener("click", handleDocumentClick, { capture: true });

    // Cleanup the event listener on component unmount
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
