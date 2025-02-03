const students = [
  {
    fullName: "Ahmet Yılmaz",
    phone: "05301234567",
    vize: 75,
    final: 80,
  },
  {
    fullName: "Ayşe Demir",
    phone: "05319876543",
    vize: 88,
    final: 92,
  },
  {
    fullName: "Mehmet Kaya",
    phone: "05321234567",
    vize: 60,
    final: 70,
  },
  {
    fullName: "Fatma Şahin",
    phone: "05332345678",
    vize: 95,
    final: 85,
  },
  {
    fullName: "Ali Çelik",
    phone: "05343456789",
    vize: 50,
    final: 65,
  },
  {
    fullName: "Zeynep Öz",
    phone: "05354567890",
    vize: 78,
    final: 82,
  },
  {
    fullName: "Emre Koç",
    phone: "05365678901",
    vize: 67,
    final: 73,
  },
  {
    fullName: "Hülya Aydın",
    phone: "05376789012",
    vize: 85,
    final: 88,
  },
  {
    fullName: "Berk Sarı",
    phone: "05387890123",
    vize: 92,
    final: 96,
  },
  {
    fullName: "Deniz Arslan",
    phone: "05398901234",
    vize: 58,
    final: 62,
  },
  {
    fullName: "Ece Tan",
    phone: "05401234567",
    vize: 77,
    final: 80,
  },
  {
    fullName: "Ozan Kurt",
    phone: "05412345678",
    vize: 65,
    final: 70,
  },
  {
    fullName: "Selin Ak",
    phone: "05423456789",
    vize: 81,
    final: 84,
  },
  {
    fullName: "Cem Özkan",
    phone: "05434567890",
    vize: 90,
    final: 94,
  },
  {
    fullName: "Nisa Gül",
    phone: "05445678901",
    vize: 72,
    final: 76,
  },
];

function calculateGrade(vize, final) {
  return vize * 0.4 + final * 0.6;
}

function getGrade(grade) {
  if (grade >= 90) {
    return "AA";
  } else if (grade >= 85) {
    return "BA";
  } else if (grade >= 80) {
    return "BB";
  } else if (grade >= 75) {
    return "CB";
  } else if (grade >= 70) {
    return "CC";
  } else if (grade >= 65) {
    return "DC";
  } else if (grade >= 60) {
    return "DD";
  } else {
    return "FF";
  }
}

function getStudentInfo(student) {
  const grade = calculateGrade(student.vize, student.final);
  const letterGrade = getGrade(grade);
  return `${student.fullName} - ${student.phone} - ${grade} - ${letterGrade}`;
}



for (let i in students) {
  
  if (i == 0) {
    console.log("Full Name - Phone - Grade - Letter Grade");
  }
  console.log(getStudentInfo(students[i]));
}
