import { SAVE_MAPPING } from "../actions/types";

import { SAVE_TEXT } from "../actions/types";

const initialState = {
  mappingList: [],
  control: 1,
  controlType: [],
  classOptions: [
    {
      text: "TextBoxMain",
      value: "TextBoxMain",
      index: "null"
    },
    {
      text: "ButtonMain",
      value: "ButtonMain",
      index: "null"
    },
    {
      text: "TableMain",
      value: "TableMain",
      index: "null"
    }
  ]
};

//change to es6
export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_MAPPING: {
      const { mappingList } = { ...state };
      mappingList[action.index] = action.data;
      return {
        ...state,
        mappingList: mappingList
      };
    }
    case SAVE_TEXT: {
      let { control, controlType, classOptions, disableSave } = { ...state };
      control = action.no;
      controlType = action.classes;
      classOptions = action.options;
      return {
        ...state,
        control: control,
        controlType: controlType,
        classOptions: classOptions
      };
    }
  }
  return state;
}
