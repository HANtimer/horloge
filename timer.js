function timeout(arr, time, callback){
    var i = arr[0];
    callback(i);
    Loop();
    function Loop(){
        setTimeout(function(){
            i++;
            if (i<arr[1]){
                callback(i);
                Loop();
            }
        }, time*1000)
    }
}


timeout([5,11], 1, function(i){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`${i} sec left`)
});
