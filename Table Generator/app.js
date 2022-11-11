var id = 1000;
const get_id = () => {
  return id++;
}
var no = 1;
//----------------------
let personList = [
  {
    id: get_id(),
    name: "Ferhat",
    lastname: "Özdemir",
    tc: "11009526712",
    tel: "5051341570",
  },
  {
    id: get_id(),
    name: "Ömer Faruk",
    lastname: "Güzelim",
    tc: "53815067690",
    tel: "5436658242",
  },
  {
    id: get_id(),
    name: "Ömer Enes",
    lastname: "Ulutaş",
    tc: "61561074190",
    tel: "5377301506",
  },
  {
    id: get_id(),
    name: "Zeki",
    lastname: "Çiftçi",
    tc: "12345678909",
    tel: "5456301921",
  },
  {
    id: get_id(),
    name: "Atakan",
    lastname: "Kızılyüce",
    tc: "77777777777",
    tel: "5382885134",
  },
];
displayTask();
function displayTask() {
  let personInfo = document.querySelector("#person-info_elements");
  personInfo.innerHTML = "";
  for (let index of personList) {
    let td = `
      <td>${personList.indexOf(index) + 1}</td>
      <td>${index.id}</td>
      <td>${index.name}</td>
      <td>${index.lastname}</td>
      <td>${index.tc}</td>
      <td>${index.tel}</td>
      <td style="padding-left: 0.4rem ;">
      <a href="#" onclick='fixTaskShow(${index.id} , "${index.name}" , "${
      index.lastname
    }" , ${index.tc} , ${
      index.tel
    })'><i class="fa-solid fa-pen-to-square edit" style =" color : black"></i></a></i>
      <a href="#" onclick="deleteForId(${
        index.id
      })" ><i class="fa-solid fa-trash delete" style =" color : black"></i></a></i>
      </td>
    `;
    personInfo.insertAdjacentHTML("beforeend", td);
  }
}

// ekle butonu oluşturma
const btnEkle = document.querySelector("#btnAddNewTask");
btnEkle.addEventListener("click", newTask);
// ekle butonu harekete geçirme
let ad = document.querySelector("#name");
let soyAd = document.querySelector("#lastname");
let tcNo = document.querySelector("#tcNumber");
let telefon = document.querySelector("#phone");

function newTask() {
 for(let index of personList) {
    if(createInput.value == index.id) {
      return alert("Lütfen yeni bir ID oluşturunuz.")
      } 
  }
  if (!createInput.value) {
    alert("Lütfen ID oluşturunuz!");
    return;
  }
  if (ad.value == "") {
    error(ad);
    alert("Bir ad giriniz.");
    return;
  }
  if (soyAd.value === "") {
    error(soyAd);
    alert("Soyadı giriniz.");
    return;
  }
  if (tcNo.value === "") {
    error(tcNo, alert("Soyad giriniz."));
  } else if (tcNo.value.length !== 11) {
    alert("Tc 11 basamaklı olmalıdır.");
    return;
  }
  if (telefon.value === "") {
    error(telefon);
  } else if (telefon.value.length !== 10) {
    alert("Telefon 10 basamaklı olmalıdır.");
  } else {
    personList.push({
      id: createInput.value,
      name: ad.value,
      lastname: soyAd.value,
      tc: tcNo.value,
      tel: telefon.value,
    });
    displayTask();
    ad.value = "";
    soyAd.value = "";
    tcNo.value = "";
    telefon.value = "";
    createInput.value = "";
    ad.classList.remove("border-error");
    soyAd.classList.remove("border-error");
    tcNo.classList.remove("border-error");
    telefon.classList.remove("border-error");
  }

}
// Hepsini Sil
const deleteAllList = document.querySelector("#btnDelete");
deleteAllList.addEventListener("click", deleteAll);
function deleteAll() {
  personList.splice(0, personList.length);
  if(personList.length == 0) {
    id = 1000;
  };
  displayTask();
}
// ID OLUŞTURMA
let createInput = document.querySelector("#createId");
const createId = document.querySelector("#createIdButton");
createId.addEventListener("click", createIdButtonClick);
function createIdButtonClick() {
  createInput.value = get_id();
};
//İnput hata
function error(input) {
  input.classList.add("border-error");
}
//İnput hata silme
function success(input) {
  input.classList.remove("border-error");
}
//Tek tek silme
function deleteForId(id) {
  let deleteId;
  for (let index in personList) {
    if (personList[index].id == id) {
      deleteId = index;
    }
  }
  personList.splice(deleteId, 1);
  displayTask();
}
//düzenleye basınca yukarıya atma
let ad2 = document.querySelector("#name-2");
let soyAd2 = document.querySelector("#lastname-2");
let tcNo2 = document.querySelector("#tcNumber-2");
let telefon2 = document.querySelector("#phone-2");

// düzenleye basınca yukarıya atma fonksiyonu
let editId;
function fixTaskShow(taskId, taskName, taskLastName, taskTc, taskTel) {
  editId = taskId;
  ad2.value = taskName;
  soyAd2.value = taskLastName;
  tcNo2.value = taskTc;
  telefon2.value = taskTel;
}

// yukarıya attıktan sonra aşağıya güncelleme
const btnDuzenle = document.querySelector("#btnDuzenle");
btnDuzenle.addEventListener("click", fixTaskSent);
function fixTaskSent() {
  for (let index of personList) {
    if (index.id == editId) {
      if (ad2.value == "") {
        error(ad2);
      } else {
        index.name = ad2.value;
        success(ad2);
      }
      if (soyAd2.value == "") {
        error(soyAd2);
      } else {
        index.lastname = soyAd2.value;
        success(soyAd2);
      }
      if (tcNo2.value.length !== 11) {
        error(tcNo2);
      } else {
        index.tc = tcNo2.value;
        success(tcNo2);
      }
      if (telefon2.value.length !== 10) {
        error(telefon2);
      } else {
        index.tel = telefon2.value; 
        success(telefon2);
      }
      ad2.value = "";
      soyAd2.value = "";
      tcNo2.value = "";
      telefon2.value = "";
    }
 
  }
  displayTask();
}
//inputta arama
// çağır
function searchTask() {
  let input, filter, table, tr, td, i, txtValue;
  input = document.querySelector("#find-person");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// sil
let deleteInputValue = document.querySelector("#deleteForIdButton");
deleteInputValue.addEventListener("click", deleteInsideInput);
let personList2 = [];
function deleteInsideInput() {
 
  let inputValue = document.querySelector("#find-person");
  for (let index of personList) {
    if (inputValue.value == index.id) {
      personList2.push(index);
      selectedId = index.id;
    }
  }
  personList.splice(personList.indexOf(personList2[0]), 1);
  personList2 = [];
  deleteHTMLRows();
  displayTask();
  inputValue.value = "";
  // console.log(personList2);

}

function deleteHTMLRows() {
  let rows = document.querySelectorAll("tr:not(#x12)");
  for (let i = rows.length - 1; i >= 0; i--) {
    rows[i].remove();
  }
}
