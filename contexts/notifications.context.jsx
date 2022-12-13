"use client";
import { useEffect, useState } from "react";
import { createContext } from "react";

import NOTIFICATIONS from "../DUMMY-DATA.json";

const setNotificationToRead = (notifications, notificationId) => {
  return notifications.map((notification) =>
    notification.id === notificationId
      ? { ...notification, read: true }
      : notification
  );
};
const setAllNotificationsToRead = (notifications) => {
  return notifications.map((notification) => {
    return { ...notification, read: true };
  });
};

export const NotificationsContext = createContext({
  notifications: [],
  setNotificationsToRead: () => {},
  setAllToRead: () => {},
  notificationsCount: "",
});

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [notificationsCount, setNotificationsCount] = useState(0);

  useEffect(() => {
    const newNotificationsCount = notifications.reduce(
      (total, notification) => (notification.read ? total : total + 1),
      0
    );
    setNotificationsCount(newNotificationsCount);
  }, [notifications]);

  const setNotificationsToRead = (notificationId) => {
    setNotifications(setNotificationToRead(notifications, notificationId));
  };
  const setAllToRead = () => {
    setNotifications(setAllNotificationsToRead(notifications));
  };
  const value = {
    notifications,
    setNotificationsToRead,
    setAllToRead,
    notificationsCount,
  };
  return (
    <NotificationsContext.Provider value={value}>
      {children}
    </NotificationsContext.Provider>
  );
};
