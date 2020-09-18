function minMark(arr,callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < newArr){
            newArr = arr[i] 
        }
        const currentItem = arr[i];
        newArr[i] = callback(currentItem,i,arr);
    }
    return newArr;
}

function maxMark(arr,callback) {
    let newArr = [];
    for (let i =0; i < arr.length; i++){
        if (arr[i] >= newArr) {
            newArr = arr[i];
        }
        const currentItem = arr[i];
        newArr[i] = callback(currentItem,i,arr);
    }
    return newArr;
}

function averageMark(arr,callback) {
    let newArr = 0;
    for (let i = 0; i < arr.length; i++){
        newArr += arr[i];
        const currentItem = arr[i];
        newArr[i] = callback(currentItem,i,arr);
    }
    return newArr/arr.length;
}


let points = [10,9,8,10,5,11];

const minPoint = minMark(points,(currentItem) => {
    return  currentItem;
});
const maxPoint = maxMark(points,(currentItem) => {
    return  currentItem;
});
const averagePoint = averageMark(points,(currentItem) => {
    return  currentItem;
});

let points1 = [8,7,8,4,5,11];

const minPoint1 = minMark(points1,(currentItem) => {
    return  currentItem;
});
const maxPoint1 = maxMark(points1,(currentItem) => {
    return  currentItem;
});
const averagePoint1 = averageMark(points1,(currentItem) => {
    return  currentItem;
});

let points2 = [9,7,8,9,8,11];

const minPoint2 = minMark(points2,(currentItem) => {
    return  currentItem;
});
const maxPoint2 = maxMark(points2,(currentItem) => {
    return  currentItem;
});
const averagePoint2 = averageMark(points2,(currentItem) => {
    return  currentItem;
});





//console.log(`Lowest point is ${minPoint},`,`Highest point is ${ maxPoint},`,`Average point is ${ averagePoint}.`);

function Student(name,minPoint,maxPoint,averagePoint) {
    this.name = name;
    this.minPoint = minPoint;
    this.maxPoint = maxPoint;
    this.averagePoint = averagePoint;
}

let a = new Student('John');
a.minPoint = minPoint;
a.maxPoint = maxPoint;
a.averagePoint = averagePoint;
console.log(a);

let b = new Student('David');
b.minPoint = minPoint1;
b.maxPoint = maxPoint1;
b.averagePoint = averagePoint1;
console.log(b);

let c = new Student('Bob');
c.minPoint = minPoint2;
c.maxPoint = maxPoint2;
c.averagePoint = averagePoint2;
console.log(c);




