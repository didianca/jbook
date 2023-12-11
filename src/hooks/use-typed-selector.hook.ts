import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../state';

export const useTypedSelectorHook: TypedUseSelectorHook<RootState> =
  useSelector;
