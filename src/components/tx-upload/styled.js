import styled from "styled-components";
import { colors } from "../../theme/colors";

export const UploadWrapper = styled.div`
  display: inline-block;
  width: ${props => (props.listType === "picture-card" ? "auto" : "100%")};
`;

export const UploadArea = styled.div`
  display: ${props => (props.listType === "picture-card" ? "inline-flex" : "block")};
  width: ${props => (props.listType === "picture-card" ? "104px" : "100%")};
  height: ${props => (props.listType === "picture-card" ? "104px" : "auto")};
  padding: ${props => (props.listType === "picture-card" ? "8px" : "16px")};
  border: 2px dashed ${props => (props.isDragging ? colors.primary[500] : colors.border.default)};
  border-radius: 8px;
  background-color: ${props => (props.isDragging ? colors.primary[50] : colors.background.default)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    border-color: ${props => (props.disabled ? colors.border.default : colors.primary[500])};
    background-color: ${props => (props.disabled ? colors.background.default : colors.primary[50])};
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const UploadIcon = styled.div`
  font-size: ${props => (props.listType === "picture-card" ? "24px" : "32px")};
  color: ${colors.primary[500]};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: ${props => (props.listType === "picture-card" ? "24px" : "32px")};
    height: ${props => (props.listType === "picture-card" ? "24px" : "32px")};
  }
`;

export const UploadText = styled.div`
  font-size: ${props => (props.listType === "picture-card" ? "12px" : "14px")};
  color: ${colors.text.primary};
  text-align: center;
  font-weight: 400;
`;

export const UploadHint = styled.div`
  font-size: 12px;
  color: ${colors.text.secondary};
  margin-top: 4px;
  text-align: center;
`;

export const FileList = styled.div`
  margin-top: ${props => (props.listType === "picture-card" ? "0" : "16px")};
  display: ${props => (props.listType === "picture-card" ? "inline-flex" : "block")};
  flex-wrap: wrap;
  gap: 8px;
`;

export const FileItem = styled.div`
  display: ${props => (props.listType === "picture-card" ? "inline-flex" : "flex")};
  align-items: center;
  padding: ${props => (props.listType === "picture-card" ? "0" : "8px 12px")};
  background-color: ${props => (props.listType === "picture-card" ? "transparent" : colors.background.secondary)};
  border-radius: 6px;
  margin-bottom: ${props => (props.listType === "picture-card" ? "0" : "8px")};
  width: ${props => (props.listType === "picture-card" ? "104px" : "100%")};
  height: ${props => (props.listType === "picture-card" ? "104px" : "auto")};
  border: ${props => (props.listType === "picture-card" ? `1px solid ${colors.border.default}` : "none")};
  position: relative;
  overflow: hidden;

  &:hover .file-actions {
    opacity: 1;
  }
`;

export const FileIcon = styled.div`
  width: ${props => (props.listType === "picture-card" ? "100%" : "20px")};
  height: ${props => (props.listType === "picture-card" ? "100%" : "20px")};
  margin-right: ${props => (props.listType === "picture-card" ? "0" : "8px")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary[500]};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FileName = styled.span`
  flex: 1;
  font-size: 14px;
  color: ${colors.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 400;
`;

export const FileActions = styled.div`
  display: flex;
  gap: 8px;
  opacity: ${props => (props.listType === "picture-card" ? 0 : 1)};
  transition: opacity 0.3s ease;
  position: ${props => (props.listType === "picture-card" ? "absolute" : "relative")};
  top: ${props => (props.listType === "picture-card" ? "50%" : "auto")};
  left: ${props => (props.listType === "picture-card" ? "50%" : "auto")};
  transform: ${props => (props.listType === "picture-card" ? "translate(-50%, -50%)" : "none")};
  background-color: ${props => (props.listType === "picture-card" ? "rgba(0, 0, 0, 0.5)" : "transparent")};
  padding: ${props => (props.listType === "picture-card" ? "8px 12px" : "0")};
  border-radius: ${props => (props.listType === "picture-card" ? "4px" : "0")};
`;

export const FileAction = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props =>
    props.listType === "picture-card" ? "white" : props.danger ? colors.danger[500] : colors.text.secondary};
  transition: all 0.3s ease;

  &:hover {
    color: ${props =>
      props.listType === "picture-card" ? "white" : props.danger ? colors.danger[600] : colors.primary[500]};
    transform: scale(1.1);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const UploadProgress = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${colors.background.secondary};
  border-radius: 2px;
  margin-top: 8px;
  overflow: hidden;
`;

export const UploadProgressBar = styled.div`
  height: 100%;
  background-color: ${colors.primary[500]};
  transition: width 0.3s ease;
  width: ${props => props.percent}%;
`;
