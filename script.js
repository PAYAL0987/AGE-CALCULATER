function calculateAge() {
    let birthDate = new Date(document.getElementById("birthDate").value);
    let today = new Date();
    
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0) {
        years--;
        months += 12;
    }

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    document.getElementById("years").innerHTML = years + " Years";
    document.getElementById("months").innerHTML = months + " Months";
    document.getElementById("days").innerHTML = days + " Days";
}