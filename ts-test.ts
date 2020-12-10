const arr = ['model', 'year'];
interface ICAR {
  make: string;
  model?: string;
  year?: number;
}

class Car implements ICAR {
  make: string;
  model?: string;
  year?: number;
}

const car: ICAR = {
  make: 'Ford',
};
car[arr[1]] = '1965';

type size = 'S' | 'M' | 'L';
type foo = string | number;
let ljhg: foo;
if (true) {
  let answer: size;
  answer = 'L';
  console.log(answer); // undefined
  const text = 'Meine Größe ist ' + answer + '.';
  const text2 = `Meine Größe ist ${answer}.`;
  answer = 'M';
}
const root = 'https:/my.api.com';
let param = 'foo';
let url = `${root}/${param}`;
