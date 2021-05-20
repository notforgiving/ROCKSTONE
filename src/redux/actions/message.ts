import { dataActions } from "./../../typing/actions";

export enum actionsForMessage {
  ADD_MESSAGE = "ADD_MESSAGE",
}

export const addMessage = (message:string): dataActions => ({
  type: actionsForMessage.ADD_MESSAGE,
  payload: message
});

