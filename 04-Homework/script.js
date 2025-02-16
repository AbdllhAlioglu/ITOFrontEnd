document
  .getElementById("hastaKayitForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Verileri al
    const hasta = {
      ad: document.getElementById("ad").value,
      soyad: document.getElementById("soyad").value,
      tc: document.getElementById("tc").value,
      dogumTarihi: document.getElementById("dogumTarihi").value,
      telefon: document.getElementById("telefon").value,
      email: document.getElementById("email").value,
    };

    // Mevcut hastaları localStorage'dan al
    let hastalar = JSON.parse(localStorage.getItem("hastalar")) || [];

    // Yeni hastayı ekle
    hastalar.push(hasta);

    // localStorage'a kaydet
    localStorage.setItem("hastalar", JSON.stringify(hastalar));

    // Formu temizle
    this.reset();

    // Kullanıcıya bilgi ver
    alert("Hasta kaydı başarıyla oluşturuldu!");
  });
