export interface IImage {

  show(): Promise<void>;

  getUrl(): string;
}