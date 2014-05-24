/**
 * Created by apple on 14-5-21.
 */

const RANGE = 30;
const TOTALLIFE = 5;
const ANIMALLINE = 290;
const CATCHERLINE = 450;
const TOTALNUM = 5;
var g_GameZOder = {bg: 0, ui: 1, uii: 2,front: 100};//level
var move = 0; //move marks whether the cat is move or not
var Animal = [];
var Flowers = [];
var Drops = [];
var stat = 0;
var life = TOTALLIFE ;
var catchNum = 0;
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

        //add animals
        var catt = new Cat();
        Animal.push(catt);
        var pandaa = new Panda();
        Animal.push(pandaa);
        var lionn = new Lion();
        Animal.push(lionn);
        var bunnyy = new Bunny();
        Animal.push(bunnyy);
        var totoroo = new Totoro();
        Animal.push(totoroo);


        for (var i = 0 ; i <Animal.length; i++ ){
            Animal[i].initData();
            this.gameLayer.addChild(Animal[i],g_GameZOder.ui);
        }

        //add catcher
        this.catcher = new CatcherSprite();
        this.catcher.initData();
        this.gameLayer.addChild(this.catcher, g_GameZOder.ui);

        for (var i = 0 ; i < TOTALNUM; i++){
            var flowerr = new FlowerSprite();
            flowerr.setPosition(cc.p(i*23+620,40));
            Flowers.push(flowerr);
        }

        for (var i = 0 ; i <TOTALLIFE; i++){
            var  dropp = new DropSprite();
            dropp.setPosition(cc.p(i*23+620,15));
            Drops.push(dropp);
            this.gameLayer.addChild(Drops[i], g_GameZOder.ui);
        }

    },


    update: function (dt) {
        this.catcher.update(dt);
        for (var i = 0 ; i < Animal.length; i++ ){
            Animal[i].update(dt);
        }

        //judge whether caught or not
        for(var i = 0 ; i < Animal.length ; i++){
            if (Animal[i].isCaught == false){
                var ax = this.catcher._position.x;
                var ay = this.catcher._position.y;
                var bx = Animal[i]._position.x;
                var by = Animal[i]._position.y;
                if ( ay == ANIMALLINE ){
                    if ( Math.abs( ax - bx ) <= RANGE){
                        Animal[i].isCaught = true;
                        this.gameLayer.addChild(Flowers[catchNum], g_GameZOder.ui);
                        catchNum = catchNum + 1;
                        stat = 1 ;
                    }
                }
            }
        }

        if ((dy > 0)&&(stat != 1)){
            life = life - 1;
            stat = 1;
            this.gameLayer.removeChild(Drops[life],g_GameZOder.ui);
        }

        if(dy == 0){

            if (catchNum == TOTALNUM){
                document.getElementById("winBackground").style.visibility = "visible";
                document.getElementById("share").style.visibility = "visible";
                document.getElementById("button").style.visibility = "visible";
                for(var i = 0; i<catchNum; i++){
                    this.gameLayer.removeChild(Flowers[i], g_GameZOder.ui);
                }
                for(var i = life; i<TOTALLIFE; i++){
                    this.gameLayer.addChild(Drops[i],g_GameZOder.ui);
                }
                catchNum = 0;
                life = TOTALLIFE;
                for(var i = 0; i<TOTALNUM; i++){
                    Animal[i].setPosition(cc.p(150*i+50,120))
                    Animal[i].isCaught = false;
                }
            }

            if (life == 0){
                document.getElementById("loseBackground").style.visibility = "visible";
                document.getElementById("share").style.visibility = "visible";
                document.getElementById("button").style.visibility = "visible";
                for(var i = 0; i<catchNum; i++){
                    this.gameLayer.removeChild(Flowers[i], g_GameZOder.ui);
                }
                for(var i = life; i<TOTALLIFE; i++){
                    this.gameLayer.addChild(Drops[i],g_GameZOder.ui);
                }
                catchNum = 0;
                life = TOTALLIFE;
                for(var i = 0; i<TOTALNUM; i++){
                    Animal[i].setPosition(cc.p(150*i+50,120))
                    Animal[i].isCaught = false;
                }
            }
        }
    }
});