// Canvas init // 

var c = document.getElementById('canvas2');
var ctx = c.getContext('2d');
    ctx.canvas.width  = $(document).width();
    ctx.canvas.height = $(document).height();

// ********************* // 




// Engine //

var engine = {

    createVector : function(x,y){
        return {x:x,y:y}
    },



    // create a shape object who define a shape with 4 points. 

    createShape : function(point1,point2,point3,point4){
        return {
            topLeft: point1,
            topRight: point2,
            bottomRight: point3,
            bottomLeft: point4
        };
    },



    fillColor : function(color){
        ctx.fillStyle = color;
        ctx.fill( );
    },  



    // vector addition

    vecAdd : function(vector1, vector2){
        var x = vector1.x + vector2.x;
        var y = vector1.y + vector2.y;
        return {x:x,y:y}
    },



    // vector subtract

    vecSub : function(vector1, vector2){
        var x = vector1.x - vector2.x;
        var y = vector1.y - vector2.y;
        return {x:x,y:y}
    },



    drawLine : function(point1,point2){
        ctx.moveTo(point1.x,point1.y);
        ctx.lineTo(point2.x,point2.y);
        ctx.stroke();
    },



    lineLength : function(point1, point2){
        var length = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
        return length;
    },



    //return  center coordinate between two points

    findCenter : function(point1, point2){
        var x = (point1.x + point2.x) / 2;
        var y = (point1.y + point2.y) / 2;
        return {x:x, y:y}
    },



    // draw a shape given a shape object, a shape is an object containing 4 points. 

    drawShape : function(shape){ 
        ctx.beginPath();
        ctx.moveTo(shape.topLeft.x,shape.topLeft.y);
        ctx.lineTo(shape.topRight.x,shape.topRight.y);
        ctx.lineTo(shape.bottomRight.x,shape.bottomRight.y);
        ctx.lineTo(shape.bottomLeft.x,shape.bottomLeft.y);
        ctx.lineTo(shape.topLeft.x,shape.topLeft.y);
        ctx.stroke();
    },



    //return coordinate of a point at a given depth between the vanishing point and another point

    perspectivePoint : function(point, vanishing, depth){
        var vs1 = engine.vecSub(vanishing,point);
        vs1.x = Math.round((vs1.x/1000) * depth);
        vs1.y = Math.round((vs1.y/1000) * depth);
        return this.vecAdd(point,vs1)
    },



    // calcul of a line equation given 2 points || y = mx + b ||

    lineEquation : function(point1, point2){
        var m = (point2.y - point1.y)/(point2.x - point1.x);
        var b = point1.y - (m * point1.x);
        return {
            m:m,
            b:b,
            // next point on this line given an x coordinate
            nextPointX : function(x){
                var y = Math.round((this.m * x) + this.b);
                return {x:x,y:y};
            },
            // next point on this line given an y coordinate
            nextPointY : function(y){
                var x = Math.round((y - this.b) / this.m);
                return {x:x,y:y};
            }
        };
    },



    // find intersection coordinate given two line equation 

    findIntersec : function(lineEquation1,lineEquation2){
        var a = lineEquation1.m - lineEquation2.m;
        var b = lineEquation2.b - lineEquation1.b;
        var x = b / a;
        var y = (lineEquation1.m * x) + lineEquation1.b;
        return {x:x,y:y};
    },



    createSpace : function(depth,color){
        ctx.strokeStyle = 'purple'
        var topLeft = engine.perspectivePoint(room.topLeft,room.vPoint,depth);
        var topRight = engine.perspectivePoint(room.topRight,room.vPoint,depth);
        var bottomRight = engine.perspectivePoint(room.bottomRight,room.vPoint,depth);
        var bottomLeft = engine.perspectivePoint(room.bottomLeft,room.vPoint,depth);
    
        room.space = engine.createShape(topLeft,topRight,bottomRight,bottomLeft);
        room.walls = {
            leftWall: engine.createShape(room.topLeft, topLeft, bottomLeft, room.bottomLeft),
            bottomWall:engine.createShape(bottomLeft, bottomRight, room.bottomRight, room.bottomLeft),
            rightWall:engine.createShape(topRight, room.topRight, room.bottomRight, bottomRight),
            topWall:engine.createShape(room.topLeft, room.topRight, topRight, topLeft),
            backWall : room.space
        }

        for(a in room.walls){
            engine.drawShape(room.walls[a])
            engine.fillColor(color)
        }
    },



    findSectionY : function(volume){
        if(volume.side.frontSide.topLeft.y < room.vPoint.y && volume.side.frontSide.bottomLeft.y < room.vPoint.y){
            return 'topSection';
        }
        if(volume.side.frontSide.topLeft.y > room.vPoint.y && volume.side.frontSide.bottomLeft.y > room.vPoint.y){
            return 'bottomSection'
        }
        return 'middleSection'
    },



    findSectionX : function(volume){
        if(volume.side.frontSide.topLeft.x < room.vPoint.x && volume.side.frontSide.topRight.x < room.vPoint.x){
            return 'leftSection';
        }
        if(volume.side.frontSide.topLeft.x > room.vPoint.x && volume.side.frontSide.topRight.x > room.vPoint.x){
            return 'rightSection'
        }
        return 'centerSection'
    },


 
    // create a 3d volume given the front side (4 points), the depth between 0 and the room depth, the thickness.

    createVolume : function(point1, point2, point3, point4, depth, thickness, color){
        room.elementsNumber++
        thickness = depth + thickness;
        var tab = [point1,point2,point3,point4]; 
        var firstPlan = [];
        var secondPlan = [];

        // find the front side panel and back side panel points 
        for(var i = 0; i<tab.length;i++){
            firstPlan[i] = this.perspectivePoint(tab[i],room.vPoint, depth);
            secondPlan[i] = this.perspectivePoint(tab[i],room.vPoint, thickness);
        };
        
        // create a volume object fill with every possible side using the front and back side panels points stored in firstPlan[] and secondPlan[]. 

        var volume =  {
            side :{
                frontSide : this.createShape(firstPlan[0],firstPlan[1],firstPlan[2],firstPlan[3]),
                backSide : this.createShape(secondPlan[0],secondPlan[1],secondPlan[2],secondPlan[3]),
                leftSide : this.createShape(secondPlan[0],firstPlan[0],firstPlan[3],secondPlan[3]),
                rightSide : this.createShape(firstPlan[1],secondPlan[1],secondPlan[2],firstPlan[2]),
                topSide : this.createShape(secondPlan[0], secondPlan[1],firstPlan[1], firstPlan[0]),
                bottomSide : this.createShape(firstPlan[3], firstPlan[2],secondPlan[2], secondPlan[3])                
            }
        };
  
        var volumeName = 'volume' + room.elementsNumber;

        // Give the volume object the depth, origin points, name and thickness of the volume. 
        volume.depth = 1000 - depth;
        volume.firstDepth = depth;
        volume.thickness = thickness;
        volume.originPoint = tab;
        volume.name = volumeName;
        volume.color = color;


        if(room.elements[volume.depth]== undefined){
            room.elements[volume.depth] = {}
        };
        room.elements[volume.depth][volumeName] = volume;


 
        return volume;
    },



    // create the scaled version of a given volume, at a given depth. 

    createVolumeMirror : function(volume, depth, color){       
        var coef = depth / 10;
        var newThickness = volume.thickness - ((volume.thickness / 100) * coef);
        return this.createVolume(volume.side.frontSide.topLeft,volume.side.frontSide.topRight,volume.side.frontSide.bottomRight,volume.side.frontSide.bottomLeft, depth,newThickness,color)
    }, 



    createSuperVolume : function(volumeList){
        var obj = {
            top: {},
            bottom:{},
            middle:{}
        }


        for(var i = 0; i<volumeList.length; i++){

            if(volumeList[i].side.frontSide.topLeft.y < room.vPoint.y && volumeList[i].side.frontSide.bottomLeft.y < room.vPoint.y){
                var depth = volumeList[i].firstDepth;
                var name = volumeList[i].name;
                if (obj.top[depth] == undefined) {
                    obj.top[depth] = {}
                }
                obj.top[depth][name] = volumeList[i]
            }

            if(volumeList[i].side.frontSide.topLeft.y > room.vPoint.y && volumeList[i].side.frontSide.bottomLeft.y > room.vPoint.y){
                var depth = volumeList[i].firstDepth;
                var name = volumeList[i].name;
                if (obj.bottom[depth] == undefined) {
                    obj.bottom[depth] = {}
                }
                obj.bottom[depth][name] = volumeList[i]
            }

            if(volumeList[i].side.frontSide.topLeft.y < room.vPoint.y && volumeList[i].side.frontSide.bottomLeft.y > room.vPoint.y){
                var depth = volumeList[i].firstDepth;
                var name = volumeList[i].name;
                if (obj.middle[depth] == undefined) {
                    obj.middle[depth] = {}
                }
                obj.middle[depth][name] = volumeList[i]
            }
        }

    },



    // update volume object property when vanishing point change

    updateVolume : function(volume){
        var firstPlan = [];
        var secondPlan = [];

        for(var i = 0; i<volume.originPoint.length;i++){
            firstPlan[i] = this.perspectivePoint(volume.originPoint[i],room.vPoint, volume.firstDepth);
            secondPlan[i] = this.perspectivePoint(volume.originPoint[i],room.vPoint, volume.thickness);
        };

         var updateVolume =  {
            side:{
                frontSide : this.createShape(firstPlan[0],firstPlan[1],firstPlan[2],firstPlan[3]),
                backSide : this.createShape(secondPlan[0],secondPlan[1],secondPlan[2],secondPlan[3]),
                leftSide : this.createShape(secondPlan[0],firstPlan[0],firstPlan[3],secondPlan[3]),
                rightSide : this.createShape(firstPlan[1],secondPlan[1],secondPlan[2],firstPlan[2]),
                topSide : this.createShape(secondPlan[0], secondPlan[1],firstPlan[1], firstPlan[0]),
                bottomSide : this.createShape(firstPlan[3], firstPlan[2],secondPlan[2], secondPlan[3])                
            }
        };

        updateVolume.name = volume.name;
        updateVolume.depth = volume.depth;
        updateVolume.firstDepth = volume.firstDepth;
        updateVolume.thickness = volume.thickness;
        updateVolume.originPoint = volume.originPoint;
        updateVolume.color = volume.color;

        room.elements[volume.depth][volume.name] = updateVolume;

        return updateVolume;
    },

    updateShape :function(shape){
        var tab2 = []
        for(var i = 0; i< shape.originPoint.length; i++){
            tab2.push(this.perspectivePoint(shape.originPoint[i], room.vPoint,shape.depth))
        }
        shape.topLeft = tab2[0];
        shape.topRight = tab2[1];
        shape.bottomRight = tab2[2];
        shape.bottomLeft = tab2[3]
    },

    updateLine: function(line){
        var point2 = engine.perspectivePoint(line.p1,room.vPoint, 900); 
        line.p2 = point2;
    },

    drawScene : function(){
        for(var i =0; i<room.shapes.length;i++){
            this.updateShape(room.shapes[i])
            this.drawShape(room.shapes[i])
        }

        for(var i =0; i<room.lines.length;i++){
            this.updateLine(room.lines[i])
            this.drawLine(room.lines[i].p1, room.lines[i].p2)
        }
        var all = [];
        for(var a in room.elements){

            for(var b in room.elements[a]){

                this.updateVolume(room.elements[a][b])
                all.push(room.elements[a][b])
                var tab = ['frontSide'];

                if(room.vPoint.x < room.elements[a][b].side.frontSide.topLeft.x){
                     tab.push('leftSide')
                }
                if(room.vPoint.x > room.elements[a][b].side.frontSide.topRight.x){
                     tab.push('rightSide')
                }
                if(room.vPoint.y < room.elements[a][b].side.frontSide.topLeft.y ){
                     tab.push('topSide')
                }
                if(room.vPoint.y > room.elements[a][b].side.frontSide.bottomLeft.y ){
                     tab.push('bottomSide')
                }

                for(var i = 0; i<tab.length;i++){
                    this.drawShape(room.elements[a][b].side[tab[i]])
                    this.fillColor(room.elements[a][b].color)
                }
            }

        }
        this.createSuperVolume(all)




    }


}

// ********************* //    






// Room object // 

var room = {
    width:c.width,
    height:c.height,

    topLeft:engine.createVector(0,0),
    topRight:engine.createVector(c.width,0),
    bottomRight:engine.createVector(c.width,c.height),
    bottomLeft:engine.createVector(0,c.height),

    vPoint:{
        x:c.width/2,
        y:c.height/2
    },

    elementsNumber : 0,
    elements : {},
    drawOrder : {},
    supervol : [],
    shapes: [],
    lines:[]
}

// ********************* // 














































var createObject = function(){
    var p1 = engine.createVector(0,0)
    var p2 = engine.createVector(c.width,0)
    var p3 = engine.createVector(c.width,c.height)
    var p4 = engine.createVector(0,c.height) 

    ctx.strokeStyle = 'purple'

    for(var i = 75; i<975; i+=75){
        var p11 = engine.perspectivePoint(p1,room.vPoint, i)
        var p22 = engine.perspectivePoint(p2,room.vPoint, i)
        var p33 = engine.perspectivePoint(p3,room.vPoint, i)
        var p44 = engine.perspectivePoint(p4,room.vPoint, i)
        var shape = engine.createShape(p11,p22,p33,p44)
        shape.depth = i
        shape.originPoint = [p1,p2,p3,p4]
        room.shapes.push(shape)
    }

     
    for(var i = 0; i< c.width; i+= parseInt(c.width/6)){
        var point = engine.createVector(i, 0);
        var point2 = engine.perspectivePoint(point,room.vPoint, 900); 
        var line = {p1:point, p2:point2}
        room.lines.push(line)
    }

    for(var i = 0; i< c.width; i+= parseInt(c.width/6)){
        var point = engine.createVector(i, c.height);
        var point2 = engine.perspectivePoint(point,room.vPoint, 900); 
        var line = {p1:point, p2:point2}
        room.lines.push(line)
    }

    for(var i = 0; i< c.height; i+= parseInt(c.height/5)){
        var point = engine.createVector(0, i);
        var point2 = engine.perspectivePoint(point,room.vPoint, 900); 
        var line = {p1:point, p2:point2}
        room.lines.push(line)
    }

    for(var i = 0; i< c.height; i+= parseInt(c.height/5)){
        var point = engine.createVector(c.width, i);
        var point2 = engine.perspectivePoint(point,room.vPoint, 900); 
        var line = {p1:point, p2:point2}
        room.lines.push(line)
    }

}



// engine.createSpace(900, '#1b1a1c')
createObject()









var intro = function(){
           var all = [];
        for(var a in room.elements){

            for(var b in room.elements[a]){

                engine.updateVolume(room.elements[a][b])
                all.push(room.elements[a][b])
                var tab = ['frontSide'];

                if(room.vPoint.x < room.elements[a][b].side.frontSide.topLeft.x){
                     tab.push('leftSide')
                }
                if(room.vPoint.x > room.elements[a][b].side.frontSide.topRight.x){
                     tab.push('rightSide')
                }
                if(room.vPoint.y < room.elements[a][b].side.frontSide.topLeft.y ){
                     tab.push('topSide')
                }
                if(room.vPoint.y > room.elements[a][b].side.frontSide.bottomLeft.y ){
                     tab.push('bottomSide')
                }

                for(var i = 0; i<tab.length;i++){
                    engine.drawShape(room.elements[a][b].side[tab[i]])
                    engine.fillColor(room.elements[a][b].color)
                }
            }

        }

        engine.createSuperVolume(all)

        var o = 0;
       var inter1 =  setInterval(function(){
            if(o < room.shapes.length){
                engine.updateShape(room.shapes[o])
                engine.drawShape(room.shapes[o])  
                o++             
            }else{
                clearInterval(inter1)
                inter()
            }
        },150)

       var inter = function(){
            var j = 0;
           var inter2 =  setInterval(function(){
                if(j <room.lines.length){
                    engine.updateLine(room.lines[j])
                    engine.drawLine(room.lines[j].p1, room.lines[j].p2)  
                    j++             
                }else{
                    clearInterval(inter2)
                    start()
                }   
            },75)
        
       }



}


intro()




// Mouse handler //
var start = function(){

    var focal = function(e){
        var pos = getMousePos(c, e);
        var posx = Math.round(pos.x);
        var posy = Math.round(pos.y);
        
        room.vPoint = engine.createVector(posx,posy)
        ctx.clearRect(0,0,c.width,c.height);
        // engine.createSpace(900,'#1b1a1c');
        engine.drawScene();   
    };
    
    var getMousePos = function(canvas, evt){
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    
    }
    
    var framecontrol = 0
     $(window).on('mousemove',function(e){
        framecontrol++
        if (framecontrol% 15 ==0) {
            focal(e)
        }
     });
}




















































// var trigger = 'off';

// $(window).keydown(function (e) {
//     if (e.keyCode === 0 || e.keyCode === 32) {
//         e.preventDefault();
//         if(trigger == 'off'){
            // $(window).on('mousemove',focal);
//             // $('body').css('cursor', 'none');
//             trigger ='on';       
//         }    
//     } 
// })

// $(window).keyup(function (e) {
//     trigger = 'off'
//     if (e.keyCode === 0 || e.keyCode === 32) {
//         e.preventDefault();
//         $(window).off('mousemove',focal);
//         // $('body').css('cursor', 'auto');
//     }
// })
// ********************* // 








// Engine //
// ********************* // 



    // // calcule of a line equation given 2 points || y = mx + b ||
    // lineEquation : function(point1, point2){
    //     var m = (point2.y - point1.y)/(point2.x - point1.x);
    //     var b = point1.y - (m * point1.x);
    //     return {
    //         m:m,
    //         b:b,
    //         // next point on this line given an x coordinate
    //         nextPointX : function(x){
    //             var y = Math.round((this.m * x) + this.b);
    //             return {x:x,y:y};
    //         },
    //         // next point on this line given an y coordinate
    //         nextPointY : function(y){
    //             var x = Math.round((y - this.b) / this.m);
    //             return {x:x,y:y};
    //         }
    //     };
    // },

    // // find intersection coordinate given two line equation 
    // findIntersec : function(lineEquation1,lineEquation2){
    //     var a = lineEquation1.m - lineEquation2.m;
    //     var b = lineEquation2.b - lineEquation1.b;
    //     var x = Math.round(b / a);
    //     var y = Math.round((lineEquation1.m * x) + lineEquation1.b);
    //     return {x:x,y:y};
    // },





 // var coef = this.lineLength(volume.frontSide.topLeft, volume.backSide.topLeft) / volume.depth;
        // var point1 = engine.perspectivePoint(volume.frontSide.topLeft, room.vPoint, depth);
        // var lineq = this.lineEquation(point1, room.vPoint);
        // var slope = lineq.m;
        // var newLength = this.lineLength(volume.frontSide.topLeft, volume.backSide.topLeft);

        // // if(slope < 0 ){
        // //     var dist = (1000 - depth) * coef;
        // // }else{
        // //     var dist = (depth - 1000) * coef;             
        // // }
        // var dist = (1000 - depth) * coef;
        // console.log(slope, 'slope')
        // console.log(dist, 'dist')
        // console.log(dist / (Math.sqrt(1+Math.pow(slope,2))))
        // console.log(Math.pow(slope,2), 'pow')
        // console.log(point1, 'point1 ')
        // console.log(point1.x + (dist / (Math.sqrt(1+Math.pow(slope,2)))), 'x')
        // console.log('  ')
        // // var angle = Math.atan(point1.y / point1.x) * (180/Math.PI);
        // var x = point1.x + (dist / (Math.sqrt(1+Math.pow(slope,2))))
        // var y = lineq.nextPointX(x)

        // this.drawLine(point1, y)

    //     var center = this.findCenter(volume.backSide.topLeft, volume.backSide.bottomLeft);
    //     var eq1 = this.lineEquation(volume.frontSide.bottomLeft, center);
    //     var eq2 = this.lineEquation(volume.frontSide.topLeft, room.vPoint);
    //     var topLeft = this.findIntersec(eq1, eq2)
    //     console.log(eq1, eq2)
    //     console.log(topLeft)
    //     console.log(' ')

    //     var topRight = this.lineEquation(volume.frontSide.topRight, room.vPoint).nextPointY(topLeft.y)

    //     this.drawLine(topLeft, volume.frontSide.bottomLeft)
    //     this.drawLine(topLeft, topRight)
    // }








            // stock the volume object inside the room elements object. 
        // if(room.drawOrder[volume.depth] == undefined){
        //     room.drawOrder[volume.depth] = {
        //                                         topSection : {
        //                                             leftSection : {},
        //                                             centerSection : {},
        //                                             rightSection : {}
        //                                         },
        //                                         middleSection : {
        //                                             leftSection : {},
        //                                             centerSection : {},
        //                                             rightSection : {}
        //                                         },
        //                                         bottomSection : {
        //                                             leftSection : {},
        //                                             centerSection : {},
        //                                             rightSection : {}
        //                                         }
        //                                     };      
        // } 




                // stock the volume object inside the draw Order list
        // room.drawOrder[volume.depth][this.findSectionY(volume)][this.findSectionX(volume)][volumeName] = volume
        // console.log(this.findSectionY(volume))    