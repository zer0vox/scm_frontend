import React, { useRef } from "react";
import { Button } from "@mui/material";
import ReactToPrint from "react-to-print";

const ComponentToPrint = () => {
  // Add the content you want to print here
  return <div>This will be printed!</div>;
};

export default function PrintButton() {
  const componentRef = useRef(null);

  return (
    <>
      <div>
        {/* button to trigger printing of target component */}
        <ReactToPrint
          trigger={() => <Button>Print this out!</Button>}
          content={() => componentRef.current}
        />

        {/* component to be printed */}
        <div ref={componentRef}>
          <ComponentToPrint />
        </div>
      </div>
    </>
  );
}