import { useState } from "react";
import TxButton from "../components/tx-button/tx-button";
import { StyledNotificationContainer } from "../components/tx-notification/styled";
import TxNotification from "../components/tx-notification/tx-notification";

const TxNotificationStory = {
  title: "tx-design-ui/TxNotification",
  component: TxNotification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "info", "warning", "error"],
    },
    title: { control: "text" },
    description: { control: "text" },
    closable: { control: "boolean" },
    duration: { control: "number" },
    onClose: { action: "closed" },
  },
};

export default TxNotificationStory;

export const Preview = {
  args: {
    type: "info",
    title: "Notification Title",
    description: "This is the notification description.",
    closable: true,
    duration: 0,
  },
};

export const BasicUsage = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <TxButton onClick={() => setShow(true)}>Show Notification</TxButton>
      {show && (
        <StyledNotificationContainer>
          <TxNotification
            type="info"
            title="Notification"
            description="This is a notification message."
            onClose={() => setShow(false)}
            duration={0}
          />
        </StyledNotificationContainer>
      )}
    </>
  );
};

export const Types = () => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = type => {
    const id = Date.now();
    const typeConfig = {
      success: { title: "Success", description: "Operation completed successfully!" },
      info: { title: "Info", description: "This is an information message." },
      warning: { title: "Warning", description: "Please be careful with this action." },
      error: { title: "Error", description: "Something went wrong!" },
    };

    const newNotification = {
      id,
      type,
      ...typeConfig[type],
    };

    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4500);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "12px" }}>
        <TxButton type="success" onClick={() => showNotification("success")}>
          Success
        </TxButton>
        <TxButton onClick={() => showNotification("info")}>Info</TxButton>
        <TxButton type="warning" onClick={() => showNotification("warning")}>
          Warning
        </TxButton>
        <TxButton type="danger" onClick={() => showNotification("error")}>
          Error
        </TxButton>
      </div>

      {notifications.length > 0 && (
        <StyledNotificationContainer>
          {notifications.map(notification => (
            <TxNotification
              key={notification.id}
              type={notification.type}
              title={notification.title}
              description={notification.description}
              onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
            />
          ))}
        </StyledNotificationContainer>
      )}
    </>
  );
};

export const WithoutDescription = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <TxButton onClick={() => setShow(true)}>Show Notification</TxButton>
      {show && (
        <StyledNotificationContainer>
          <TxNotification type="success" title="Success!" onClose={() => setShow(false)} duration={0} />
        </StyledNotificationContainer>
      )}
    </>
  );
};
