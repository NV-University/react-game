import {sleep} from '@/utils';
import {dispatch} from '@/store';

import {actions} from './slice';
import type {Notification} from './types';

export const setVersion = async (version: string) => {
  await sleep(2000);
  dispatch(actions.setVersion(version));
};

export const addNotification = (value: Notification) => {
  dispatch(actions.addNotification(value));
};
