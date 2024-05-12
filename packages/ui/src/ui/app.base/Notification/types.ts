import * as React from 'react'
/**
 * Enumeration for available notification levels.
 */
export enum NotificationLevel {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

/**
 * Interface representing the shape of a notification.
 */
export interface NotificationObject {
  id     :string;
  level  :NotificationLevel;
  content:React.ReactNode;
  created:Date;
  ttl    :number; // TTL in milliseconds
}

/**
 * Interface for all possible actions for notifications.
 */
export type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: NotificationObject }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }

/**
 * The type definition for the notification context value.
 */
export interface NotificationContextType {
  notifications     :NotificationObject[];
  removeNotification:(id: string) => void;
  notify: {
    error  :(content: React.ReactNode, ttl?: number) => void;
    warning:(content: React.ReactNode, ttl?: number) => void;
    success:(content: React.ReactNode, ttl?: number) => void;
  };
}
