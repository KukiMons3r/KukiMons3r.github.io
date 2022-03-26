function Change(id) {
  var checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((item) => {
    if (item.id != id) {
      document.getElementById(item.id).checked = false;
    }
    if (item.id == id) {
      document.getElementById(item.id).checked = true;
    }
  });
}
