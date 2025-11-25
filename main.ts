let mySprite: Sprite = null
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    game.over(true)
})
forever(function () {
    mySprite = sprites.create(assets.image`7`, SpriteKind.Player)
})
