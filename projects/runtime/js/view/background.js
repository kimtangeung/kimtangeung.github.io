var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var tree;
        var buildings = [];
        // Add any variables that will be used by render AND update here:

        
        
        
        
        
        
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.bitmap('img/avgna2Tokyo_Final.png');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
            
            // starfield
            var circle;
            for(var i=0;i<100;i++) {
            circle = draw.bitmap('img/imageedit__9276713408.png');
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
            }
            
            // moon
            var moon = draw.bitmap('img/kisspng-cartoon-moon-moon-5a953dc58437a2.0294654315197301175416.png');
            moon.x = 800;
            moon.y = 10;
            moon.scaleX = 0.4;
            moon.scaleY = 0.4;
            background.addChild(moon);
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            var buildingHeight = 300;
            var building;
            for(var i=0;i<5;++i) {
            building = draw.bitmap('img/isocity-blue-tower-ii-md.png');
            building.x = 200*i;
            building.y = groundY-buildingHeight/2; // Question: Creating different height
            background.addChild(building);
            buildings.push(building);
            }
            

            // TODO 4: Part 1 - Add a tree

            tree = draw.bitmap('img/Bolly_cherry.png');
            tree.x = 950;
            tree.y = 40;
            background.addChild(tree);
            
            
            
            }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            
            tree.x = tree.x - 1;
            
            //Change the code so that the tree moves towards Halle
            
            if(tree.x < -200)
            {
            tree.x = canvasWidth;
            }
            
            // TODO 5: Part 2 - Parallax
            
            var bl= buildings.length;
            
            for (var i = 0; i < bl; i= i + 1) {
                buildings[i].x = buildings[i].x - 1;
             if(buildings[i].x < -200)
            buildings[i].x = canvasWidth;
            {
            }
 
            }
        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}