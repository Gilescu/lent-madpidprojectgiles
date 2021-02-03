controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -50)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555fffff5555555555555555555fffffff555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffffff55555555555555555555555555555555555555555555
    fffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff5555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    fffff555555555555fffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    ffffffffffffffffffffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    ffffffffffffffffffffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    ffffffffffffffffffffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff5555555555555555555555555555555555555555555555
    ffffffffffffffffffffff555555555555555555555555555555555555555555555555555555555555555fffff5555555555555555555fffff555555555555555555555555555555555555555555ffff
    ffffffffffffffffffffff55555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff55555555555555ffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff55555555555555ffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff55555555555555ffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff55555555555555ffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff55555555555555ffffffffffffffffffffffffffffffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffff5555555555555555555fffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffffffffffffffffffffffffffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffffffffffffffffffffffffffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffffffffffffffffffffffffffff5555555555555555555555fffff555555555555555ffff
    fffff5555555555555555555555555555555555555555555555555555555555555fffff55555555555555fffffffffffffffffffffffffffff5555555555555555555555fffff555555555555555ffff
    fffff555555555555555555555555555555ffffffffffffffffffffffffffffffffffff55555555555555fffffffffffffffffffffffffffff5555555555555555555555fffff555555555555555ffff
    fffff55555555555555555555555555555fffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555fffff555555555555555ffff
    fffff55555555555555555555555555555fffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555fffff555555555555555ffff
    fffff55555555555555555555555555555fffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555fffff555555555555555ffff
    fffff55555555555555555555555555555fffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555555555555fffff555555555555555ffff
    fffff55555555555555555555555555555ffffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffff
    fffff555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffff
    fffff555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffff
    fffff555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffff
    fffff555555555555555555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffff
    ffffffffffffffffffff555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555ffff
    ffffffffffffffffffff555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555ffff
    ffffffffffffffffffff555555555555555fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffff555555555555555555ffff
    ffffffffffffffffffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555fffff555555555555555555ffff
    ffffffffffffffffffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555fffff555555555555555555ffff
    fffff5555555555fffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555555555fffff555555555555555555ffff
    fffff5555555555fffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffffffffffffffff555555555555555555ffff
    fffff5555555555fffff555555555555555fffffffffffffffffffffffffffffffffffffffffffffff5555555555555fffffffffffffffffffffffffffffffffffffffffff555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffff5555555555555fffffffffffffffffffffffffffffffffffffffffff555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffff5555555555555fffffffffffffffffffffffffffffffffffffffffff555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffff5555555555555fffffffffffffffffffffffffffffffffffffffffff555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffff5555555555555fffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffff5555555555555fffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffff5555555555555fffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffff55555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff5555555555fffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555ffffff5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff555555555555555555555555555555ffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff555555555555555555555555555555ffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff555555555555555555555555555555ffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff555555555555555555555555555555ffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff555555555555555555555555555555ffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555fffff55555555555555555555555555555555555555fffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    fffff555555555555555555555555555555fffff55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    3 3 3 3 3 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 106)
tiles.setWallAt(tiles.getTileLocation(25, 254), true)
