//проверяем максимальную длину строки:
//1. Проверить наличине аргумента text, проверить typeof аргумента, что это строка
//2. Проверить наличие второго аргумента length, что это число, проверить, что это не отрицательно число

function maxTextLength (inputtext, length) {
  if (typeof inputtext === 'string' && typeof length === 'number') {
    console.log (length);
  } else {
    return false;
  };

  if (inputtext.length < 20) {
  return false;
  } else if (inputtext.length >= 140) {
    return false;
    } else {
      return true;
    }
}
  
  
  maxTextLength();
