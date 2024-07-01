import { createAction } from '@reduxjs/toolkit';
import { SET_SELECTED_MENU_ITEM } from '../constants';

export const setSelectedMenuItem = createAction<string>(SET_SELECTED_MENU_ITEM);
