$(document).ready(() => {
  $("#calculate").click(async () => {
    let x = parseFloat($("#valueX").val());
    let x3 = await window.CubicEquation.calculateX3(x);
    let x2 = await window.CubicEquation.calculate4X2(x);
    let x1 = await window.CubicEquation.calculate2X(x);

    let result = x3 + x2 + x1 + 8;
    $("#result").html(`The result for x=${x} is: ${result.toFixed(2)}`);
  });
});
