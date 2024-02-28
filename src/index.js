import { setItem } from './utils/storage.js';
import './index.scss';
import "bootstrap"

document.getElementById('btnSayHello').addEventListener('click', () => {
    alert('hello webpack');

    setItem('token', 'dfdsjhfjg34y732y4bjhsdb');
});
