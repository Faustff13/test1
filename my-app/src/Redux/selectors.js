import { createSelector } from 'reselect'
import { data } from './reducer'

export const id = state => state.data.id_last_rep || data.id_last_rep

export const search = state => state.data.search || data.search
