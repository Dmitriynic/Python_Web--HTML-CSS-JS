const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton() {
  handleData(dataURL);
}

function handleData(data) {
  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speech = $("input[name=speech]").val();
  let text = "Жили-были " + var1 + " да " + var2 + ", Была у них " + var3 + ", Снесла " + var3 + " " + var4 + ", не простое - золотое, - " + var1 + " бил, бил - не разбил, - " + var2 + " била, била - не разбила, " + var5 + " бежала, " + var6 + " задела, " + var4 + " упало и разбилось. " + var1 + " плачет, " + var2 + " плачет, а " + var3 + " кудахчет: " + speech;
	$(".result").html(text);
}

function init() {
	$(".btn2").click(handleButton);
  $(".btn1").click(function() {
    text = "Жили-были {var1} да {var2}, Была у них {var3}, Снесла {var3} {var4}, не простое - золотое, - {var1} бил, бил - не разбил, - {var2} била, била - не разбила, {var5} бежала, {var6} задела, {var4} упало и разбилось. {var1} плачет, {var2} плачет, а {var3} кудахчет: {speech}"
    $(".result").html(text)
  });
}

$(document).ready(init);