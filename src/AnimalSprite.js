/**
 * Created by apple on 14-5-21.
 */
var animaldx = 4;
var AnimalSprite = cc.Sprite.extend({
    isCaught:false,
    update: function(){
        if ( this.isCaught ){
            if ( this._position.y <= 600 )
            this.setPosition(cc.p(this._position.x,this._position.y+5));
        }
        else{
            if(this._position.x >= 733) {
                this.setPosition(cc.p(0, this._position.y));
            }
            else{
                this.setPosition(cc.p(this._position.x+animaldx, this._position.y));
            }
        }
    }
});

var Cat = AnimalSprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile(s_cat);
    },

    initData: function(){
        this.setPosition(cc.p(50,120));
    }
});

var Panda =AnimalSprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_panda);
    },

    initData: function () {
        this.setPosition(cc.p(200,120));
    }
});

var Totoro =AnimalSprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_totoro);
    },

    initData: function () {
        this.setPosition(cc.p(650,120));
    }
});


var Bunny =AnimalSprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_bunny);
    },

    initData: function () {
        this.setPosition(cc.p(500,120));
    }
});


var Lion =AnimalSprite.extend({
    ctor: function () {
        this._super();
        this.initWithFile(s_lion);
    },

    initData: function () {
        this.setPosition(cc.p(350,120));
    }
});