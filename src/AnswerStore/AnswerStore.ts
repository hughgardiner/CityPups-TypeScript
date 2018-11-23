import { observable, action } from 'mobx';

export class AnswerStore {
  @observable public sizeAnswers: string[] = [];

  @action public sizeButtonPressed(button: string) {
    this.sizeAnswers.push(button);
  }
}

export const answerStore = new AnswerStore();