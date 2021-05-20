import { actionsForMessage } from "./../actions/message";
import { dataActions } from "./../../typing/actions";

const initialState = [
  `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.`,
  `Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.`,
  `Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. `
]

const messageReducer = (state = initialState, action: dataActions) => {
  switch (action.type) {
    case actionsForMessage.ADD_MESSAGE: {
      return [
        ...state,
        action.payload
      ]
    }
    default:
      return state;
  }
};

export default messageReducer;
