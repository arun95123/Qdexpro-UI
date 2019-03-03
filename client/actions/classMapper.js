import { SAVE_MAPPING } from './types.js'

export const saveMapping = (field,index,data) => {
  return{
    type: SAVE_MAPPING,
    field: field,
    index: index,
    data: data
  }
};
