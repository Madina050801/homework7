ar = [
    {
        id: 1,
        year: 2011,
        name: 'Eshmat',
        status: 'student',
        key: 'test',
    },
    {
        id: 2,
        year: 2012,
        name: 'Toshmat',
        status: 'student',
        key: 'test',
    },
    {
        id: 3,
        year: 2010,
        name: 'Eshmat akasi',
        status: 'student',
        key: 'test',
    }
]

// function onSort () {
//     let result = ar.map((value, index) )
// }
// (ar.key == year && value == 2010) && console.log(ar);
// console.log(ar.key);

// ls = ar.filter((value) => (ar.value == 'Toshmat' ));
// console.log(ls);
// console.log(ar.sort((a, b) => a-b));

//1-misol
// console.log(ar.sort((a, b) => a.id -b.id));
// console.log(ar.sort((a, b) => a.year -b.year));
// console.log(ar.sort((a, b) => a.name -b.name));


// 2-misol
// const filterAdvanced = (key, value) => {
//     key = 'name';
//     value = 'Eshmat';
  
//     const result = [];
  
//     ar.map( (val) => {
//       if (val['name'].includes('Eshmat')) {
//         for (const kalit in val) {
//           if (kalit === key) {
//             result.push(val);
//           }
//         }
//       }
//     });
  
//     return result;
//   };  
//   console.log(filterAdvanced('name', 'Eshmat'));

//3-misol
const onDelete = (id) => ar.filter((value) => value.id != id);
console.log(onDelete(2));