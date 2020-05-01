import { PagesPipe } from './pages.pipe';

describe('PagesPipe', () => {
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe).toBeTruthy();
  });
  it('create an instance', () => {
    const pipe = new PagesPipe();
    expect(pipe.transform(33)).toBe('Seitenzahl: 33');
  });
});
