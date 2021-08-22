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

// cek empty
function isEmpty(str) {
    return (!str || str.length === 0 );
}

// functin convert celcius to celcius
function celciusToCelcius(suhu){
    return suhu;
}

// function convert suhu celcius ke reamur
function celciusToReamur(suhu){

    const result = 4 * suhu / 5;
    return result;

}

// function convert suhu celcius to farenheit
function celciusToFarenheit(suhu){
    const result = (1.8 * suhu) + 32
    return result;
    console.log("Celcius to farenheit : " +result)
}

// function convert suhu farenheit ke reamur
function farenheitToReamur(suhu){
    const hasil = 4 * (suhu-32) / 9;
    return hasil;
}

// function convert suhu farenheit ke celcius
function farenheitToCelcius(suhu){

    const hasil = 5 * (suhu - 32) / 9;
    return hasil;

}

// function convert suhu reamur ke celcius
function reamurToCelecius(suhu){

    const hasil = 5 * suhu / 4;
    return hasil;
}

function reamurToFarenheit(suhu){

    const hasil = (2.25 * suhu) + 32;
    return hasil;
    
}

// function eksekusi convert suhu
function convertSuhu(){

    // manipulasi DOM
    const selectFromId = document.getElementById("from").value;
    const selectToId = document.getElementById("to").value;
    const angkaSuhu = document.getElementById("angka-suhu").value;

    if(selectFromId == "cel" && selectToId == "cel"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = ""
        } else {
            document.getElementById("hasil-converter").value = angkaSuhu;
        }

    } else if(selectFromId == "cel" && selectToId == "rea"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        } 
 
        const hasil = celciusToReamur(parseInt(angkaSuhu));
        if(!isNaN(hasil)){
            document.getElementById("hasil-converter").value = hasil; 
        }

    } else if(selectFromId === "cel" && selectToId === "far"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        }

        const hasil = celciusToFarenheit(parseInt(angkaSuhu));
        if(!isNaN(hasil)){
            document.getElementById("hasil-converter").value = hasil;
        }

    } else if(selectFromId === "far" && selectToId === "cel"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        }

        const hasil = farenheitToCelcius(parseInt(angkaSuhu));
        if(!isNaN(hasil)){
            document.getElementById("hasil-converter").value = hasil;
        }

    } else if(selectFromId === "far" && selectToId === "far"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        } else {
            document.getElementById("hasil-converter").value = angkaSuhu;
        }

    } else if(selectFromId === "far" && selectToId === "rea") {

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        }

        const hasil = farenheitToReamur(parseInt(angkaSuhu));
        if(!isNaN(hasil)){
            document.getElementById("hasil-converter").value = hasil;
        }

    } else if(selectFromId === "rea" && selectToId === "cel"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        }

        const hasil = reamurToCelecius(parseInt(angkaSuhu));
        if(!isNaN(hasil)){
            document.getElementById("hasil-converter").value = hasil;
        }

    } else if (selectFromId === "rea" && selectToId === "far"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        }

        const hasil = reamurToFarenheit(parseInt(angkaSuhu));
        if(!isNaN(hasil)){
            document.getElementById("hasil-converter").value = hasil;
        }

    }  else if (selectFromId == "rea" && selectToId == "rea"){

        if(isEmpty(angkaSuhu)){
            document.getElementById("hasil-converter").value = "";
        } else {
            document.getElementById("hasil-converter").value = angkaSuhu;
        }

    }

   
}

// function select box reset
function reset(){
    
    // DOM
    const angkaSuhu = document.getElementById("angka-suhu").value;

    if(!isEmpty(angkaSuhu)){
        document.getElementById("hasil-converter").value = "";
        document.getElementById("angka-suhu").value = "";
    }

}



// function ganti background
function changeBackground(){
    // Manipulasi DOM
    const kodeHexa = document.getElementById("change-background").value;
    if(kodeHexa !== ""){
        document.body.style.background = kodeHexa;
    } else {
        alert("Kamu belum set warna colornya")
    }
}


generateTanggal();
window.setTimeout("generateWaktu()", 1000);
