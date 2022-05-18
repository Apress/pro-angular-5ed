let count: number | undefined | null = 100;
if (count != null && count != undefined) {
    let result1: string = count.toFixed(2);
    console.log(`Result 1: ${result1}`);
}

let result2: string | undefined = count?.toFixed(2);
console.log(`Result 2: ${result2}`);
