const fakultas =["teknik", "ekonomi", "budaya", "politik","hukum","kedokteran"];
const fungsiAsyncAwait = async () => {
    await mainFunction();
    await keterangan();
}
const keterangan=()=>{
    console.log("==Universitas Tertutup==");
}
const mainFunction= () => {
    var valueNama = document.getElementById("nama").value; 
    var valueFakultas = document.getElementById("fakultas").value;
    (fakultas.indexOf(valueFakultas) > -1)?console.log(valueNama+" terdaftar pada fakultas "+valueFakultas+", silahkan hubungi fakultas terkait"):console.log(valueNama+" tidak terdaftar pada fakultas di kampus ini");
  }

  function eraseText() {
    document.getElementById("nama").value = "";
    document.getElementById("fakultas").value = "";
   }