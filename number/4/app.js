let a = +prompt("Введите число");

while (isNaN(a)) {
    alert("Некорректные данные");
    a = +prompt("Введите число");
}
if (a ** (1 / 2) % 1 === 0) {
    alert(`${a ** (1 / 2)}`);
} else {
    alert(`Округление до целых ${(a ** (1 / 2)).toFixed(0)} \nОкругление до десятых ${(a ** (1 / 2)).toFixed(1)} \nОкругление до сотых ${(a ** (1 / 2)).toFixed(2)}`);
}