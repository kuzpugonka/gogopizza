import { hideLoader, showLoader } from "./loader.js";

export const getData = async (url) => {
  showLoader();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Ошибка в ответе сервера");
    }

    return await response.json();
  } catch (error) {
    console.error(`Данные с сервера не получены: ${error}`);
    return [];
  } finally {
    hideLoader();
  }
};
