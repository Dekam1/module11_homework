export function getMonth(n) {
  let month = [
'Январь',
'Февраль',
'Март',
'Апрель',
'Май',
'Июнь',
'Июль',
'Август',
'Сентябрь',
'Октябрь',
'Ноябрь',
'Декабрь'
];
 let resultMonth = '';
 if (n <= 0 || n > month.length) {
   return `Ошибка!`;
 }
 month.forEach(function(item, index) {
   if (n - 1 == index) {
     resultMonth += item;
   }
 })
 return resultMonth;
}

export function getPercents(percent, number) {
  return number / 100 * percent;
}

export function repeatWord(word, count) {
  let words = '';
  for (let i = 1; i <= count; ++i) {
    words += word + i + ', ';
  }
  return words;
}

repeatWord('слово', 3)
