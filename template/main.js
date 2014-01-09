









/**  Lesson 1
// First Step
enchant();                  // enchant ライブラリの呼び出しメソッド
window.onload=function(){}; // ブラウザWindowの起動イベントにfunctionオブジェクトを代入


// Second Step
enchant();
window.onload = function(){

  game = new Core(320,320);        // gameインスタンスをenchantのCoreオブジェクトから生成
  game.onload = function(){}; // gameインスタンスの起動イベントにfunctionオブジェクトを代入
  game.start();             // gameインスタンスのプログラムを開始

};

// Third Step
enchant();
window.onload = function(){

  game = new Core(320,320);
  var stage = game.rootScene;     // ステージ変数に初期値としてgameインスタンスのrootSceneを代入
  stage.backgroundColor = "blue"; // ステージの背景色を設定
  game.onload = function(){};
  game.start();

};

// リファクタリング(マジックナンバーを排除)
enchant();
gsettings = {                  //ゲームウィンドウの幅，高さ，fpsを定義
    width:320
   ,height:320
   ,fps:15
};

window.onload = function(){

  game = new Core(gsettings.width,gsettings.height);
  var stage = game.rootScene;     
  stage.backgroundColor = "blue"; 
  game.onload=function(){};
  game.start();

};

*/
