const Timer = function(counter) {
    switch (counter) {
        case 0:
            console.log("Time's up!");
            break;
        case 20:
        case 30:
            console.log(counter + "s left");
            break;
        case 90:
            console.log("1mn 30s left");
            break;
        default:
            if (counter <= 10 && counter) {
                console.log(counter) ;
            } else if (counter % 60 === 0) {
                if (counter / 60 <= 5 && counter / 60 > 0) {
                    console.log(~~(counter / 60) + "mn left");
                }
            }
    }
}

const f = function(c) {
    const a = setInterval(function() {
        if (c >= 0) {
            Timer(c--)
        }
    }, 10);
};
f(5 * 60);
