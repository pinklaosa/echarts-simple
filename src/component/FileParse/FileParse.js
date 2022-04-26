import papa from "papaparse";
import React from "react";

const FileParse = (props) => {
    const { sentContent } = props;
  const cFile = ( target ) => {
    let reader = new FileReader();
    reader.readAsText(target.files[0]);
    reader.onload = (e) => {
      let csv = e.target.result;
      let content = papa.parse(csv, {
        header: true,
      }).data;
      sentContent(content);
    };
  };

  return (
    <div>
      <input
        type="file"
        accept="text/csv"
        onChange={({ target }) => cFile(target)}
      />
    </div>
  );
};
export default FileParse;
