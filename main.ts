namespace SpriteKind {
    export const leftPaddle = SpriteKind.create()
    export const rightpaddle = SpriteKind.create()
}
function create_right_paddle () {
    right_paddle = sprites.create(img`
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        ..........................7788aa
        `, SpriteKind.rightpaddle)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
function create_left_paddle () {
    left_paddle = sprites.create(img`
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        224455..........................
        `, SpriteKind.leftPaddle)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.rightpaddle, function (sprite, otherSprite) {
    mySprite.vx = mySprite.vx * -1
    info.player2.changeScoreBy(1)
    music.jumpUp.play()
})
function create_ball () {
    mySprite = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.Player)
    mySprite.setVelocity(100, 100)
    mySprite.setBounceOnWall(true)
    mySprite.y = randint(0, 120)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.leftPaddle, function (sprite, otherSprite) {
    mySprite.vx = mySprite.vx * -1
    info.changeScoreBy(1)
    music.jumpDown.play()
})
let mySprite: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
game.setDialogFrame(img`
    ..bbabbaabbaabbaabbbbb..
    .bddbaddbaddbaddbabbddb.
    addddbaddbaddbaddbadddda
    addddbbaabbaabbaabbdddda
    abddb11111111111111bddba
    bbab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111badb
    abda1111111111111111adda
    adda1111111111111111adba
    bdab1111111111111111bbab
    babb1111111111111111babb
    abddb11111111111111bddba
    addddbbaabbaabbaabbdddda
    addddabddabddabddabdddda
    .addbbabddabddabddabdda.
    ..aaabbaabbaabbaabbaaa..
    `)
game.showLongText("Get ready in 3...", DialogLayout.Bottom)
game.showLongText("2...", DialogLayout.Bottom)
game.showLongText("1...", DialogLayout.Bottom)
game.showLongText("START!", DialogLayout.Bottom)
game.onUpdate(function () {
    if (info.score() >= 15) {
        game.over(true)
    }
})
game.onUpdate(function () {
    if (info.player2.score() >= 15) {
        game.over(true)
    }
})
forever(function () {
    music.playMelody("- A C5 E - A C5 E ", 120)
    music.playMelody("G E G - G E G - ", 120)
})
