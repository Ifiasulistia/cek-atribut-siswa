function simpanAbsensi() {
    const nama = document.getElementById("nama").value;

    if (nama.trim() === "") {
        alert("Nama siswa tidak boleh kosong!");
        return;
    }

    // Ambil atribut
    const atribut = [];
    if (document.getElementById("seragam").checked) atribut.push("Seragam");
    if (document.getElementById("kartu").checked) atribut.push("Kartu Pelajar");
    if (document.getElementById("ikat").checked) atribut.push("Ikat Pinggang");
    if (document.getElementById("sepatu").checked) atribut.push("Sepatu Hitam");

    const waktu = new Date().toLocaleString("id-ID");

    const data = { nama, atribut, waktu };

    // Simpan ke localStorage
    let absensi = JSON.parse(localStorage.getItem("absensiSiswa")) || [];
    absensi.push(data);
    localStorage.setItem("absensiSiswa", JSON.stringify(absensi));

    alert("Absensi berhasil disimpan!");

    tampilkanTabel();
}

function tampilkanTabel() {
    let absensi = JSON.parse(localStorage.getItem("absensiSiswa")) || [];
    const tbody = document.querySelector("#tabelAbsensi tbody");
    tbody.innerHTML = "";

    absensi.forEach((item, index) => {
        const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.atribut.join(", ") || "<i>Tidak lengkap</i>"}</td>
                <td>${item.waktu}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

tampilkanTabel();
