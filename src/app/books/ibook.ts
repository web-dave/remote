export interface IBook {
  title: string;
  subtitle: string;
  isbn: number;
  abstract: string;
  numPages: number;
  author: string;
  publisher: {
    name: string;
    url: string;
  };
  cover: string;
}
