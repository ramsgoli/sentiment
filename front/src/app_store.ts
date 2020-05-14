import { observable } from 'mobx';
import { HttpStore } from './http_store';

export class AppStore {
  @observable sentiment: 'positive' | 'negative' | null = null;
  constructor(private httpStore: HttpStore) {}

  getSentiment = async (): Promise<void> => {
    const text: string = document.getElementById('content')!.innerText
    try {
      const res = await this.httpStore.post<{response: 'positive' | 'negative'}>(
        '/sentiment',
        {
          text
        }
      )
      this.sentiment = res.response;
    } catch (err) {
      alert("Sorry, we couldn't do the thing");
    }
  };
}
