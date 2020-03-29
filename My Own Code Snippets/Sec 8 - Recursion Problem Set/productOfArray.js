// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
function productOfArray(arr){
    if (arr.length === 2){
        return arr[0] * arr[1];
    }
    return arr[0] * productOfArray(arr.slice(1));
}
