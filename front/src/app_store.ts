import { observable, action } from 'mobx';
import { HttpStore } from './http_store';

export class AppStore {
  @observable sentiment: 'positive' | 'negative' | null = null;
  @observable text: string | null = null;
  constructor(private httpStore: HttpStore) {}

  @action
  handleClick = async (): Promise<void> => {
    try {
      const res = await this.httpStore.post<{response: 'positive' | 'negative'}>(
        '/sentiment',
        {
          text: this.text
        }
      )
      this.sentiment = res.response;
    } catch (err) {
      alert("Sorry, we couldn't do the thing");
    }
  };

  @action
  handleInput = (v: string | null) => {
    this.text = v;
    if (!this.text) {
      this.sentiment = null;
    }
  } 
}
