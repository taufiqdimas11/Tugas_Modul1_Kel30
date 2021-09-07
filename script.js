const jurusan =["teknik", "ekonomi", "budaya", "politik","hukum","kedokteran"];
const fungsiAsyncAwait = async () => {
    await mainFunction();
    await keterangan();
}
const keterangan=()=>{
    console.log("==Universitas Tertutup==");
}
const mainFunction= () => {
    var valueNama = document.getElementById("nama").value; 
    var valueJurusan = document.getElementById("jurusan").value;
    (jurusan.indexOf(valueJurusan) > -1)?console.log(valueNama+" terdaftar pada jurusan "+valueJurusan+", silahkan hubungi fakultas terkait"):console.log(valueNama+" tidak terdaftar pada jurusan di kampus ini");
  }

  function eraseText() {
    document.getElementById("nama").value = "";
    document.getElementById("jurusan").value = "";
   }