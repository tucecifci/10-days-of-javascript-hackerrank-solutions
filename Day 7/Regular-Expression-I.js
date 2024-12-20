function regexVar() {
  const re = /^([aeiou]).*\1$/;

  return re;
}

// ^ → Dizgenin başını temsil eder.
// $ → Dizgenin sonunu temsil eder.
// () → Grup oluşturur (başlangıç ve bitiş harflerinin aynı olduğunu kontrol etmek için).
// \\1 → İlk grup ile eşleşen karakteri ifade eder.
// ([aeiou]) → İlk karakter bir ünlü harf olmalı.
// .* → Ortadaki herhangi bir karakter dizisi (0 veya daha fazla karakter).
// \\1 → İlk gruptaki (başlangıçtaki) ünlü harf ile aynı olmalı.
