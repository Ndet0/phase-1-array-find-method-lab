function superbowlWin(record) {
  const win = record.find(game => game.result === "W");
  return win ? win.year : undefined;
}

//console.log(superbowlWin([
  //{ year: "2018", result: "N/A" },
  //{ year: "2017", result: "N/A" },
  //{ year: "2016", result: "N/A" },
  //{ year: "2015", result: "W" },
  //{ year: "2014", result: "N/A" }
//])); // Output: "2015"

//console.log(superbowlWin([
  //{ year: "2018", result: "N/A" },
  //{ year: "2017", result: "N/A" },
  //{ year: "2016", result: "N/A" },
  //{ year: "2015", result: "N/A" },
  //{ year: "2014", result: "N/A" }
//])); // Output: undefined   