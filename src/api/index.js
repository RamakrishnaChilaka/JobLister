import fetch from 'node-fetch';
import data from './data.json';

export function getData() {
  return new Promise((res,rej) => {
    setTimeout(() => {
      res(data);
    }, 300);
  });

  // return fetch('https://jobsqared.herokuapp.com/jobs').then(data => data.json());
}

