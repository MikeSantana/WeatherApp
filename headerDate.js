document.getElementById("current-date").innerHTML = formatDate();

function formatDate (){
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();

    const monthName = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    month = monthName[month];
    return `${day} de ${month} de ${year}`;
}










