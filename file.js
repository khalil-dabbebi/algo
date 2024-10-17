function insertsort (array){

    for(var i=1 ;i<array.length;i++){
     var x =array[i]
     var j = i-1
      while(j>=0 && array[j] >x ){
         array[j+1]=array[j]
         j--
      }
      array[j+1]= x
    }
return array

}
//input : arr = [50,6,40,11]
//output : [6,11,40,50]