import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

import type {CommonReducer, Notification} from './types';

const initialState: CommonReducer = {
  version: '0.0.1',
  notifications: [],
};

export const commonSlice = createSlice({
  name: 'COMMON',
  initialState,
  reducers: {
    setVersion: (state, action: PayloadAction<string>) => {
      state.version = action.payload;
    },
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
  },
});

export const {reducer, actions} = commonSlice;
