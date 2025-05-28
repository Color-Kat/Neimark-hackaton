export const arrayRand = (
    array: any[],
    returnValue = true
) => {
    const index = Math.floor(Math.random()*array.length);

    if(!returnValue) return index;
    else return array[index]
}
