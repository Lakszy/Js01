let cnt = 0;
(function printCount() {
    // if is a block and let have been decalred so the order will be maintained 
  if (cnt === 0) {
    let cnt = 1;
    console.log(cnt);
  }
// outside if the value is still 0
  console.log(cnt);
})();
