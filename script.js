let cekNilai = (nilai) => {
    if (nilai >= 80) {
        return "A"
    } else if (nilai < 80 && nilai >= 70) {
        return "AB"
    } else if (nilai < 70 && nilai >= 60) {
        return "B"
    } else if (nilai < 60 && nilai >= 50) {
        return "BC"
    } else if (nilai < 50 && nilai >= 40) {
        return "C"
    } else if (nilai < 40 && nilai >= 10) {
        return "D"
    } else {
        return "E"
    }
}

let mahasiswa = [
    {
        nama: "Boy",
        nim: "123",
        nilai: 60
    }, 
    {
        nama: "Aldi",
        nim: "124",
        nilai: 70
    }, 
    {
        nama: "Ade",
        nim: "125",
        nilai: 40
    },
    {
        nama: "Ari",
        nim: "126",
        nilai: 76
    }, 
    {
        nama: "Asep",
        nim: "127",
        nilai: 50
    }
]

let table = document.getElementById("tbody")

mahasiswa.forEach((item, n) => {
    let row = table.insertRow()
    let cell0 = row.insertCell(0)
    let cell1 = row.insertCell(1)
    let cell2 = row.insertCell(2)
    let cell3 = row.insertCell(3)
    let cell4 = row.insertCell(4)

    cell0.innerHTML = n + 1
    cell1.innerHTML = item.nama
    cell2.innerHTML = item.nim
    cell3.innerHTML = item.nilai
    cell4.innerHTML = cekNilai(item.nilai)
})


let tambahData = () => {
    let data = {
        nama: document.getElementById("nama").value,
        nim: document.getElementById("nim").value,
        nilai: document.getElementById("nilai").value
    }

    if (data.nama == "" || data.nim == "" || data.nilai == "") {
        alert("Data tidak boleh kosong")
    } else {
        mahasiswa.push(data)
        tampilData()
        document.getElementById("nama").value = ""
        document.getElementById("nim").value = ""
        document.getElementById("nilai").value = ""
    }

}

let tampilData = () => {
    table.innerHTML = ""
    mahasiswa.forEach((item, n) => {
        let row = table.insertRow()
        let cell0 = row.insertCell(0)
        let cell1 = row.insertCell(1)
        let cell2 = row.insertCell(2)
        let cell3 = row.insertCell(3)
        let cell4 = row.insertCell(4)

        cell0.innerHTML = n + 1
        cell1.innerHTML = item.nama
        cell2.innerHTML = item.nim
        cell3.innerHTML = item.nilai
        cell4.innerHTML = cekNilai(item.nilai)
    })
}
