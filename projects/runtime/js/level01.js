var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:700,y:groundY},
                {type: 'sawblade',x:200,y:groundY}      
       ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        
        
        //blade stuff
        
        var createSawBlade = function(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);    
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        };


//enemy stuff

        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        
        enemy.x = 2000;
        enemy.y = groundY-50;
        
        game.addGameItem(enemy);
        
        
        
        //rewards stuff
        
        
        
                var reward =  game.createGameItem('reward',25);
        var redSquaree = draw.rect(50,50,'#ffffff');
        redSquaree.x = -25;
        redSquaree.y = -25;
        reward.addChild(redSquaree);
        
        reward.x = 1000;
        reward.y = groundY-60;
        
        game.addGameItem(reward);
        
        
        
        
        for (var i= 0; i < levelData.gameItems.length; i++) {
            var specificX = levelData.gameItems[i].x;
            var specificY = levelData.gameItems[i].y;
            createSawBlade(specificX,specificY);
        }



//TODO 12

function createEnemy(x,y) {
enemy.velocityX = -4;


enemy.onPlayerCollision = function() {
    game.changeIntegrity(-10);
};


enemy.onProjectileCollision = function() {
    game.increaseScore(100);
};


//score is not work welp

enemy.onProjectileCollision = function() {
   enemy.shrink();
};
}




//enemy calll

createEnemy(400,groundY-10);




//reward stuff



reward.velocityX = -4;


reward.onPlayerCollision = function() {
    game.changeIntegrity(+1000);
};




       /* for (var i in levelData.gameItems) {
         /   createSawBlade(i.x, i.y);

        levelData.gameItems.forEach(createSawBlade);*/
    //}
};
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}