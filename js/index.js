// function generate tanggal
function generateTanggal(){

    let today = ""

    const date = new Date();
    const tanggal = date.getDate();
    const bulan = date.getMonth();
    const tahun = date.getFullYear();

    today = "Tanggal " +tanggal+ " Bulan " +bulan+ " Tahun " +tahun;

    // DOM 
    const tanggalId = document.getElementById("tanggal");
    tanggalId.append(today);     
}




// function generate waktu
function generateWaktu(){
    const date = new Date();
    setTimeout("generateWaktu()", 1000)
    
    // DOM
    const jamId = document.getElementById("jam");
    const menitId = document.getElementById("menit");
    const detikId = document.getElementById("detik");

    jamId.innerHTML = date.getHours();
    menitId.innerHTML = date.getMinutes();
    detikId.innerHTML = date.getSeconds();

}

generateTanggal();
window.setTimeout("generateWaktu()", 1000);