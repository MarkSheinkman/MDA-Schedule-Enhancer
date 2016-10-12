$(()=>{
  var dayHebToNum = {
    "א": 1, 
    "ב": 2, 
    "ג": 3, 
    "ד": 4, 
    "ה": 5, 
    "ו": 6, 
    "ש": 7, 
  }
  var slotAvailableText = "פנוי";

  function getRowDay(row){  
    return dayHebToNum[$(row).find("td:not([class])").slice(1,2).text()];
  }
  
  // mark weekends
  $("tr[data-rownum]")
    .filter((rowi,row) => [7].includes(getRowDay(row)))
    .css("border-bottom","3px solid black");

  // mark available slots
  $("tr[data-rownum]>td")
    .filter((i,d) => d.innerText == slotAvailableText)
    .css("font-weight","bold");

  // seperate stations
  $("tr[data-rownum]>td.schedule-slot-1, tr[data-rownum]>td.schedule-volunteerDriver")
    .css("border-right","2px dashed lightgray");

  // mark days with selected shifts
  $("tr[data-rownum]")
    .filter((i,tr) => $(tr).find("td.schedule-me:not(.schedule-point-events)").length > 0 )
    .css("background-color", "lightyellow");

});