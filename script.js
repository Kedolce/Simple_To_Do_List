const inputText = document.querySelector("#inputCatatan");
const tombolTambah = document.querySelector("#tombolTambah");
const daftarTugas = document.querySelector("#daftarCatatan");
const inputHapus = document.querySelector("#inputDelete");
const tombolHapus = document.querySelector("#deleteButton");

let daftarData = [];

function tambahTask() {
  const isiCatatan = inputText.value;

  if (isiCatatan === "") {
    alert("Fill something please...");
    return;
  }

  daftarData.push(isiCatatan);

  const listBaru = document.createElement("li");
  listBaru.innerText = isiCatatan;
  daftarTugas.appendChild(listBaru);

  localStorage.setItem("semuaTugas", JSON.stringify(daftarData));

  inputText.value = "";
};

tombolTambah.addEventListener("click", tambahTask);
inputText.addEventListener("keypress", function (event){

    if(event.key === "Enter"){
      tambahTask();
    }
  });

function hapusTask() {
    const inputNomorDel = parseInt(inputHapus.value);
    const daftarLi = daftarTugas.children;

    if(inputNomorDel > 0 && inputNomorDel <= daftarLi.length){
        daftarLi[inputNomorDel - 1].remove();
        inputHapus.value = "";
        return;
    }
    else{
        alert("Nomor tidak valid");
        return;
    }
  }

  tombolHapus.addEventListener("click", hapusTask);
  inputHapus.addEventListener("keypress", function (event){

    if(event.key === "Enter"){
      hapusTask();
    }
  });


  const listSemuaData = localStorage.getItem("semuaTugas");

  if(listSemuaData){
    const listLama = document.createElement("li");
    listLama.innerText = listSemuaData;

    daftarTugas.appendChild(listLama);
  }