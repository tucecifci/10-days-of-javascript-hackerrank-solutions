function getDayName(dateString) {
  let dayName; //haftanın gün adını tutmak için kullanılacak
  // Write your code here
  const days = [ 
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dateString); //dateStringle bize bir tarih veriliyor.Örneğin 12-07-2021 gibi, Date nesnesi bunu Date(12-07-2021)e döndürür.
  const dayIndex = date.getDay(); //getDay() metodu, Date nesnesinden haftanın gününü 0 ile 6 arasında bir sayı olarak döndürür:
  dayName = days[dayIndex]; //dayIndex ile days dizisine erişiyoruz:
  //Örneğin, dayIndex = 3 ise days[3] = "Wednesday" olur.
  //Gün adı, dayName değişkenine atanır.
  return dayName;
}


