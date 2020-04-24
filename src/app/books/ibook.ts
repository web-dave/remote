export class IBook {
  publisher = {
    name: '',
    url: '',
  };
  constructor(
    public title: string = '',
    public subtitle: string = '',
    public abstract: string = '',
    public numPages: number = 0,
    public author: string = '',
    public id: string = '',
    public cover: string = '',
    publisher?,
    public isbn: string = ''
  ) {
    if (publisher.name) {
      this.publisher = publisher;
    }
  }
}
