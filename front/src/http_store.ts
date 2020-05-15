export class HttpStore {
  post = <T>(url: string, data: Object = {}): Promise<T> => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res.json().then(data => data as T)
    })   
  };
}
