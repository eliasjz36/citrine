export type HTMLFormEvent<T extends HTMLElement> = Event & {
  target: T
}
