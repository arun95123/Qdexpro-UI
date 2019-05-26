import { SAVE_MAPPING } from "./types.js";
import { SAVE_TEXT } from "./types.js";

export const saveMapping = (field, index, data) => {
  return {
    type: SAVE_MAPPING,
    field: field,
    index: index,
    data: data
  };
};

export const saveText = (no, classes, options) => {
  return {
    type: SAVE_TEXT,
    no: no,
    classes: classes,
    options: options
  };
};
