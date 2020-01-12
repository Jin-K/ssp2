import { createAction as originalCreateAction, ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export function createAction<T extends string>(prefix: string, type: T): ActionCreator<T, () => TypedAction<T>> {
  return originalCreateAction(`${prefix}${type}` as T);
}

export function createAction2<T extends string, P extends object>(prefix: string, type: T, config: {
  _as: 'props',
  _p: P,
}): ActionCreator<T, (props: P) => P & TypedAction<T>> {
  return originalCreateAction(`${prefix}${type}` as T, config);
}
