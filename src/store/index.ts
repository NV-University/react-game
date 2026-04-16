import {type TypedUseSelectorHook, useDispatch as useBaseDispatch, useSelector as useBaseSelector} from 'react-redux';
import {type Action, combineReducers, configureStore, type Dispatch, type Middleware} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';

import * as commonActions from './common/actions';
import {reducer as commonReducer} from './common/slice';

export * from './common/types';

const rootReducer = combineReducers({
  common: commonReducer,
});

const middleware: Middleware<unknown, any, Dispatch<Action>>[] = [];
const enhancers: any[] = [];

middleware.push(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  createLogger({
    level: 'info',
    collapsed: true,
  })
);

// Infer the `RootState` type from the root reducer
export type RootState = ReturnType<typeof rootReducer>;

// The store setup is wrapped in `makeStore` to allow reuse
// when setting up tests that need the same store config
export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        // https://redux-toolkit.js.org/api/serializabilityMiddleware
        serializableCheck: {
          isSerializable: () => true,
        },
      }).concat(...middleware),
    enhancers: getDefaultEnhancers => getDefaultEnhancers().concat(enhancers),
    preloadedState,
  });

  return store;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export const useDispatch = () => useBaseDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useBaseSelector;

export const dispatch = store.dispatch;

export {commonActions};
