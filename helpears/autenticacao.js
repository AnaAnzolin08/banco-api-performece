import http from 'k6/http';
import { pegarBaseUrl } from '../utils/variaveis.js';
const postLogin = JSON.parse(open('../fixtures/postLogin.json'));

export function obterToken() {
    const url = pegarBaseUrl() + '/login';

    const payload = JSON.stringify(postLogin);

    const params = {
    headers: {
    'Content-Type':'application/json',
        },
      };
    
    const res = http.post(url, payload, params);
    return res.json('token')
}