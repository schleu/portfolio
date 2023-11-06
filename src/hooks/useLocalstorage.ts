export async function useLocalstorage() {
  const db = getLS();

  const dbs = getLS();

  window.indexedDB;
  window.localStorage;
}

function getLS() {
  const request = window.localStorage.getItem("pomodoro");
}

async function saveLSs() {
  return await window.indexedDB.databases();
}
