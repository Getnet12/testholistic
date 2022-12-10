import React, { Component } from "react";
// We are using axios as the http library
import axios from "axios";
// import * as styles from "./FileUpload.module.css";
// import React, { useState } from "react";
// import "react-dropzone-uploader/dist/styles.css";
// import Dropzone from "react-dropzone-uploader";
// const Uploader = () => {
//   const [myFiles, setMyFiles] = useState([]);
//   const axios = require("axios").default;
//   const API_ENDPOINT =
//     "https://lgmm9zkwp5.execute-api.us-west-2.amazonaws.com/default/togetpresignedurl";
//   const handleChangeStatus = ({ meta, remove }, status) => {
//     console.log(status, meta);
//     console.log(remove);
//   };
//   const handleSubmit = async (files) => {
//     const imageToUpload = files[0];
//     // console.log(f["file"]);
//     // * GET request: presigned URL
//     const response = await axios({
//       method: "GET",
//       url: API_ENDPOINT,
//     });
//     // console.log("Response: ", response);
//     // * PUT request: upload file to S3
//     const result = await fetch(response.data.uploadURL, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "image/jpeg",
//       },
//       body: imageToUpload["file"],
//     });
//     console.log("Result: ", result);
//     remove(imageToUpload);
//   };
//   const remove = (file) => {
//     const newFiles = [...myFiles]; // make a var for the new array
//     newFiles.splice(file, 1); // remove the file from the array
//     setMyFiles(newFiles); // update the state
//   };
//   return (
//     <Dropzone
//       onChangeStatus={handleChangeStatus}
//       onSubmit={handleSubmit}
//       hjello
//       maxFiles={1}
//       multiple={false}
//       canCancel={false}
//       inputContent="UPLOAD HERE"
//       styles={{
//         dropzone: { width: 200, height: 75 },
//         dropzoneActive: { borderColor: "#75BA1E" },
//       }}
//     />
//   );
// };

// export default Uploader;
