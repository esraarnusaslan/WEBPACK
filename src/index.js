import { setItem } from './utils/storage.js';
import './index.scss';
import "bootstrap"

document.getElementById('btnSayHello').addEventListener('click', () => {
    alert('hello webpack');

    setItem('token', '456456sfjg34y732kjjy4bjhsdb');
});
