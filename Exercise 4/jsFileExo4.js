function changeIt(){
    document.getElementById('b').style.border='2px solid blue';
    document.getElementById('q1').style.backgroundColor="#CAE2F6";
    document.getElementById('q2').style.backgroundColor="#CAE2F6";
    document.getElementById('q3').style.backgroundColor="#CAE2F6";
    document.getElementById('q1').style.border = '1px solid #808080';
    document.getElementById('q2').style.border = '1px solid #808080';
    document.getElementById('q3').style.border = '1px solid #808080';
}

function calculatePrices(){
    document.getElementById("p1").innerHTML = displayPrice1();
    document.getElementById("p2").innerHTML = displayPrice2();
    document.getElementById("p3").innerHTML = displayPrice3();
    document.getElementById("p4").innerHTML = finalTotal();
    return false;
}

function displayPrice1(){
    let quantity = parseInt(document.getElementById("q1").value.trim());
    let text;
    if(isNaN(quantity) || quantity==""){
        window.alert("Error: invalid input! Please enter an integer.");
        return "";
    }
    else{
        let totalCost = quantity * 19.99;
        text = "Basic Web Programming (Quantity = " + quantity + " ): $<span style='font-weight: normal;'>" + totalCost + "</span>";
        return text;
    }
}

function displayPrice2(){
    let quantity = parseInt(document.getElementById("q2").value.trim());
    let text;
    if(isNaN(quantity) || quantity==""){
        window.alert("Error: invalid input! Please enter an integer.");
        return "";
    }
    else{
        let totalCost = quantity * 86.00;
        text = "Intro to PHP (Quantity = " + quantity + " ): $<span style='font-weight: normal;'>" + totalCost + "</span>";
        return text;
    }
}

function displayPrice3(){
    let quantity = parseInt(document.getElementById("q3").value.trim());
    let text;
    if(isNaN(quantity) || quantity==""){
        window.alert("Error: invalid input! Please enter an integer.");
        return "";
    }
    else{
        let totalCost = quantity * 55.00;
        text = "Advanced JQuery (Quantity = " + quantity + " ): $<span style='font-weight: normal;'>" + totalCost + "</span>";
        return text;
    }
}

function finalTotal(){
    let quantity1 = parseInt(document.getElementById("q1").value.trim());
    let quantity2 = parseInt(document.getElementById("q2").value.trim());
    let quantity3 = parseInt(document.getElementById("q3").value.trim());

    // Check if any of the quantities are NaN or empty
    if (isNaN(quantity1) || isNaN(quantity2) || isNaN(quantity3)) {
        return "Final total: Error calculating total";
    }

    let total1 = quantity1 * 19.99;
    let total2 = quantity2 * 86.00;
    let total3 = quantity3 * 55.00;

    let totalSum = total1 + total2 + total3;
    let formattedTotalSum = totalSum.toFixed(2); 

    return "Final total: $<span style='font-weight: normal;'>" + formattedTotalSum + "</span>";
}