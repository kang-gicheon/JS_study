let store = {snack : 1000, flower : 5000, beverage : 2000};

for (let item in store) {

    if (!store.hasOwnProPerty(item)) continue;

    console.log(item + '는 가격이 ' + store[item] + '입니다.')

}