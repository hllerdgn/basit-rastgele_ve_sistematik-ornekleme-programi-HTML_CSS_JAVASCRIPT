function generateRandomSample() {
  var xmin = parseInt(document.getElementById("xmin").value);
  var xmax = parseInt(document.getElementById("xmax").value);
  var n = parseInt(document.getElementById("rn").value);

  if (xmin >= xmax) {
    alert("xmin değeri xmax'den küçük olmalıdır.");
    return;
  }

  var resultContainer = document.getElementById("randomResult");
  resultContainer.innerHTML = "";

  var randomSample = [];

  // availableNumbers dizisine aralıktaki tüm sayıları ekleyelim
  var availableNumbers = [];
  for (var i = xmin; i <= xmax; i++) {
    availableNumbers.push(i);
  }

  // availableNumbers dizisinden rastgele elemanlar seçerek örneklem oluşturalım
  for (var j = 0; j < n; j++) {
    var randomIndex = Math.floor(Math.random() * availableNumbers.length);
    randomSample.push(availableNumbers[randomIndex]);
    availableNumbers.splice(randomIndex, 1); // Seçilen elemanı diziden çıkaralım
  }

  // Rastgele örnekleme listesini küçükten büyüğe doğru sıralayalım
  randomSample.sort(function (a, b) {
    return a - b;
  });

  resultContainer.innerHTML =
    "<p>Basit Rastgele Örneklem :</p><p>" + randomSample.join(", ") + "</p>";
}

function generateSystematicSample() {
  var N = parseInt(document.getElementById("N").value);
  var n = parseInt(document.getElementById("sn").value);

  var resultContainer = document.getElementById("systematicResult");
  resultContainer.innerHTML = "";

  if (N <= 0 || n <= 0 || n > N) {
    alert("Lütfen geçerli N ve n sayıları giriniz.");
    return;
  }

  var systematicSample = [];

  // Sistematik örnekleme işlemi
  var interval = Math.floor(N / n);
  var start = Math.floor(Math.random() * N); // Başlangıç noktasını rastgele belirleyelim
  for (var i = start, count = 0; count < n; i = (i + interval) % N, count++) {
    systematicSample.push(i);
  }

  resultContainer.innerHTML =
    "<p>sistematik Örneklem:</p><p>" + systematicSample.join(", ") + "</p>";
}
