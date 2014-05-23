/**
 * Created by apple on 14-5-21.
 */
var rdx = 8;
var rdy = -5;
var dx = 8;
var dy = 0;
var CatcherSprite = cc.Sprite.extend({
    ctor:function(){
        this._super();
        this.initWithFile(s_catcher);
        cc.Director.getInstance().getTouchDispatcher().addTargetedDelegate(this, 0, true);
        this.velocity = cc.p(100, 100);
    },

    update: function (dt) {
        if (this._position.x > 733 ) { rdx = -rdx; dx = -dx};
        if (this._position.x < 0) {rdx = -rdx; dx = -dx};
        if (this._position.y <= 290) dy=-dy;
        if (this._position.y >= 450 && dx == 0){
            dx = rdx;
            dy = 0;
        }
        this.setPosition(cc.p(this._position.x+dx,this._position.y+dy));
    },

    onTouchBegan: function () {
        if(dy <= 0){
            dy = rdy;
            dx = 0;
            this.setPosition(cc.p(this._position.x+dx,this._position.y+dy));
        }
        return true;
    }
});