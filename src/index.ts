type Action = {
  type: string,
  [extraProps: string]: any
}

type Meta = {
  date: Date,
}

type Data = {
  action: Action,
  state: any,
  meta: Meta,
}

const post = (data: Data) => {
  const event = new CustomEvent<Data>('SafariReduxDevToolsExtension', { detail: data });
  document.dispatchEvent(event);
};

const extensionMiddleware = (store: any) => (next: any) => (action: Action): void => {
  next(action);

  // Post only if the extension is installed
  if (window['safari' as any]) {
    post({
      action,
      state: store.getState(),
      meta: {
        date: new Date(),
      },
    });
  }
};

export default extensionMiddleware;
