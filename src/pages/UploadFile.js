import React from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const Uploader = () => {
  const axios = require("axios").default;
  const API_ENDPOINT = "https://lgmm9zkwp5.execute-api.us-west-2.amazonaws.com/default/togetpresignedurl"
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };

  const handleSubmit = async (files) => {
    const f = files[0];
    console.log(f["file"]);
    // * GET request: presigned URL
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT,
    });
    console.log("Response: ", response);

    // * PUT request: upload file to S3
  const result = await fetch(response.data.uploadURL, {
    method: "PUT",
    headers: {
        "Content-Type": 'text/csv' 
      },
    body: f["file"],
    });
    console.log("Result: ", result);
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      hjello
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent="Drop A File"
      styles={{
        dropzone: { width: 400, height: 200 },
        dropzoneActive: { borderColor: "green" },
      }}
    />
  );
};

export default Uploader;