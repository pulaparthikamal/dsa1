
const infinitearrayTagetElement = (arr, target) => {

// console.log(arr, target);

let s=0;
let e=arr.length-1;

while(s<=e){
    let mid = Math.floor(s+(e-s)/2);
    if(arr[mid]===target){
        return mid;
    }
     if(arr[mid]<target){
        s=mid+1;
    }
    else{
        e=mid-1;
    }

console.log(s, e);
}
return e
}
    console.log(infinitearrayTagetElement([1, 2, 3, 5, 10, 11, 16, 18, 20, 22, 25, 26, 29, 30], 18));