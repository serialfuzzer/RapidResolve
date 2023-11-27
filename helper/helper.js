class Helper {
    static chunkArray(arr,size) {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    }

    static delay(seconds){
        let sleepTill = seconds*1000;
        return new Promise(function(resolve){
            setTimeout(resolve, sleepTill);
        });
    }
}

module.exports = Helper;