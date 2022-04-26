import React, { useState, useCallback } from "react";
import FileParse from "../../FileParse/FileParse";

const MultilinePage = () => {
  const [content, setContent] = useState();

  const sentContent = useCallback(
    (contentFile) => {
      setContent(contentFile);
    },
    [setContent]
  );

  return (
    <div>
      <FileParse sentContent={sentContent} />
    </div>
  );
};
export default MultilinePage;
