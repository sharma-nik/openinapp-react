import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

//icons
import profile from "../../../assets/profile.png";
import notification from "../../../assets/Notification1.svg";
import msOffice from "../../../assets/MS_Office.svg";
import upload from "../../../assets/Upload1.svg";

//styles
import "./Upload.scss";
import UploadsTable from "./UploadsTable/UploadsTable";

const Upload = () => {
  const [showUploadsTable, setShowUploadsTable] = useState(false);
  const [uploadsData, setUploadsData] = useState([]);
  const [disableButton, setDisableButton] = useState(false);
  const [sheetName, setSheetName] = useState("");
  const [loadingSheet, setLoadingSheet] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    if (file) {
      // Read the Excel file
      setLoadingSheet(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          setSheetName(workbook.SheetNames[0]);
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet);
          setUploadsData(jsonData);
        } catch (error) {
          console.error("Error reading Excel file:", error);
        }
      };

      reader.readAsArrayBuffer(file);
      setLoadingSheet(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".xls, .xlsx",
  });

  const showUploadsHandler = () => {
    if (uploadsData.length) {
      setShowUploadsTable(true);
      setDisableButton(true);
    }
  };

  return (
    <div className="upload">
      <div className="upload__header-wrapper">
        <p className="upload__header-label">Upload CSV</p>
        <div className="upload__header-actions">
          <img className="upload__profile-notification" src={notification} />
          <img className="upload__profile-image" src={profile} />
        </div>
      </div>

      <div className="upload__drop-container">
        <div
          {...getRootProps()}
          className={`drop-area ${
            isDragActive ? "dragging" : ""
          } upload__drop-zone`}
        >
          <img src={msOffice} className="upload__msOffice-icon" />
          <input {...getInputProps()} />
          {uploadsData.length ? (
            <p className="upload__drag-text">{`${sheetName}.xlsx`}</p>
          ) : (
            <p className="upload__drag-text">
              Drop your excel sheet here or{" "}
              <span className="upload__browse-text">browse</span>
            </p>
          )}
        </div>
        <button
          disabled={disableButton}
          className={
            disableButton ? "  upload__button-disabled" : "upload__button"
          }
          onClick={showUploadsHandler}
        >
          <span>
            <img src={upload} className="upload__icon" />
          </span>
          Upload
        </button>
      </div>

      {showUploadsTable && <UploadsTable uploadsData={uploadsData} />}
    </div>
  );
};

export default Upload;
