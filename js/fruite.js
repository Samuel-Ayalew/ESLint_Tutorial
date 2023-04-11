

import lodash from 'lodash';
var arr = ['Apple','grapes','orange'];
lodash.findIndex(arr,'grapes');

function evenNumber(number){
    if(number%2 === 0){
        return true;
    }
    return false;
}
evenNumber(4);