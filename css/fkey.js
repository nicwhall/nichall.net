btnLeft = 5;
parentElmnt = "";
fKeyBtns = AXES.Layout.AutoGUI._fKeyButtons;
for (let btn of fKeyBtns) {
  if (
    parentElmnt == btn.extension._button.parentElement.id ||
    parentElmnt == ""
  ) {
    parentElmnt = btn.extension._button.parentElement.id;
    format(btn);
  } else {
    parentElmnt = btn.extension._button.parentElement.id;
    btnLeft = 5;
    format(btn);
  }
}

function format(btn) {
  console.log(btn);
}
