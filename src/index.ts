type Action = {
  type: string,
  [extraProps: string]: any
}

type Meta = {
  timestamp: number,
}

type Frame = {
  data: Action,
  meta: Meta,
}

type Data = {
  frame: Frame,
  state: any,
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
      frame: {
        data: action,
        meta: {
          timestamp: (new Date()).getTime(),
        },
      },
      state: store.getState(),
    });
  }
};

export default extensionMiddleware;
