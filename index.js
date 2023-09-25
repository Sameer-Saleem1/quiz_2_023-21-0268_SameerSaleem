//Task01

function Task01(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
    }
    return sum / arr.length;
}

//Task02

const arr = [10,20,30,40,50];

    
    const result = arr.map((value, index) => {
        console.log('Value at index ${index} is ${value}' );
        return value, index;
});

return result;

//Task03

javascript
 const person = {
 name: "John Doe",
 age: 30,
 country: "USA",
 semester: 5,
 cms: '023-21-0268'
};

console.log(person.name); 
console.log(person.age); 
console.log(person.country); 
console.log(person.semester); 
console.log(person.cms); 