//проверяем максимальную длину строки:
//1. Проверить наличине аргумента text, проверить typeof аргумента, что это строка
//2. Проверить наличие второго аргумента length, что это число, проверить, что это не отрицательно число

function check (inputtext, length) {
  if (typeof inputtext === 'string' && typeof length === 'number' && inputtext.length <= length) {
    return true;
  } else {
    return false;
  }
}
check();
