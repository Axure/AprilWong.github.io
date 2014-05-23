/**
 * Created by apple on 14-5-22.
 */
var FlowerSprite = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile(s_flower);
    }
});

var DropSprite = cc.Sprite.extend({
    ctor: function(){
        this._super();
        this.initWithFile(s_drop);
    }
})