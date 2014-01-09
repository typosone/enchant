enchant();
gsettings = {
  width:320,height:320,fps:15
};

window.onload=function(){

  game = new Core();
  var stage = game.rootScene;
  stage.backgroundColor = "yellow";

  game.onload = function(){

    var sprite1 = new Sprite(gsettings.width,32);
    sprite1.backgroundColor = "#ff0000";    
    stage.addChild(sprite1);

    var label1 = new Label();
    label1.color = "white";
    label1.font = "bold 16pt sans-serif";
    label1.text = "Hello World!!";
    label1.textAlign = "center";
    stage.addChild(label1);

    var sprite2 = new Sprite(150,150);
    sprite2.backgroundColor = "rgb(0,255,0)";
    sprite2.x = 50;
    sprite2.y = 50;
    stage.addChild(sprite2);

    var sprite3 = new Sprite(150,150);
    sprite3.backgroundColor = "rgba(0,0,255,0.7)";
    sprite3.x = 130;
    sprite3.y = 130;
    stage.addChild(sprite3);

    var label2 = new Label();
    label2.text = "this is object sample";
    label2.scaleX = 2;
    label2.scaleY = 2; 
    label2.textAlign = "center";
    label2.rotation = -15;
    label2.y = (gsettings.height - label2.height) / 2; 
    stage.addChild(label2);
  };

  game.start();

};


/**
// enchant.Sprite  http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Sprite.html
@extends enchant.Entity -> enchant.Node

    var sprite1 = new Sprite(gsettings.width,32); //スプライトオブジェクトを画面幅，16pxの高さで生成 
    sprite1.backgroundColor = "#ff0000";          //背景色を設定 #ff0000 -> 赤
    stage.addChild(sprite1);                      //ステージに追加

// enchant.Label   http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Label.html
@extends enchant.Entity -> enchant.Node

    var label1 = new Label();              //ラベルオブジェクトの生成  
    label1.color = "white";                //色を設定(CSSのcolor設定と同じ)
    label1.font = "bold 16pt sans-serif";  //フォントを設定(CSSのフォント設定と同じ)
    label1.text = "Hello World!!";         //テキストを設定
    label1.textAlign = "center";           //テキストの位置(left|center|right)
    stage.addChild(label1);                //ステージに追加

enchant.Node http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Node.html
enchant.Entity http://wise9.github.io/enchant.js/doc/core/ja/symbols/enchant.Entity.html

// Node Field(主要なもの)
obj.x = x座標;              // x座標の位置を設定
obj.y = y座標;              // y座標の位置を設定
// Entity Field(主要なもの)
obj.backgroundColor = "色"; //背景色("色名" | "#ffffff" | rgb(255,255,255) | rgba(255,255,255,0.7))
obj.height = "高さ";        //高さを設定
obj.opacity = "透過率";     //透明度を設定(0.0 - 1.0)     
obj.rotation = "角度";      //傾きを設定(+-360)
obj.scaleX = "倍率";        //x方向の拡大率
obj.scaleY = "倍率";        //y方向の拡大率
obj.width = "幅";

    var sprite2 = new Sprite(150,150);        //スプライトオブジェクトの生成，幅150px，高さ150px
    sprite2.backgroundColor = "rgb(0,255,0)"; //背景色の設定
    sprite2.x = 50;                           //x座標の50の位置へ
    sprite2.y = 50;                           //y座標の50の位置へ 
    stage.addChild(sprite2);                  //ステージに追加

    var sprite3 = new Sprite(150,150);
    sprite3.backgroundColor = "rgba(0,0,255,0.7)"; //色設定　透過率設定
    sprite3.x = 130;
    sprite3.y = 130;
    stage.addChild(sprite3);

    var label2 = new Label("this is object sample");   //ラベルの生成とテキストの設定を同時に行う
    label2.scaleX = 2;                                 //横方向の拡大率を2倍に
    label2.scaleY = 2;                                 //縦方向の拡大率を2倍に
    label2.textAlign = "center";                       //テキストを中央揃えに
    label2.rotation = -15;                             //半時計回りに15度回転
    label2.y = (gsettings.height - label2.height) / 2; //縦方向の中央に配置 
    stage.addChild(label2);                            //

*/
