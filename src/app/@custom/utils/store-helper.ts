import { createAction, ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

declare type TypedActionWithoutProps<T extends string> = ActionCreator<T, () => TypedAction<T>>;
declare type TypedActionWithProps<T extends string, P extends object> = ActionCreator<T, (props: P) => P & TypedAction<T>>;

export function createPrefixedAction<T extends string>(prefix: string, type: T): TypedActionWithoutProps<T>;
export function createPrefixedAction<T extends string, P extends object>(prefix: string, type: T, config?: {
  _as: 'props',
  _p: P,
}): TypedActionWithProps<T, P>;

export function createPrefixedAction<T extends string, P extends object>(prefix: string, type: T, config?: {
  _as: 'props',
  _p: P,
}): TypedActionWithoutProps<T> | TypedActionWithProps<T, P> {
  return createAction(`${prefix} ${type}` as T, config);
}
