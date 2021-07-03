type Action = {
  type: string,
  [extraProps: string]: any
}

type Data = {
  action: Action,
  state: any,
}

const post = (data: Data) => {
  const event = new CustomEvent<Data>('SafariReduxDevToolsExtension', { detail: data });
  document.dispatchEvent(event);
};

const extensionMiddleware = (store: any) => (next: any) => (action: Action) => {
  next(action);

  post({
    action,
    state: store.getState(),
  });
};

export default extensionMiddleware;
