// Каталог товаров в виде массива объектов, содержащих поля:

//  id            Код товара
//  name          Наименование
//  description   Описание
//  sizes         массив возможных размеров
//  price         цена товара
//  available     Признак доступности для продажи

// Создайте в коде несколько (не менее 5) товаров в каталоге

const goods = {
    1 : {
        id: 1,
        name: "Шорты детские",
        description: "хлопок 95 %, лайкра 5 %",
        sizes: ["S", "M"],
        price: 1.89,
        available: true,
    },
    2 : {
        id: 2,
        name: "Рубашка мужская",
        description: "хлопок 100 %",
        sizes: ["XL", "XXL"],
        price: 5.60,
        available: true,
    },
    3 : {
        id: 3,
        name: "Штаны мужские",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 6.00,
        available: true,
    },
    4 : {
        id: 4,
        name: "Платье женское",
        description: "хлопок 100 %",
        sizes: ["M", "L"],
        price: 21.55,
        available: false,
    },
    5 : {
        id: 5,
        name: "Футболка",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 15.65,
        available: false
    },
}


// Корзина в виде массива объектов, содержащих поля:

// good           ссылка на товар в каталоге
// amount         количество товара в корзине

// и несколько (не менее 2) товаров в корзине.
const basket = [
    {
        good: 1,
        amount: 1,
    },
    {
        good: 2,
        amount: 3,
    },
    {
        good: 3,
        amount: 2,
    },
]


// Функция добавления товара в корзину
function newGood(good, amount) {
    basket.push({"good":good, "amount": amount})
    return basket
}
// Тест функции
//console.log(newGood(process.argv[2], process.argv[2]));

// Функция удаления одного товара из корзины
function delOneGood(good) {
    basket.splice(good, 1); 
    return basket
}
// Тест функции
//console.log(delOneGood(process.argv[2]));

// Функция полной очистки корзины.
function clearBasket() {
    basket.splice(0, basket.length); 
    return basket
}
// Тест функции
//console.log(clearBasket());

// totalAmount    Общее количество товаров в корзине
// totalSumm      Общая стоимость товаров в корзине

function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let place_basket = 0; place_basket < basket.length; place_basket++) {

        totalSumm = totalSumm + basket[place_basket].amount * goods[basket[place_basket].good].price 

        totalAmount = totalAmount + basket[place_basket].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }
    return totals
}

// Тест функции
//console.log(total());