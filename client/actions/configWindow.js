import {
  TEXTAREA_EXPAND,SAVE_STEP
} from './types'

export const expandTextArea = () => {
  return{
    type: TEXTAREA_EXPAND
  }
};

export const saveStep = (name,data) => {
  return{
    type: SAVE_STEP,
    name: name,
    data: data
  }
}
