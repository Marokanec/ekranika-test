function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

  function calc(){
    var coast = Number(document.getElementById("coast").value);
    var installment = Number(document.getElementById("installment").value);
    var firstPayment = Number(document.getElementById("first-payment").value);
    var monthProcent = 8.4 / 100 / 12;
    var result = coast+ (coast * (installment * monthProcent));
    var result2 = result - coast;
    result = result.toFixed();
    result2 = result2.toFixed();

    document.getElementById("result").innerHTML = `${result} ₽`;
    document.getElementById("result2").innerHTML = `${installment} месяца — ${result2} ₽`;
    document.getElementById("result3").innerHTML = `Первый платеж — ${firstPayment}% от стоимости экрана.<br> 
    Остаток можно погащать ежемесячно до трех лет`;
    }