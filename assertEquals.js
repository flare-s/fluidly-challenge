// Check if two values are strictly equal
function assertEquals(expected, actual) {
    if (expected === actual) {
        return true;
    } else {
         if(Array.isArray(expected)) {
            return checkArrayAgainstValue(expected, actual);
        } else if(typeof expected === "string" && typeof actual === "string"){
            return checkStringCaseType(expected, actual);
        } else {
            return checkDifferentTypes(expected, actual);
        }
    }
}

// Check if two strings on the lower case type are equal
const checkStringCaseType = (string1, string2) => {
    if (string1.toLowerCase() === string2.toLowerCase()) {
        throw new Error(`Expected "${string1}" but found "${string2}". Please check the string type case.`);
    } else {
        throw new Error(`Expected "${string1}" but found "${string2}"`);
    }
}

// Check if two arrays are identical
const areArraysEqual = (arr1, arr2) =>{
    return arr1.every((el, ind) => el === arr2[ind])
}

// Check if two arrays are equal or not
const checkArraysEquality = (arr1, arr2) => {
    if (!areArraysEqual(arr1, arr2)) {
        return arr1.forEach((el, ind) => {
            if (el !== arr2[ind]) {
                if(typeof el === "string" && typeof arr2[ind] === "string"){
                    return checkStringCaseType(el, arr2[ind]);
                } else {
                    return checkDifferentTypes(el, arr2[ind]);
                }
            }
        });
    }
    return true;
}

// Check an array aganst a value.
/**
 * Check if the second value is an array.
 * If not throw the appropriate error.
 * If it's an array, check if the length of both arrays equal.
 * If not, throw an error.
 * If it is, check both arrays to see if they are equal.
 */
const checkArrayAgainstValue = (arr, value) => {
    if (Array.isArray(value)) {
        if (arr.length === value.length) {
            return checkArraysEquality(arr, value);
        } else {
            throw new Error(`Expected the array length to be ${arr.length} but found ${value.length}`);
        }
    } else {
        throw new Error(`Expected an array but found ${typeof value}`)
    }
}

// Check if either values is null
const isNull = (value1, value2) => {
    if (value1 === null) {
        throw new Error(`Expected type null but found ${typeof value2}`);
    } else if (value2 === null) {
        throw new Error(`Expected type ${typeof value1} but found null`);
    }
}

// Check different types and throw the appropriate error
const checkDifferentTypes = (value1, value2) => {
    if(Array.isArray(value2)) {
        throw new Error(`Expected type ${typeof value1} but found array`);
    }
    isNull(value1, value2);

    if (typeof value1 !== typeof value2) {
        throw new Error(`Expected type ${typeof value1} but found ${typeof value2}`);
    }
    throw new Error(`Expected ${value1} but found ${value2}`);
}

module.exports = assertEquals;