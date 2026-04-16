export type CommonReducer = {
  version: string;
  notifications: Notification[];
};

export type Notification = {
  message: string;
  type: 'info' | 'warning' | 'error';
};
