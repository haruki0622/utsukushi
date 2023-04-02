const img = [
  "./images/sp/fv-slide/fv-slides-1.jpg",
  "./images/sp/fv-slide/fv-slides-2.jpg",
  "./images/sp/fv-slide/fv-slides-3.jpg",
  "./images/sp/fv-slide/fv-slides-4.jpg",
];
var count = -1;
picChange();
function picChange() {
  count++;
  if (count == img.length) count = 0;
  //画像選択
  changePic.src = img[count];
  //秒数の指定
  setTimeout("picChange()", 4000);
}

const ServiceImg = [
  "./images/service-1.jpg",
  "./images/service-2.jpg",
  "./images/service-3.jpg",
  "./images/service-4.jpg",
];
var count = -1;
picChangeService();
function picChangeService() {
  count++;
  if (count == ServiceImg.length) count = 0;
  //画像選択
  changePicService.src = ServiceImg[count];
  //秒数の指定
  setTimeout("picChangeService()", 4000);
}

$(function () {
  //質問の答えはあらかじめ非表示に
  $(".Faq__ItemAnswer").css("display", "none");

  //質問をクリックした時
  $(".Faq__ItemQues").click(function () {
    //クリックした質問以外の全てのopenを取る
    $(".Faq__ItemQues").not(this).removeClass("open");

    //クリックされた質問以外の答えを閉じる
    $(".Faq__ItemQues").not(this).next().slideUp(300);

    //クリックしたもの(this)にopenクラスを付与
    $(this).toggleClass("open");

    //クリックしたもの(this)の答えを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
});
