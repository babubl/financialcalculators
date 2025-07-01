function calculateFutureValue() {
  const currentValue = parseFloat(document.getElementById("fv-current").value);
  const years = parseFloat(document.getElementById("fv-years").value);
  const inflationRate = parseFloat(document.getElementById("fv-inflation").value) / 100;

  const futureValue = currentValue * Math.pow(1 + inflationRate, years);
  document.getElementById("fv-result").innerText = futureValue.toFixed(2);
}
