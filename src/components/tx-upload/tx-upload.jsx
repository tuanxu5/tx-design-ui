import PropTypes from "prop-types";
import { useRef, useState } from "react";
import {
  FileAction,
  FileActions,
  FileIcon,
  FileItem,
  FileList,
  FileName,
  UploadArea,
  UploadHint,
  UploadIcon,
  UploadInput,
  UploadProgress,
  UploadProgressBar,
  UploadText,
  UploadWrapper,
} from "./styled";

export const TxUpload = ({
  accept = "*",
  multiple = false,
  disabled = false,
  maxSize = null,
  fileList = [],
  defaultFileList = [],
  listType = "text",
  showUploadList = true,
  children,
  onChange,
  onRemove,
  beforeUpload,
  customRequest,
  className,
  ...props
}) => {
  const [files, setFiles] = useState(defaultFileList);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef(null);

  const currentFiles = fileList.length > 0 ? fileList : files;

  const handleClick = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = async e => {
    if (disabled) return;
    const selectedFiles = Array.from(e.target.files || []);
    await processFiles(selectedFiles);
    e.target.value = "";
  };

  const processFiles = async selectedFiles => {
    let validFiles = selectedFiles;

    if (beforeUpload) {
      validFiles = await Promise.all(
        selectedFiles.map(async file => {
          const result = await beforeUpload(file);
          return result === false ? null : file;
        })
      );
      validFiles = validFiles.filter(Boolean);
    }

    if (maxSize) {
      validFiles = validFiles.filter(file => file.size <= maxSize * 1024 * 1024);
    }

    const newFiles = validFiles.map(file => ({
      uid: Date.now() + Math.random(),
      name: file.name,
      status: "uploading",
      percent: 0,
      originFileObj: file,
      url: URL.createObjectURL(file),
    }));

    const updatedFiles = multiple ? [...currentFiles, ...newFiles] : newFiles;

    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }

    if (onChange) {
      onChange(updatedFiles);
    }

    if (customRequest) {
      newFiles.forEach(fileObj => {
        customRequest({
          file: fileObj.originFileObj,
          onProgress: percent => {
            updateFileProgress(fileObj.uid, percent);
          },
          onSuccess: () => {
            updateFileStatus(fileObj.uid, "done");
          },
          onError: () => {
            updateFileStatus(fileObj.uid, "error");
          },
        });
      });
    } else {
      newFiles.forEach(fileObj => {
        simulateUpload(fileObj.uid);
      });
    }
  };

  const simulateUpload = uid => {
    let percent = 0;
    const interval = setInterval(() => {
      percent += 10;
      updateFileProgress(uid, percent);
      if (percent >= 100) {
        clearInterval(interval);
        updateFileStatus(uid, "done");
      }
    }, 200);
  };

  const updateFileProgress = (uid, percent) => {
    const updatedFiles = currentFiles.map(file => (file.uid === uid ? { ...file, percent } : file));
    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }
    if (onChange) {
      onChange(updatedFiles);
    }
  };

  const updateFileStatus = (uid, status) => {
    const updatedFiles = currentFiles.map(file =>
      file.uid === uid ? { ...file, status, percent: status === "done" ? 100 : file.percent } : file
    );
    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }
    if (onChange) {
      onChange(updatedFiles);
    }
  };

  const handleRemove = file => {
    const updatedFiles = currentFiles.filter(f => f.uid !== file.uid);
    if (fileList.length === 0) {
      setFiles(updatedFiles);
    }
    if (onRemove) {
      onRemove(file);
    }
    if (onChange) {
      onChange(updatedFiles);
    }
  };

  const handleDragOver = e => {
    e.preventDefault();
    if (!disabled) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = e => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = async e => {
    e.preventDefault();
    setIsDragging(false);
    if (!disabled) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      await processFiles(droppedFiles);
    }
  };

  const renderFileIcon = file => {
    if (listType === "picture-card" && file.url) {
      return <img src={file.url} alt={file.name} />;
    }
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
      </svg>
    );
  };

  return (
    <UploadWrapper className={className} listType={listType}>
      <UploadArea
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        disabled={disabled}
        isDragging={isDragging}
        listType={listType}
      >
        <UploadInput
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          disabled={disabled}
          {...props}
        />
        {children || (
          <>
            <UploadIcon listType={listType}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </UploadIcon>
            <UploadText listType={listType}>
              {listType === "picture-card" ? "Upload" : "Click or drag file to upload"}
            </UploadText>
            {listType !== "picture-card" && <UploadHint>Support for a single or bulk upload</UploadHint>}
          </>
        )}
      </UploadArea>

      {showUploadList && currentFiles.length > 0 && (
        <FileList listType={listType}>
          {currentFiles.map(file => (
            <FileItem key={file.uid} listType={listType}>
              <FileIcon listType={listType}>{renderFileIcon(file)}</FileIcon>
              {listType !== "picture-card" && <FileName>{file.name}</FileName>}
              <FileActions className="file-actions" listType={listType}>
                {file.status === "done" && listType === "picture-card" && (
                  <FileAction listType={listType}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </FileAction>
                )}
                <FileAction onClick={() => handleRemove(file)} danger listType={listType}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </FileAction>
              </FileActions>
              {file.status === "uploading" && listType !== "picture-card" && (
                <UploadProgress>
                  <UploadProgressBar percent={file.percent} />
                </UploadProgress>
              )}
            </FileItem>
          ))}
        </FileList>
      )}
    </UploadWrapper>
  );
};

TxUpload.propTypes = {
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  maxSize: PropTypes.number,
  fileList: PropTypes.array,
  defaultFileList: PropTypes.array,
  listType: PropTypes.oneOf(["text", "picture", "picture-card"]),
  showUploadList: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  beforeUpload: PropTypes.func,
  customRequest: PropTypes.func,
  className: PropTypes.string,
};

TxUpload.defaultProps = {
  accept: "*",
  multiple: false,
  disabled: false,
  maxSize: null,
  fileList: [],
  defaultFileList: [],
  listType: "text",
  showUploadList: true,
  children: null,
  onChange: undefined,
  onRemove: undefined,
  beforeUpload: undefined,
  customRequest: undefined,
  className: "",
};
