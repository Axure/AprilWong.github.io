/**
 * Created by apple on 14-5-21.
 */
var g_GameZOder = {bg: 0, ui: 1, uii: 2,front: 100};//level
var move = 0; //move marks whether the cat is move or not
var stat = 0;
var record = 0;
var Animal = [];
var start = 0;
var life = 5 ;
var countNum = 0;
var g_GameStatus = {normal: 0, stop: 1, gameOver: 2};
var GameScene = cc.Scene.extend({
    gameLayer: null,
    catcher: null,
    score: 0,

    onEnter: function () {
        this._super();
        //add Layer
      this.initData();
      this.schedule(this.update, 0);
    },

    initData: function() {
        this.gameLayer = cc.Layer.create();
        this.addChild(this.gameLayer);

        //add Background
        var bg = cc.Sprite.create(s_background);
        bg.setAnchorPoint(cc.p(0, 0));
        this.gameLayer.addChild(bg, g_GameZOder.bg);
        bg.setPosition(cc.p(0, 0));


        start = 0;


        //add animals
        var catt = new Cat();
        Animal.push(catt);
        var pandaa = new Panda();
        Animal.push(pandaa);
        var totoroo = new Totoro();
        Animal.push(totoroo);
        var bunnyy = new Bunny();
        Animal.push(bunnyy);
        var lionn = new Lion();
        Animal.push(lionn);

        for (var i = 0 ; i <Animal.length; i++ ){
            Animal[i].initData();
            this.gameLayer.addChild(Animal[i],g_GameZOder.ui);
        }

        //add catcher
        this.catcher = new CatcherSprite();
        this.catcher.setPosition(cc.p(0, 450));
        this.gameLayer.addChild(this.catcher, g_GameZOder.ui);

    },


    update: function (dt) {
        this.catcher.update(dt);
        for (var i = 0 ; i < Animal.length; i++ ){
            Animal[i].update(dt);
        }

        for(var i = 0 ; i < Animal.length ; i++){
            var ax = this.catcher._position.x;
            var ay = this.catcher._position.y;
            var bx = Animal[i]._position.x;
            var by = Animal[i]._position.y;
            if ((ay == 290)&&(by) ){
                if(Math.abs(ax-bx)<30){
                    if (Animal[i].isCaught == false){
                        Animal[i].isCaught = true;
                        stat = 1;
                        countNum = countNum + 1;
                    }
                }
                else{
                    stat = -1;
                }
            };
        }
        // judge whether caught or not
        document.getElementById("score").innerText = countNum * 10 ;
    }
});