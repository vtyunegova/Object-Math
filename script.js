function areaOfTriangle(obj) {
    var a = 1*obj.st1.value;
    var b = 1*obj.st2.value;
    var c = 1*obj.st3.value;
    var p = (a+b+c)/2;
    var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    obj.res.value = s.toFixed(2); 
}
areaOfTriangle(res);

function middle(obj1) {
    var side1 = 1*obj1.side1.value;
    var side2 = 1*obj1.side2.value;
    var side3 = 1*obj1.side3.value;
    let maxSide = Math.max(side1, side2, side3);
    let minSide = Math.min(side1, side2, side3);
    let middleSide = side1 + side2 + side3 - maxSide - minSide;
    obj1.result.value = middleSide;
}
middle(result);
    
function equation(obj2) {
    var a = 1*obj2.coefficient1.value;
    var b = 1*obj2.coefficient2.value;
    var c = 1*obj2.coefficient3.value;
        
    var discriminant = Math.pow(b, 2) - 4 * a * c;
        
    if (discriminant > 0) {
    var x1 = (-b + Math.sqrt(discriminant)) / (2*a);
    var x2 = (-b - Math.sqrt(discriminant)) / (2*a);
    obj2.resultat.value = "Уравнение имеет два корня: x1 = " + x1.toFixed(2) + ", x2 = " + x2.toFixed(2);
    } 
    else if (discriminant === 0) {
    var x = -b / (2*a);
    obj2.resultat.value = "Уравнение имеет один корень: x = " + x;
    } 
    else {
    obj2.resultat.value = "Уравнение не имеет действительных корней";
    }
}
equation(resultat);