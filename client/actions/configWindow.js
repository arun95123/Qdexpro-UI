import {
  TEXTAREA_EXPAND,LOAD_STEPDATA
} from './types'

export const expandTextArea = () => {
  return{
    type: TEXTAREA_EXPAND
  }
};

export const loadData = (data) => {
  return{
    type: LOAD_STEPDATA,
    data: data
  }
};
