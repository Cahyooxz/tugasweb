        function menghitungGaji(employeeName, nip, menikah, jumlahAnak) {
            const gajiPokok = 3500000;
            const tunjanganMenikah = menikah ? 500000 : 0;
            const tunjanganAnak = menikah ? 500000 * jumlahAnak : 0;

            const totalTunjangan = gajiPokok + tunjanganMenikah + tunjanganAnak;

            const nilaiPajak = menikah ? 0.05 : 0;
            const pajak = totalTunjangan * nilaiPajak;

            const gajiBersih = totalTunjangan - pajak;

            return {
                employeeName,
                nip,
                menikah,
                jumlahAnak,
                gajiBersih,
            };
        }

        function toggleJumlahAnak() {
            const statusMenikah = document.getElementById("statusMenikah").value === "true";
            const jumlahAnakContainer = document.getElementById("jumlahAnakContainer");

            // Menampilkan atau menyembunyikan input jumlah anak berdasarkan status menikah
            jumlahAnakContainer.style.display = statusMenikah ? "block" : "none";
        }

        function hitungGaji() {
            const employeeName = document.getElementById("employeeName").value;
            const nip = document.getElementById("nip").value;
            const statusMenikah = document.getElementById("statusMenikah").value === "true";
            const jumlahAnakContainer = document.getElementById("jumlahAnakContainer");
            const jumlahAnak = statusMenikah ? parseInt(document.getElementById("jumlahAnak").value) : 0;

            const hasilGaji = menghitungGaji(employeeName, nip, statusMenikah, jumlahAnak);

            // Menambahkan baris baru ke tabel
            const table = document.getElementById("hasilGajiTable");
            const newRow = table.insertRow(table.rows.length);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);

            // Mengisi data ke dalam sel-sel tabel
            cell1.innerHTML = hasilGaji.employeeName;
            cell2.innerHTML = hasilGaji.nip;
            cell3.innerHTML = hasilGaji.menikah ? "Sudah Menikah" : "Single";
            cell4.innerHTML = hasilGaji.jumlahAnak;
            cell5.innerHTML = hasilGaji.gajiBersih;
        }