// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(obj: unknown): obj is UserData {
  if (
    obj &&
    typeof obj === "object" &&
    ("nome" in obj || "email" in obj || "cpf" in obj)
  ) {
    return true;
  } else {
    return false;
  }
}

function validJSON(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function loadLocalStorage() {
  const localUserData = localStorage.getItem("UserData");
  if (localUserData && validJSON(localUserData)) {
    const UserData = JSON.parse(localUserData);
    if (isUserData(UserData)) {
      const retorno = Object.entries(UserData).forEach(([key, value]) => {
        const input = document.querySelector(key);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          window.UserData[key] = value;
        }
      });
    }
  }
}

loadLocalStorage();

function handleInput({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem("UserData", JSON.stringify(window.UserData));
  }
}

const form = document.querySelector<HTMLElement>("#form");
form?.addEventListener("keyup", handleInput);
