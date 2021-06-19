const removeFromArray = function(array, pos1, pos2, pos3, pos4) {
    let removed1 = array.splice(pos1-1,1);
    if(pos2>0) {
        let removed2 = array.splice(pos2-1,1);
    }
    if(pos3>0) {
        let removed3 = array.splice(pos3-1,1);
    }
    if(pos4>0) {
        let removed4 = array.splice(pos4-1,1);
    }


    return array;
}

module.exports = removeFromArray
