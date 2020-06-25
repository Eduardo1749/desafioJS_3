var array=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function inverte (array) {   
    var array2=[];
    for(value=array.length-1;value>=0;value--){
        array2.push(array[value]); 
    }  
    return array2;    
}
console.log(inverte(array));