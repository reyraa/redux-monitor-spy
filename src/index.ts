interface Data {
  action: any,
  state: any,
}

interface CustomEvent<T = any> extends Event {
  /**
   * Returns any custom data event was created with. Typically used for synthetic events.
   */
  readonly detail: T;
  initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void;
}

const post = (data: Data) => {
  const event = new CustomEvent<Data>('SafariReduxDevToolsExtension', { detail: data });
  document.dispatchEvent(event);
};

const extensionMiddleware = (store: any) => (next: any) => (action: any) => {
  next(action);
  post({
    action,
    state: store.getState(),
  });
};

export default extensionMiddleware;
