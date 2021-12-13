const check = () => {
    let val = document.getElementById("value").value;
    let check = document.getElementById("check").value;

    let matchesCount = val.split(check).length - 1;
    matchesCount = matchesCount <= 0 ? 0 : matchesCount;
    document.getElementById("count").innerHTML = "Jumlah dalam kalimat ada :" + matchesCount;
};
