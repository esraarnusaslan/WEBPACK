import { setItem } from './utils/storage.js';
import './index.scss';

document.getElementById('btnSayHello').addEventListener('click', () => {
    alert('hello webpack!');
    const arr = [12421, 3545, 65756, 214134];
    console.log(getArr([...arr]));

    setItem('token', '456456sfjg34y732kjfdfjy4bjhsdb');
});

const getArr = (arr) => {
    return arr.filter((x) => x > 100).reduce((t, x) => t + x, 0);
};
