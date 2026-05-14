// const arr = [{ a: 1 }, 2, 3, 4, 5, "", 7, [8, 9]];

// const arr1 = arr.filter(Boolean);
// console.log(arr1);
// arr1[0].a = 10;
// console.log(arr);

// const arr = [1, "", { num: 2 }];

// const arr1 = arr.filter(Boolean); // 创建一个浅拷贝

// arr1[0] = 2; // 不会改变 arr
// arr1[1].num = 3; // arr[2].num 的值会变为 3

// arr1[1] = { age: 18 };

// console.dir(arr[0] === arr1[0]);
// console.log(arr1);
// console.log(arr);

// const obj = { a: 1, b: { c: 2, d: { e: 3 } } };

// const obj1 = { ...obj };
// obj1.a = 2;
// obj1.b.c = 3;
// obj1.b.d.e = 4;
// obj1.b = "qaq";
// console.log(obj);

// const arr = [1, 2, 3];
// const arr1 = JSON.parse(JSON.stringify(arr));

// arr1[0] = 4;
// console.log(arr);

const obj = { a: 1, b: { c: 2 } };
const obj1 = JSON.parse(JSON.stringify(obj));
obj1.a = 2;
obj1.b.c = 3;
console.log(obj);
