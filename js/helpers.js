// Fetch method in case API is a link. Just import them in model.js

/*
export const API_URL = `../data.json`;
const TIMEOUT_SEC = 10;

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${res.message} (${res.status})`);
    return data;
  } catch (err) {
    console.error(err);
  }
};
*/
