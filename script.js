function calculateLinearRegression(yArr, xArr){
    //globally declare variables for all elements of formulas for computing ß0, ß1 that we will need - we need n and sums of x, y, xy, x^2
    let sumY = 0; //variable sumY will hold the sum of all elements in yArr;
    let sumX = 0; //variable sumX will hold the sum of all elements in xArr;
    let sumXsquared = 0; //variable sumXsquared will hold the sum of all elements in xArr squared;
    let sumXY = 0; //variable sumXY will hold the multiplication of corresponding X and Y values from xArr and yArr;
    let n = xArr.length; //variable n holds the size of the dataset
    //compute the sums of all of the components that we need in the formulas for ß0, ß1
    //for this use a for loop, that with each increment will move to another element of the arrays yArr, xArr
    for(let i = 0; i < yArr.length; i++){
    sumY = sumY + yArr[i];
    sumX = sumX + xArr[i];
    sumXsquared = sumXsquared + (xArr[i] * xArr[i]);
    sumXY = sumXY + (xArr[i] * yArr[i])
    };
    console.log(`n = ${n}, Σy = ${sumY}, Σx = ${sumX}, Σx^2 = ${sumXsquared}, Σxy = ${sumXY}`);
    //find coefficient ß1 = (n(sum(x*y)) - sum(x)*sum(y)) / (n(sum(x^2)) - sum(x)^2), round to 3 decimals
    let ß1 = ((n * sumXY - sumX*sumY) / (n*sumXsquared - sumX*sumX)).toFixed(3);
    //find coefficient ß0 = (sum(y)*sum(x^2) - sum(x)*sum(x*y)) / (n(sum(x^2)) - sum(x)^2), round to 3 decimals
    let ß0 = ((sumY * sumXsquared - sumX*sumXY) / (n*sumXsquared - sumX*sumX)).toFixed(3);
    //we can express the linear regression formula f(x) = ß0 + ß1*x, if ß1 > 0, don't print '+' to the formula, use string interpolation and ternary operators to reduce the amount of code
    let formula = `f(x) = ß0 + ß1*x = ${ß0} ${ß1 > 0 ? '+' : ''}${ß1}x`;
    return formula;
    }
    
    //2 sample sets that can be used as input, the results can be checked in the respected sources
    const sampleYSet1 = [213, 210, 205, 203, 202, 200, 199, 198, 196, 193];
    const sampleXSet1 = [0.43, 0.64, 0.50, 0.71, 0.71, 0.86, 1.07, 1.07, 1.14, 1.29];
    const sampleXSet2 = [43, 21, 25, 42, 57, 59];
    const sampleYSet2 = [99, 65, 79, 75, 87, 81];
    //function call to calculateLinearRegression with example data sampleYSet1, sampleXSet1;
    console.log(calculateLinearRegression(sampleYSet2, sampleXSet2));
    