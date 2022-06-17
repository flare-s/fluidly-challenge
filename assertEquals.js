function assertEquals(expected, actual) {
    if (expected === actual) {
        return true;
    } else {
        if (expected == actual) {
            throw new Error(`Expected the type to be ${typeof expected} but found ${typeof actual}`);
        } else if(Array.isArray(expected)) {
            checkArrayAgainstValue(expected, actual);
        } else {
            checkUnequalValues(expected, actual)
        }
    }
}


const checkUnequalValues = (value1, value2) => {
    if (typeof value1 === "string") {
        if (typeof value2 === "string") {
            throw new Error(`Expected "${value1}" but found "${value2}"`);
        }
    } else {
        if (typeof value2 === "string") {
            throw new Error(`Expected ${value1} but found "${value2}"`);
        } else {
            throw new Error(`Expected ${value1} but found ${value2}`);
        }
    }
}

const checkArraysEquality = (arr1, arr2) => {
    if (!arr1.every((el, ind) => el === arr2[ind])) {
        arr1.forEach((el, ind) => {
            if (el !== arr2[ind]) {
                if (typeof el === "string") {
                    if (typeof arr2[ind] === "string") {
                        throw new Error(`Expected "${el}" but found "${arr2[ind]}"`);
                    } else {
                        throw new Error(`Expected "${el}" but found ${arr2[ind]}`);
                    }
                } else {
                    throw new Error(`Expected ${el} but found ${arr2[ind]}`);
                }
            }
        });
    } else {
        return true;
    }
}

const checkArrayAgainstValue = (arr, value) => {
    if (Array.isArray(value)) {
        if (arr.length === value.length) {
            checkArraysEquality(arr, value);
        } else {
            throw new Error(`Expected the length to be ${arr.length} but found ${value.length}`);
        }
    } else {
        throw new Error(`Expected an array but found ${typeof value}`)
    }
}

module.exports = assertEquals;