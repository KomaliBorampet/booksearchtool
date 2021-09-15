export function sortAscending(arr, sortValue) {
    return arr.slice().sort((a, b) => (a[sortValue] === null) - (b[sortValue] === null) || a[sortValue] - b[sortValue])
}

export function sortDescending(arr, sortValue) {
    return arr.slice().sort((a, b) => (a[sortValue] === null) - (b[sortValue] === null) || b[sortValue] - a[sortValue])
}


export function sortAscString(arr, sortValue) {
    return arr.slice().sort((a, b) => a[sortValue] !== b[sortValue] ? a[sortValue] < b[sortValue] ? -1 : 1 : 0);
}

export function sortDescString(arr, sortValue) {
    return arr.slice().sort((a, b) => a[sortValue] !== b[sortValue] ? a[sortValue] < b[sortValue] ? 1 : -1 : 0);
}