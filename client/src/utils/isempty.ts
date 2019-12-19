// Returns true in the following conditions
// * if the value is undfined
// * if its value is 'null'
// * if it is an empty object
// * if it is an empty string

function isEmpty(value:any){
    if(value === undefined || value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)) {
            return true;
    } else {
        return false;
    }
}


// Exports
//////////

export default isEmpty;
