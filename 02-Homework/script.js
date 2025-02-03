document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("membershipForm");
  const clearButton = document.getElementById("clearStorage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      country: document.getElementById("country").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
    };

    // Form doğrulama
    if (!validateForm(formData)) {
      return;
    }

    // LocalStorage'a kaydet
    saveToLocalStorage(formData);

    alert("Form başarıyla kaydedildi!");
    form.reset();
  });

  clearButton.addEventListener("click", function () {
    if (confirm("Tüm kayıtları silmek istediğinizden emin misiniz?")) {
      localStorage.removeItem("forms");

      alert("Tüm kayıtlar başarıyla silindi!");
    }
  });

  function validateForm(data) {
    // E-posta kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Geçerli bir e-posta adresi giriniz.");
      return false;
    }

    // Telefon numarası kontrolü
    const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneRegex.test(data.phone)) {
      alert("Geçerli bir telefon numarası giriniz. Format: (000) 000-0000");
      return false;
    }

    return true;
  }

  function saveToLocalStorage(data) {
    let savedForms = JSON.parse(localStorage.getItem("forms") || "[]");
    savedForms.push({
      ...data,
      id: Date.now(),
      submitDate: new Date().toISOString(),
    });
    localStorage.setItem("forms", JSON.stringify(savedForms));
  }
});
