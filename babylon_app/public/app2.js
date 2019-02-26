
var game = function(){
//	 Babylon js canvas - engine init 

var canvas = document.getElementById("renderCanvas");

var engine = new BABYLON.Engine(canvas, true);
// engine.isPointerLock = true;



var introoff = 0;





	// create scene ............................................


	var createScene = function(){


		// scene setup	
		var scene = new BABYLON.Scene(engine)
		scene.clearColor = new BABYLON.Color3(0,0,0)
		scene.collisionsEnabled = true;
		scene.gravity = new BABYLON.Vector3(0, -9.81, 0);

		var canvas2 = BABYLON.Canvas2D.CreateScreenSpace(scene, "ScreenCanvas", new BABYLON.Vector2(0, 0), new BABYLON.Size($('#renderCanvas').width(), $('#renderCanvas').height()), BABYLON.Canvas2D.CACHESTRATEGY_CANVAS);
		scene.can = canvas2;



		var text = BABYLON.Text2D.Create(scene.can, "text", $('#renderCanvas').width()/15, $('#renderCanvas').height()/13, "18pt arial", "", new BABYLON.Color3.FromInts(245,245,245));
		scene.cantext = text

		


	    // camera controll
	    // intro
	    var camera = new BABYLON.FreeCamera('FreeCamera',new BABYLON.Vector3(0,6.3,-16),scene)
	    // var camera = new BABYLON.FreeCamera('FreeCamera',new BABYLON.Vector3(0,10,0),scene)
	    camera.attachControl(canvas,true)
	    camera.speed = 0.85;
	    camera.angularSensibility = 1000;
	    camera.checkCollisions = true;
	    camera.ellipsoid = new BABYLON.Vector3(1, 3.5, 1);
	    camera.fov = 1.3;
	    camera.keysLeft = [81]
	    camera.keysRight = [68]
	    camera.keysUp = [90]
	    camera.keysDown = [83]
	    camera.applyGravity = true;



	    // light controll .............................................

	    //intro
	    var light3 = new BABYLON.PointLight("Omnirt", new BABYLON.Vector3(0, 5,-20), scene);
	    // var light3 = new BABYLON.PointLight("Omnirt", new BABYLON.Vector3(0, 11,0), scene);
	    light3.diffuse = new BABYLON.Color3(1, 1, 1);
	    light3.specular = new BABYLON.Color3(1, 1, 1);
	    light3.intensity = .65;






	    // TExture .............................................

	    var stoneTexture = new BABYLON.StandardMaterial('stone', scene)
	    stoneTexture.alpha = 1;
	    stoneTexture.diffuseColor = new BABYLON.Color3.FromInts(237, 233, 220);
	    stoneTexture.emissiveColor  = new BABYLON.Color3(0,0,0);
	    stoneTexture.ambientColor = new BABYLON.Color3(0, 0, 0);
	    stoneTexture.specularColor = new BABYLON.Color3(.3, .3, .3);

	   	var stoneTexturedup = new BABYLON.StandardMaterial('stone', scene)
	    stoneTexturedup.alpha = 1;
	    stoneTexturedup.diffuseColor = new BABYLON.Color3.FromInts(237, 233, 220);
	    stoneTexturedup.emissiveColor  = new BABYLON.Color3(0,0,0);
	    stoneTexturedup.ambientColor = new BABYLON.Color3(0, 0, 0);
	    stoneTexturedup.specularColor = new BABYLON.Color3(.3, .3, .3);


	    var stoneTexture2 = new BABYLON.StandardMaterial('stone', scene)
	    stoneTexture2.alpha = 1;
	    stoneTexture2.diffuseColor = new BABYLON.Color3.FromInts(237, 233, 220);
	    stoneTexture2.emissiveColor  = new BABYLON.Color3(0,0,0);
	    stoneTexture2.ambientColor = new BABYLON.Color3(0, 0, 0);
	    stoneTexture2.specularColor = new BABYLON.Color3(.3, .3, .3);

	    var doorframetexture = new BABYLON.StandardMaterial('doorframe', scene)
	    doorframetexture.alpha = 1;
	    doorframetexture.diffuseColor = new BABYLON.Color3.FromInts(173,178,148);
	    doorframetexture.emissiveColor  = new BABYLON.Color3(0,0,0);
	    doorframetexture.ambientColor = new BABYLON.Color3(0, 0, 0);
	    doorframetexture.specularColor = new BABYLON.Color3(.3, .3, .3);

	    var doorframetexture2 = new BABYLON.StandardMaterial('doorframe', scene)
	    doorframetexture2.alpha = 1;
	    doorframetexture2.diffuseColor = new BABYLON.Color3.FromInts(173,178,148);
	    doorframetexture2.emissiveColor  = new BABYLON.Color3(0,0,0);
	    doorframetexture2.ambientColor = new BABYLON.Color3(0, 0, 0);
	    doorframetexture2.specularColor = new BABYLON.Color3(.3, .3, .3);

	    var doortexture = new BABYLON.StandardMaterial('doorframe', scene)
	    doortexture.alpha = 1;
	    doortexture.diffuseColor = new BABYLON.Color3.FromInts(80,109,105);
	    doortexture.emissiveColor  = new BABYLON.Color3(0,0,0);
	    doortexture.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var red = new BABYLON.StandardMaterial('doorframe', scene)
	    red.alpha = 1;
	    red.diffuseColor = new BABYLON.Color3.FromInts(207,77,25);
	    red.emissiveColor  = new BABYLON.Color3(0,0,0);
	    red.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var yellow = new BABYLON.StandardMaterial('yellow', scene)
	    yellow.alpha = 1;
	    yellow.diffuseColor = new BABYLON.Color3.FromInts(191,162,26);
	    yellow.emissiveColor  = new BABYLON.Color3(0,0,0);
	    yellow.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var light = new BABYLON.StandardMaterial('light', scene)
	    light.alpha = 1;
	    light.diffuseColor = new BABYLON.Color3.FromInts(1,1,1);
	    light.emissiveColor  = new BABYLON.Color3(1,1,1);
	    light.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var darkblue = new BABYLON.StandardMaterial('darkblue', scene)
	    darkblue.alpha = 1;
	    darkblue.diffuseColor = new BABYLON.Color3.FromInts(249,232,180);
	    darkblue.emissiveColor  = new BABYLON.Color3(0,0,0);
	    darkblue.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var mat = new BABYLON.StandardMaterial('mat', scene)
	    mat.alpha = 1;
	    mat.diffuseColor = new BABYLON.Color3.FromInts(217,222,233);
	    mat.emissiveColor  = new BABYLON.Color3(0,0,0);
	    mat.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var green = new BABYLON.StandardMaterial('green', scene)
	    green.alpha = 1;
	    green.diffuseColor = new BABYLON.Color3.FromInts(80,109,105);
	    green.emissiveColor  = new BABYLON.Color3(0,0,0);
	    green.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var greenon = new BABYLON.StandardMaterial('greenon', scene)
	    greenon.alpha = 1;
	    greenon.diffuseColor = new BABYLON.Color3.FromInts(173,255,47);
	    greenon.emissiveColor  = new BABYLON.Color3.FromInts(173,255,47);
	    greenon.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var redon = new BABYLON.StandardMaterial('redon', scene)
	    redon.alpha = 1;
	    redon.diffuseColor = new BABYLON.Color3.FromInts(255,69,0);
	    redon.emissiveColor  = new BABYLON.Color3.FromInts(255,0,0);
	    redon.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var radio1 = new BABYLON.StandardMaterial('radio1', scene)
	    radio1.alpha = 1;
	    radio1.diffuseColor = new BABYLON.Color3.FromInts(192,192,192);
	    radio1.emissiveColor  = new BABYLON.Color3(0,0,0);
	    radio1.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var radio2 = new BABYLON.StandardMaterial('radio2', scene)
	    radio2.alpha = 1;
	    radio2.diffuseColor = new BABYLON.Color3.FromInts(245,245,245);
	    radio2.emissiveColor  = new BABYLON.Color3(0,0,0);
	    radio2.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var radio3 = new BABYLON.StandardMaterial('radio3', scene)
	    radio3.alpha = 1;
	    radio3.diffuseColor = new BABYLON.Color3.FromInts(105,105,105);
	    radio3.emissiveColor  = new BABYLON.Color3(0,0,0);
	    radio3.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var cvd = new BABYLON.StandardMaterial('cv', scene)
	    cvd.alpha = 1;
	    cvd.diffuseTexture = new BABYLON.Texture("mesh/cv.JPG", scene);
	    cvd.emissiveColor  = new BABYLON.Color3(0,0,0);
	    cvd.ambientColor = new BABYLON.Color3(0, 0, 0);
	    cvd.specularColor = new BABYLON.Color3(.3, .3, .3);

	    var rr = new BABYLON.StandardMaterial('rr', scene)
	    rr.alpha = 1;
	    rr.diffuseColor = new BABYLON.Color3.FromInts(255,0,0);
	    rr.emissiveColor  = new BABYLON.Color3.FromInts(0,0,0);
	    rr.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var select = new BABYLON.StandardMaterial('select', scene)
	    select.alpha = 1;
	    select.diffuseColor = new BABYLON.Color3.FromInts(255,255,255);
	    select.emissiveColor  = new BABYLON.Color3.FromInts(255,255,255);
	    select.ambientColor = new BABYLON.Color3(0, 0, 0);

	    var tele = new BABYLON.StandardMaterial('tele', scene)
	    tele.alpha = 1;
	    tele.diffuseColor = new BABYLON.Color3.FromInts(50,50,50);
	    tele.specularColor = new BABYLON.Color3.FromInts(0,0,0),
	    tele.ambientColor = new BABYLON.Color3(0, 0, 0);
	   	tele.diffuseTexture = new BABYLON.VideoTexture("video",["video/mov2.webm","video/movie.mp4"], scene, true);
	    tele.emissiveColor = new BABYLON.Color3(1,1,1);
	   	tele.diffuseTexture.video.volume  = 0.3;

	   	var ppctex = new BABYLON.StandardMaterial('ppctex', scene)
	    ppctex.alpha = 1;
	    ppctex.diffuseColor = new BABYLON.Color3.FromInts(50,50,50);
	    ppctex.specularColor = new BABYLON.Color3.FromInts(0,0,0),
	    ppctex.ambientColor = new BABYLON.Color3(0, 0, 0);
	   	ppctex.diffuseTexture = new BABYLON.VideoTexture("video",["video/pc.webm","video/pc.mp4"], scene, true);
	    ppctex.emissiveColor = new BABYLON.Color3(1,1,1);

	   	var tvoff = new BABYLON.StandardMaterial('tvoff', scene)
	    tvoff.alpha = 1;
	    tvoff.diffuseColor = new BABYLON.Color3.FromInts(1,1,1);
	    tvoff.specularColor = new BABYLON.Color3.FromInts(0,0,0),
	    tvoff.ambientColor = new BABYLON.Color3(0, 0, 0);



	    scene.tex = {}
	    scene.tex.stoneTexture = stoneTexture;
	    scene.tex.tvoff = tvoff;
	    scene.tex.tele = tele;
	    scene.tex.ppctex = ppctex;
	    scene.tex.stoneTexturedup = stoneTexturedup;
	    scene.tex.doorframetexture = doorframetexture;
	    scene.tex.doorframetexture2 = doorframetexture2;
	    scene.tex.greenon = greenon;
	    scene.tex.redon = redon;
	    scene.tex.radio2 = radio2;
	    scene.tex.yellow = yellow;
	    scene.tex.red = red;
	    scene.tex.darkblue = darkblue;
	    scene.tex.green = green;
	    scene.tex.mat = mat;


		// SKy .............................................

	    var skybox = BABYLON.Mesh.CreateBox("skyBox", 1000.0, scene);
	    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	    skyboxMaterial.backFaceCulling = false;
	    skyboxMaterial.disableLighting = true;
	    skybox.material = skyboxMaterial;
	    skybox.material.alpha = introoff;
	    // intro
	    skybox.infiniteDistance = true;

	    scene.tex.skybox = skyboxMaterial;
	    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("img/skybox/", scene);
	    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;




	    // room object mesh....................................

	    var floor = BABYLON.Mesh.CreateBox('floor',1,scene);
	    floor.scaling.x = 26;
	    floor.scaling.z = 26;
	    floor.scaling.y = 0.5;
	    floor.checkCollisions = true;
	    floor.material = stoneTexture2;
	    floor.receiveShadows = true;
	    floor.material.alpha = introoff
	    // intro

	    var roof = floor.clone('roof');
	    roof.position.y = 14;
	    roof.checkCollisions = true;
	    roof.material = stoneTexture2;
	    roof.receiveShadows = true;
	    roof.material.alpha = introoff
	    // intro

	    var wall =  BABYLON.Mesh.CreateBox('wall',1,scene);
	    wall.scaling.x = 0.5;
	    wall.scaling.z = 26;
	    wall.scaling.y = 14;
	    wall.checkCollisions = true;
	    wall.position.x = -13;
	    wall.position.y = 7;
	    wall.material = stoneTexture;
	    wall.receiveShadows = true;
	    wall.material.alpha = introoff
	    // intro

	    var wall1 = wall.createInstance('wall1')
	    wall1.position.x = 13;
	    wall1.checkCollisions = true;
	    wall1.receiveShadows = true;
	    wall1.material.alpha = introoff
	    // intro

	    
	    var sphere = BABYLON.Mesh.CreateSphere("sphere", 20, 3, scene);
	    sphere.position.x = 0; 
	    sphere.position.y = 6.3; 
	    sphere.position.z = 3; 
	    sphere.checkCollisions = true;
	    sphere.receiveShadows = true;
	    sphere.material = red;
	    sphere.material.alpha = introoff;
	    // intro

	    var lamp = BABYLON.Mesh.CreateSphere("lamp", 10, 1, scene);
	    lamp.position.x =0; 
	    lamp.position.y = 12; 
	    lamp.position.z = 0; 
	    lamp.checkCollisions = true;
	    lamp.material = light;
	    lamp.material.alpha = introoff;

	    var lamp1 = BABYLON.Mesh.CreateBox('lamp1',0.05,scene)
	    lamp1.position.y = 13; 
	    lamp1.position.z = 0; 
	    lamp1.position.x =0; 
	    lamp1.scaling.y = 50; 
	    lamp1.checkCollisions = true;
	    lamp1.receiveShadows = true;
	    lamp1.material= yellow;

	    var door = BABYLON.Mesh.CreateBox("door",  1, scene);
	    door.scaling.x = 5;
	    door.scaling.z = 0.40;
	    door.scaling.y = 9.45;
	    door.position.y = 4.95;
	    door.position.z = -13.1;
	    door.position.x = 0;
	    // intro
	    door.rotation.y = Math.PI/2;
	    door.checkCollisions = true;
	    door.material = doortexture;
	    door.receiveShadows = true;
	    door.material.alpha = 1;
	   	door.open = false;

	   	var walldeco1 =  BABYLON.Mesh.CreateBox('walldeco1',1,scene);
	    walldeco1.scaling.z = 3;
	    walldeco1.scaling.y = 3;
	    walldeco1.checkCollisions = true;
	    walldeco1.position.x = 13;
	    walldeco1.position.y = 10.5;
	    walldeco1.position.z = -1.5;
	    walldeco1.material = green;
	    walldeco1.receiveShadows = true;
	    walldeco1.material.alpha = introoff

	    var button =  BABYLON.Mesh.CreateBox('button',0.2,scene);
	    button.scaling.z = 1;
	    button.scaling.y = 0.5;
	    button.position.x = 12.55;
	    button.position.y =  3.5;
	    button.position.z =  2;
	    button.material = redon;
	    button.material.alpha = introoff

	    var radio = BABYLON.Mesh.CreateBox('radio',1,scene);
	    radio.position.x = -12.5;
	    radio.position.y = 7;
	    radio.position.z = -4;
	    radio.checkCollisions = true;

	    radio.scaling.z = 3;
	    radio.scaling.y = 2;
	    radio.receiveShadows = true;
	    radio.material = radio1;
	    radio.material.alpha = introoff
	    
	    var speaker = radio.clone('speaker1')
	    speaker.position.x = -12.48;
	    speaker.position.y = 7;
	    speaker.position.z = -0.95;
	    speaker.checkCollisions = true;

	    speaker.scaling.z = 2.78;
	    speaker.scaling.y = 1.78;
	   	speaker.receiveShadows = true;
	   	speaker.material = radio3;
	    speaker.material.alpha = introoff

	    var speaker1 = radio.clone('speaker2')
	    speaker1.position.x = -12.48;
	    speaker1.position.y = 7;
	    speaker1.position.z = -7.05;
	    speaker1.checkCollisions = true;

	    speaker1.scaling.z = 2.78;
	    speaker1.scaling.y = 1.78;
	   	speaker1.receiveShadows = true;
	   	speaker1.material = radio3;
	    speaker1.material.alpha = introoff;

	    var rb = BABYLON.Mesh.CreateBox('rb',.1,scene);
	    rb.position.x = -12;
	    rb.position.y = 6.5;
	    rb.position. z = -3;
		rb.material = radio2;
	    rb.material.alpha = introoff;

	    var rb1 = rb.createInstance('rb1')
	    rb1.position.x = -12;
	    rb1.position.y = 6.5;
	    rb1.position. z = -3.84;
		rb1.material = radio2;
	    rb1.material.alpha = introoff;

	    var rb2 = rb.createInstance('rb2')
	    rb2.position.x = -12;
	    rb2.position.y = 6.5;
	    rb2.position. z = -4.06;
		rb2.material = radio2;
	    rb2.material.alpha = introoff;

	    var rb3 = rb.createInstance('rb3')
	    rb3.position.x = -12;
	    rb3.position.y = 6.5;
	    rb3.position. z = -3.95;
		rb3.material = radio2;
	    rb3.material.alpha = introoff;

	    var rb4 = rb.clone('rb4')
	    rb4.position.x = -12;
	    rb4.position.y = 6.5;
	    rb4.position. z = -4.17;
		rb4.material = rr;
	    rb4.material.alpha = introoff;
	    

		var fix = BABYLON.Mesh.CreateBox('fix',1,scene);
	    fix.position.x = -11.85;
	    fix.position.y = 5.5;
	    fix.position.z = -11.85;

	    fix.scaling.z = 1;
	    fix.scaling.y = .1;
	    fix.receiveShadows = true;
	    fix.material = red;
	    fix.material.alpha = introoff;

	    var fix1 = fix.createInstance('fix1')
	    fix1.position.x = -11.85;
	    fix1.position.y = 4;
	    fix1.position.z = -11.85;

	    fix1.scaling.z = 1;
	    fix1.scaling.y = .1;
	    fix1.receiveShadows = true;
	    fix1.material = red;
	    fix1.material.alpha = introoff


	    var fix2 = fix.createInstance('fix2')
	    fix2.position.x = 9.5;
	    fix2.position.y = 4;
	    fix2.position.z = -9.5;

	    fix2.scaling.z = 1;
	    fix2.scaling.y = .1;
	    fix2.receiveShadows = true;
	    fix2.material = red;
	    fix2.material.alpha = introoff

	    var cv =  BABYLON.Mesh.CreateBox('cv',1,scene);
	    cv.position.x = 11;
	    cv.position.y = 4.3;
	    cv.position.z = -5;
		cv.scaling.x = 2;
	    cv.scaling.z = 1.3;
	    cv.scaling.y = .01;

	    cv.rotation.y = Math.PI*1.05

	    cv.receiveShadows = true;
	    cv.material = cvd;
	    cv.material.alpha = introoff


	    var lightbut = rb.clone('lightbut')
	    lightbut.position.x = 3.5;
	    lightbut.position.y =5;
	    lightbut.position. z = -12.75;
		lightbut.material = redon;
	    lightbut.material.alpha = introoff;
	    lightbut.turn = true;

	    var tv =  BABYLON.Mesh.CreateBox('tv',3,scene);
	    tv.position.x = 14.1;
	    tv.position.y = 6;
	    tv.position.z = 5;
	    tv.rotation.y = Math.PI/2;
	    tv.material = tvoff
	    tv.scaling.x = 2.68;
	    tv.scaling.y = 1.36;
	    tv.material.alpha = introoff;
	    tv.turn = false;

	    var pcscreen =  BABYLON.Mesh.CreateBox('pcscreen',1,scene);
	    pcscreen.position.x = 7.25;
	    pcscreen.position.y = 5.63;
	    pcscreen.position.z = -11.15;
	    pcscreen.rotation.y = 0;
	    pcscreen.material = tvoff;
	    pcscreen.scaling.x = 1.9;
	    pcscreen.scaling.y = 1;
	    pcscreen.scaling.z = 1;
	    pcscreen.material.alpha = introoff;
	    pcscreen.turn = false;

	    


	    var discanim = new BABYLON.Animation("discanim", "rotation.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var keys = []; 
		keys.push({
			frame: 0,
			value: 0
		});
		keys.push({
			frame: 300,
			value: Math.PI*2
		});
		discanim.setKeys(keys);
	
		var discanim2 = new BABYLON.Animation("discanim2", "rotation.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
		var keys = []; 
		keys.push({
			frame: 0,
			value: 0
		});
		keys.push({
			frame: 300,
			value: Math.PI*2
		});
		discanim2.setKeys(keys);

	    var axe = rb.clone('axe')
	    axe.position.x = -12.46;
	    axe.position.y = 7.5;
	    axe.position. z = -4.78;
		axe.material = redon;
	    axe.material.alpha = introoff;
	    axe.animations.push(discanim);

	    var axe2 = axe.clone('axe2')
	    axe2.position.x = -12.46;
	    axe2.position.y = 7.5;
	    axe2.position. z = -3.22;
		axe2.material = redon;
	    axe2.material.alpha = introoff;
	    axe2.animations.push(discanim2);

	    return scene

	}




var scene = createScene()







	//   Animation ..................................................................................

	var easingFunction = new BABYLON.CubicEase();
	easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
	var easingFunction2 = new BABYLON.CubicEase();
	easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEIN);
	var easingFunction3 = new BABYLON.CubicEase();
	easingFunction3.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);


	var anim = {}

	var open = new BABYLON.Animation("open", "rotation.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 	
	keys.push({
		frame: 0,
		value: 0
	});
	keys.push({
		frame: 120,
		value: -Math.PI /2
	});
	open.setKeys(keys);
	open.setEasingFunction(easingFunction);


	var close = new BABYLON.Animation("close", "rotation.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: -Math.PI/2
	});
	keys.push({
		frame: 350,
		value: -Math.PI/2
	});
	keys.push({
		frame: 900,
		value: 0
	});
	close.setKeys(keys);
	close.setEasingFunction(easingFunction);


	var alphaAnim = new BABYLON.Animation("alpha", "material.alpha", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: 0
	});
	keys.push({
		frame: 180,
		value: 1
	});
	alphaAnim.setKeys(keys);


	var doorRot1 = new BABYLON.Animation("doorRot1", "rotation.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: 0
	});
	keys.push({
		frame: 450,
		value: Math.PI * 2
	});
	doorRot1.setKeys(keys);

	var doorRot2 = new BABYLON.Animation("doorRot2", "rotation.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: Math.PI/2
	});
	keys.push({
		frame: 450,
		value: Math.PI*2
	});
	doorRot2.setKeys(keys);


	var camx = new BABYLON.Animation("cam1", "rotation.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: Math.PI/2.1
	});
	keys.push({
		frame: 450,
		value: Math.PI/2.1
	});
	keys.push({
		frame: 900,
		value: 0
	});
	camx.setKeys(keys);
	camx.setEasingFunction(easingFunction);


	var camy = new BABYLON.Animation("camy", "rotation.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: Math.PI
	});
	keys.push({
		frame: 530,
		value: Math.PI/2
	});
	keys.push({
		frame: 1080,
		value: 0
	});
	camy.setKeys(keys);


	var wait = new BABYLON.Animation("wait", "rotation.y", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: 0
	});
	keys.push({
		frame: 180,
		value: 0
	});
	wait.setKeys(keys);

	var camfor1 = new BABYLON.Animation("camfor1", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: -100
	});
	keys.push({
		frame: 800,
		value: -100
	});
	keys.push({
		frame: 1800,
		value: -17.7
	});
	camfor1.setKeys(keys);

	var camfor2 = new BABYLON.Animation("camfor2", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: -17.7
	});
	keys.push({
		frame: 450,
		value: 0
	});
	camfor2.setKeys(keys);
	// camfor2.setEasingFunction(easingFunction);


	var sphere1anim = new BABYLON.Animation("sphere1", "position.x", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: 0
	});
	keys.push({
		frame: 180,
		value: 0
	});
	keys.push({
		frame: 720,
		value: -9
	});
	keys.push({
		frame: 1350,
		value: 0
	});
	sphere1anim.setKeys(keys);

	var sphere2anim = new BABYLON.Animation("sphere2anim", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: 3
	});
	keys.push({
		frame: 180,
		value: 3
	});
	keys.push({
		frame: 800,
		value: -3
	});

	keys.push({
		frame: 1350,
		value: -9
	});
	sphere2anim.setKeys(keys);

	var sphere3anim = new BABYLON.Animation("sphere3anim", "position.z", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
	var keys = []; 
	keys.push({
		frame: 0,
		value: -9
	});
	keys.push({
		frame: 900,
		value:-30
	});
	sphere3anim.setKeys(keys);






	anim.d1 = doorRot1;
	anim.d2 = doorRot2;
	anim.camx = camx;
	anim.camy = camy;
	anim.camfor1 = camfor1;
	anim.camfor2 = camfor2;

	anim.sphere1 = sphere1anim
	anim.sphere2 = sphere2anim
	anim.sphere3 = sphere3anim


	anim.wait = wait;

	anim.alpha = alphaAnim;
	anim.open = open;
	anim.close = close;
















// GAMEPLAY ..................................................................


var gameplay = function(nscope){

	var book = [nscope.good,nscope.flatland,nscope.grid,nscope.ctu,nscope.murani,nscope.king,nscope.k,nscope.apple,nscope.color,nscope.golden]
	var mag = [nscope.mag1,nscope.mag2]
	var cv = scene.getMeshByName('cv')
	var radio = [nscope.radframe,nscope.radframe2,nscope.disc,nscope.disc2,scene.getMeshByName('radio'),scene.getMeshByName('speaker1'),scene.getMeshByName('speaker2'),scene.getMeshByName('rb'),scene.getMeshByName('rb1'),scene.getMeshByName('rb2'),scene.getMeshByName('rb3'),scene.getMeshByName('rb4')]
	var computer = [nscope.pcf,nscope.keyboard,scene.getMeshByName('pcscreen')]
	var tv = [scene.getMeshByName('button'),nscope.tv,scene.getMeshByName('tv')]

	cv.actionManager = new BABYLON.ActionManager(scene);
	cv.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(evt){
		scene.can.children[1].text = "Press 'E' to Grab"
		document.onkeypress = function(e){
			if(e.charCode == 101 ||e.charCode == 69 ){
				scene.soundlib.booksound.play()

				var cam = scene.cameras[0].position
				var mesh = evt.source.position
				var meshrot = evt.source.rotation
				evt.source.position = new BABYLON.Vector3(10000, 10000, 10001.5)
				scene.cameras[0].inertia = 0
				scene.cameras[0].speed = 0;
				scene.cameras[0].applyGravity = false;
				scene.cameras[0].position = new BABYLON.Vector3(10000,10000,10000)
				scene.cameras[0].lockedTarget = new BABYLON.Vector3(10000, 10000, 10001.5)
				scene.lights[0].parent = scene.cameras[0]
				scene.lights[0].position = new BABYLON.Vector3(0,0,0)
				evt.source.actionManager = '';

				evt.source.rotation = {x:0,y:Math.PI/2,z:Math.PI/2}

				func3(cam,evt, mesh,meshrot)
			}
		}
	}))

	cv.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
		scene.can.children[1].text = ''
		document.onkeypress = '';
	}))


	var func3 = function(cam, evt, mesh,meshrot){
		scene.can.children[1].text = "Press 'E' to Turn Over - Press 'A' to Put Back"
		var turn = false;
		document.onkeypress = function(e){



			if(e.charCode == 97 ||e.charCode == 65 ){
				scene.soundlib.booksound.play()
				scene.cameras[0].lockedTarget = null;
				scene.cameras[0].position = cam
				scene.cameras[0].inertia = 0.9;
				scene.cameras[0].speed = 0.85;
				scene.cameras[0].applyGravity = true;
				scene.lights[0].parent = null;
				scene.lights[0].position = new BABYLON.Vector3(0,11,0)
				evt.source.position = mesh;
				evt.source.rotation = meshrot;
				document.onkeypress = '';
				scene.can.children[1].text = ""
				evt.source.actionManager = new BABYLON.ActionManager(scene);
				evt.source.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(aa){
					scene.can.children[1].text = "Press 'E' to Grab"
					document.onkeypress = function(e){
						if(e.charCode == 101 ||e.charCode == 69 ){
							scene.soundlib.booksound.play()
		
							var cam = scene.cameras[0].position
							var mesh = aa.source.position
							var meshrot = aa.source.rotation
							aa.source.position = new BABYLON.Vector3(10000, 10000, 10001.5)
							scene.cameras[0].inertia = 0
							scene.cameras[0].speed = 0;
							scene.cameras[0].applyGravity = false;
							scene.cameras[0].position = new BABYLON.Vector3(10000,10000,10000)
							scene.cameras[0].lockedTarget = new BABYLON.Vector3(10000, 10000, 10001.5)
							scene.lights[0].parent = scene.cameras[0]
							scene.lights[0].position = new BABYLON.Vector3(0,0,0)
							aa.source.actionManager = null;
		
							aa.source.rotation = {x:0,y:Math.PI/2,z:Math.PI/2}
		
							func3(cam,aa, mesh,meshrot)
						}
					}
				}))
		
				evt.source.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
					scene.can.children[1].text = ''
					document.onkeypress = '';
				}))

				// console.log(evt.source.actionManager)
				return			
			}
		}
	
	}


	for(var i = 0; i<book.length; i++){
		book[i].actionManager = new BABYLON.ActionManager(scene);

		book[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(evt){
			scene.can.children[1].text = "Press 'E' to Grab"
			document.onkeypress = function(e){
				if(e.charCode == 101 ||e.charCode == 69 ){
					scene.soundlib.booksound.play()

					var cam = scene.cameras[0].position
					var mesh = evt.source.position
					var meshrot = evt.source.rotation
					evt.source.position = new BABYLON.Vector3(10000, 10000.25, 10001.5)
					scene.cameras[0].inertia = 0
					scene.cameras[0].speed = 0;
					scene.cameras[0].applyGravity = false;
					scene.cameras[0].position = new BABYLON.Vector3(10000,10000,10000)
					scene.cameras[0].lockedTarget = new BABYLON.Vector3(10000, 10000, 10001.5)
					scene.lights[0].parent = scene.cameras[0]
					scene.lights[0].position = new BABYLON.Vector3(0,0,0)
					evt.source.actionManager = '';

					evt.source.rotation = {x:-Math.PI/2,y:0,z:0}

					func(cam,evt, mesh,meshrot)
				}
			}
		}))

		book[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
			scene.can.children[1].text = ''
			document.onkeypress = '';
		}))
	}

	var func = function(cam, evt, mesh,meshrot){
		scene.can.children[1].text = "Press 'E' to Turn Over - Press 'A' to Put Back"
		var turn = false;
		document.onkeypress = function(e){

			if(e.charCode == 101 && turn == false ||e.charCode == 69 && turn == false){
				turn = true;
				scene.soundlib.booksound.play()
				evt.source.rotation = {x:-Math.PI/2,y:Math.PI,z:0}
				evt.source.position = new BABYLON.Vector3(10000, 10000.25, 10000.8)
			}else if(e.charCode == 101 && turn == true ||e.charCode == 69 && turn == true){
				turn = false;
				scene.soundlib.booksound.play()
				evt.source.rotation = {x:-Math.PI/2,y:0,z:0}
				evt.source.position = new BABYLON.Vector3(10000, 10000.25, 10001.5)
			}

			if(e.charCode == 97 ||e.charCode == 65 ){
				scene.soundlib.booksound.play()
				scene.cameras[0].lockedTarget = null;
				scene.cameras[0].position = cam
				scene.cameras[0].inertia = 0.9;
				scene.cameras[0].speed = 0.85;
				scene.cameras[0].applyGravity = true;
				scene.lights[0].parent = null;
				scene.lights[0].position = new BABYLON.Vector3(0,11,0)
				evt.source.position = mesh;
				evt.source.rotation = meshrot;
				document.onkeypress = '';
				scene.can.children[1].text = ""
				evt.source.actionManager = new BABYLON.ActionManager(scene);
				evt.source.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(aa){
					scene.can.children[1].text = "Press 'E' to Grab"
					document.onkeypress = function(e){
						if(e.charCode == 101 ||e.charCode == 69 ){
							scene.soundlib.booksound.play()
		
							var cam = scene.cameras[0].position
							var mesh = aa.source.position
							var meshrot = aa.source.rotation
							aa.source.position = new BABYLON.Vector3(10000, 10000.25, 10001.5)
							scene.cameras[0].inertia = 0
							scene.cameras[0].speed = 0;
							scene.cameras[0].applyGravity = false;
							scene.cameras[0].position = new BABYLON.Vector3(10000,10000,10000)
							scene.cameras[0].lockedTarget = new BABYLON.Vector3(10000, 10000, 10001.5)
							scene.lights[0].parent = scene.cameras[0]
							scene.lights[0].position = new BABYLON.Vector3(0,0,0)
							aa.source.actionManager = null;
		
							aa.source.rotation = {x:-Math.PI/2,y:0,z:0}
		
							func(cam,aa, mesh,meshrot)
						}
					}
				}))
		
				evt.source.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
					scene.can.children[1].text = ''
					document.onkeypress = '';
				}))

				// console.log(evt.source.actionManager)
				return			
			}
		}
	
	}

	for(var i = 0; i<mag.length; i++){
		mag[i].actionManager = new BABYLON.ActionManager(scene);

		mag[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(evt){
			scene.can.children[1].text = "Press 'E' to Grab"
			document.onkeypress = function(e){
				if(e.charCode == 101 ||e.charCode == 69 ){
					scene.soundlib.booksound.play()

					var cam = scene.cameras[0].position
					var mesh = evt.source.position
					var meshrot = evt.source.rotation
					evt.source.position = new BABYLON.Vector3(10000, 10000.4, 10001.5)
					scene.cameras[0].inertia = 0
					scene.cameras[0].speed = 0;
					scene.cameras[0].applyGravity = false;
					scene.cameras[0].position = new BABYLON.Vector3(10000,10000,10000)
					scene.cameras[0].lockedTarget = new BABYLON.Vector3(10000, 10000, 10001.5)
					scene.lights[0].parent = scene.cameras[0]
					scene.lights[0].position = new BABYLON.Vector3(0,0,0)
					evt.source.actionManager = '';

					evt.source.rotation = {x:-Math.PI/2,y:0,z:0}

					func2(cam,evt, mesh,meshrot)
				}
			}
		}))

		mag[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
			scene.can.children[1].text = ''
			document.onkeypress = '';
		}))
	}

	var func2 = function(cam, evt, mesh,meshrot){
		scene.can.children[1].text = "Press 'E' to Turn Over - Press 'A' to Put Back"
		var turn = false;
		document.onkeypress = function(e){

			if(e.charCode == 101 && turn == false ||e.charCode == 69 && turn == false){
				turn = true;
				scene.soundlib.booksound.play()
				evt.source.rotation = {x:-Math.PI/2,y:Math.PI,z:0}
				evt.source.position = new BABYLON.Vector3(10000, 10000.4, 10001.4)
			}else if(e.charCode == 101 && turn == true ||e.charCode == 69 && turn == true){
				turn = false;
				scene.soundlib.booksound.play()
				evt.source.rotation = {x:-Math.PI/2,y:0,z:0}
				evt.source.position = new BABYLON.Vector3(10000, 10000.4, 10001.5)
			}

			if(e.charCode == 97 ||e.charCode == 65 ){
				scene.soundlib.booksound.play()
				scene.cameras[0].lockedTarget = null;
				scene.cameras[0].position = cam
				scene.cameras[0].inertia = 0.9;
				scene.cameras[0].speed = 0.85;
				scene.cameras[0].applyGravity = true;
				scene.lights[0].parent = null;
				scene.lights[0].position = new BABYLON.Vector3(0,11,0)
				evt.source.position = mesh;
				evt.source.rotation = meshrot;
				document.onkeypress = '';
				scene.can.children[1].text = ""
				evt.source.actionManager = new BABYLON.ActionManager(scene);
				evt.source.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(aa){
					scene.can.children[1].text = "Press 'E' to Grab"
					document.onkeypress = function(e){
						if(e.charCode == 101 ||e.charCode == 69 ){
							scene.soundlib.booksound.play()
		
							var cam = scene.cameras[0].position
							var mesh = aa.source.position
							var meshrot = aa.source.rotation
							aa.source.position = new BABYLON.Vector3(10000, 10000.4, 10001.5)
							scene.cameras[0].inertia = 0
							scene.cameras[0].speed = 0;
							scene.cameras[0].applyGravity = false;
							scene.cameras[0].position = new BABYLON.Vector3(10000,10000,10000)
							scene.cameras[0].lockedTarget = new BABYLON.Vector3(10000, 10000, 10001.5)
							scene.lights[0].parent = scene.cameras[0]
							scene.lights[0].position = new BABYLON.Vector3(0,0,0)
							aa.source.actionManager = null;
		
							aa.source.rotation = {x:-Math.PI/2,y:0,z:0}
		
							func2(cam,aa, mesh,meshrot)
						}
					}
				}))
		
				evt.source.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
					scene.can.children[1].text = ''
					document.onkeypress = '';
				}))

				// console.log(evt.source.actionManager)
				return			
			}
		}
	
	}





	for(var i = 0; i<radio.length; i++){
		radio[i].actionManager = new BABYLON.ActionManager(scene);

		radio[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(){
			scene.can.children[1].text = "Press 'E' to Play - Press 'A' to Stop"
			document.onkeypress = function(e){
				if(e.charCode == 101 && scene.soundlib.song.isPlaying == false ||e.charCode == 69 && scene.soundlib.song.isPlaying == false){
					scene.soundlib.song.play()
					scene.soundlib.button.play()
					if(scene.an){
						scene.an.restart() 
						scene.an1.restart()
					}else{
						scene.an = scene.beginAnimation(scene.getMeshByName('axe'),0,300,true)
						scene.an1 = scene.beginAnimation(scene.getMeshByName('axe2'),0,300,true)						
					}
				}
				if(e.charCode == 97 ||e.charCode == 65 ){
					scene.soundlib.song.stop()
					scene.soundlib.button.play()
					scene.an.pause() 
					scene.an1.pause()
				}
			}
		}))

		radio[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
			scene.can.children[1].text = ''
			document.onkeypress = '';
		}))
	}
	

	for(var i = 0; i<computer.length; i++){
		computer[i].actionManager = new BABYLON.ActionManager(scene);

		computer[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(){
			scene.can.children[1].text = "Press 'E' to Turn ON - Press 'A' to Turn OFF"
			document.onkeypress = function(e){
				
				if(e.charCode == 101 ||e.charCode == 69){
					scene.soundlib.tv.play()
					scene.tex.ppctex.diffuseTexture.video.play()
					scene.getMeshByName('pcscreen').material = scene.tex.ppctex
					pcon = true;
					
				}
				if(e.charCode == 97 ||e.charCode == 65 ){
					scene.soundlib.tv.play()
					scene.tex.ppctex.diffuseTexture.video.pause()
					scene.getMeshByName('pcscreen').material = scene.tex.tvoff
					pcon = false;
					
				}
			}
		}))

		computer[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
			scene.can.children[1].text = ''
			document.onkeypress = '';
		}))
	}

	for(var i = 0; i<tv.length; i++){
		tv[i].actionManager = new BABYLON.ActionManager(scene);

		tv[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(){
			scene.can.children[1].text = "Press 'E' to Turn ON - Press 'A' to turn OFF"
			document.onkeypress = function(e){
				if(e.charCode == 101 ||e.charCode == 69 ){
					scene.soundlib.tv.play()
					scene.getMeshByName('tv').material = scene.tex.tele
					scene.tex.tele.diffuseTexture.video.play()
					scene.getMeshByName('button').material = scene.tex.greenon
					scene.getMeshByName('tv').turn = true;
					if(scene.getMeshByName('lightbut').turn == false){
						scene.lights[0].diffuse = new BABYLON.Color3.FromInts(44, 117, 255)
						scene.lights[0].position.x = 13;
						scene.lights[0].position.y = 5;
						scene.lights[0].position.z = 7;
						scene.lights[0].intensity = 0.15;
					}
				}
				if(e.charCode == 97 ||e.charCode == 65 ){
					scene.soundlib.tv.play()
					scene.tex.tele.diffuseTexture.video.pause()
					scene.getMeshByName('tv').material = scene.tex.tvoff
					scene.getMeshByName('button').material = scene.tex.redon
					scene.getMeshByName('tv').turn = false;
					if(scene.getMeshByName('lightbut').turn == false){
						scene.lights[0].intensity = 0.05;
						scene.lights[0].diffuse = new BABYLON.Color3(1, 1, 1)
					}
				}
			}
		}))
		tv[i].actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
			scene.can.children[1].text = ''
			document.onkeypress = '';
		}))
	}


	scene.getMeshByName('lightbut').actionManager = new BABYLON.ActionManager(scene);
	scene.getMeshByName('lightbut').actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function(){
		scene.can.children[1].text = "Press 'E' to Turn on/off the Light";
		document.onkeypress = function(e){
			if(e.charCode == 101 ||e.charCode == 69){
				scene.soundlib.button.play()
				if(scene.getMeshByName('lightbut').turn == true){
					if(scene.getMeshByName('tv').turn == true) {}
					scene.getMeshByName('lightbut').material = scene.tex.greenon
					scene.lights[0].intensity = 0.05;
					scene.getMeshByName('lamp').material.emissiveColor = new BABYLON.Color3(0,0,0)
					scene.getMeshByName('lightbut').turn = false;
					if(scene.getMeshByName('tv').turn == true) {						
						scene.lights[0].diffuse = new BABYLON.Color3.FromInts(44, 117, 255)
						scene.lights[0].position.x = 13;
						scene.lights[0].position.y = 5;
						scene.lights[0].position.z = 7;
						scene.lights[0].intensity = 0.15;
					}					
				}else{
					scene.soundlib.button.play()
					scene.getMeshByName('lightbut').turn = true;
					scene.getMeshByName('lightbut').material = scene.tex.redon
					scene.lights[0].intensity = 0.65;
					scene.lights[0].diffuse = new BABYLON.Color3(1, 1, 1)
					scene.lights[0].position.x = 0;
					scene.lights[0].position.y = 11;
					scene.lights[0].position.z = 0;

					scene.getMeshByName('lamp').material.emissiveColor = new BABYLON.Color3(1,1,1)					
				}
			}
		}
	}))
	scene.getMeshByName('lightbut').actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function(){
		scene.can.children[1].text = ''
	}))


}


// execute when all mesh are load .....................................................................

var delayTab = 0
var meshspec = {};

var delay = function(nscope){
	var inter = setInterval(function(){
		$('#pwrap span').html(parseInt((100/32)*delayTab) + '%')
		if(delayTab == 32){
			$('#pwrap span').html('PLAY')
			clearInterval(inter)
			setTimeout(function(){
				startwait(nscope)	

			},500)
		}
	},10)
}
delay(meshspec)



var startwait = function(nscope){
	$('#pwrap span').click(function(){
		this.remove();
		$(window).off('mousemove')
		load(nscope);
	})
}


var loadsound = function(nscope){

	scene.soundlib = {}

	var booksound = new BABYLON.Sound('book', 'sound/button.mp3', scene, function(){
		booksound.setVolume(0.07);
		scene.soundlib.booksound = booksound;
		scene.soundlib.booksound.load = true;	
		delayTab++
	})

	var sound1 = new BABYLON.Sound('fd', 'sound/sd.mp3', scene, function(){
		sound1.setVolume(0.2);
		scene.soundlib.song = sound1;
		delayTab++		
	})

	var button = new BABYLON.Sound('sd', 'sound/book.mp3', scene, function(){
		button.setVolume(0.1);
		scene.soundlib.button = button;
		delayTab++
		
	})

	var tvbut = new BABYLON.Sound('sound1', 'sound/tv.mp3', scene, function(){
		tvbut.setVolume(0.3);
		scene.soundlib.tv = tvbut;
		delayTab++
		
	})

	var introsound = new BABYLON.Sound('intro', 'sound/intro.mp3', scene, function(){
		scene.soundlib.intro = introsound	
		delayTab++	
	})
}






var load = function(nscope){
	// shadow setup
	
	var shadowGenerator3 = new BABYLON.ShadowGenerator(1024, scene.lights[0]);
	shadowGenerator3.getShadowMap().renderList.push(scene.getMeshByName('door'), scene.getMeshByName('sphere'), scene.getMeshByName('cube'),nscope.walldoor,nscope.doorframe,nscope.bed,nscope.mat,nscope.sta,nscope.sta2,nscope.sta3,nscope.pcf, nscope.test,scene.getMeshByName('radio'),scene.getMeshByName('speaker2'),scene.getMeshByName('speaker1'),scene.getMeshByName('fix'),scene.getMeshByName('fix1'),scene.	getMeshByName('fix2'),nscope.radframe,nscope.radframe2)
	
		var alphatab3 = [nscope.good,nscope.flatland,nscope.grid,nscope.ctu,nscope.murani,nscope.king,nscope.k,nscope.apple,nscope.color,nscope.golden,nscope.mag1,nscope.mag2,nscope.disc,nscope.pcf,nscope.keyboard]

		for(var i = 0; i<alphatab3.length;i++){
			for(var y = 0; y <alphatab3[i].material.subMaterials.length; y++){
				alphatab3[i].material.subMaterials[y].alpha = introoff
			}
		}
	
	engine.runRenderLoop(function() {
		scene.render();
	});


	setTimeout(function(){
		intro(nscope)		
	},2000)

	
	  // Watch for browser/canvas resize events
	window.addEventListener("resize", function () {
	  engine.resize();
	});
}




// custom mesh loading ...............................................................................
loadsound(meshspec);

BABYLON.SceneLoader.ImportMesh("", "mesh/walldoor/", "yo.babylon", scene, function (newMeshes) {

	var walldoor = newMeshes[1];
	walldoor.position.z = -13;
	walldoor.position.y = 6;
	walldoor.checkCollisions = true;
	walldoor.receiveShadows = true;
	walldoor.material = scene.tex.stoneTexturedup;
	walldoor.material.alpha = introoff
	// intro
	meshspec.walldoor = walldoor;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/framedoor/", "doorframe.babylon", scene, function (newMeshes){
	
	var doorframe = newMeshes[1];
	doorframe.position.z = -13;
	doorframe.position.y = 5.3;
	doorframe.position.x = -0.3;
	doorframe.checkCollisions = true;
	doorframe.receiveShadows = true;
	doorframe.material = scene.tex.doorframetexture;
	doorframe.material.alpha = introoff
	// intro
	meshspec.doorframe = doorframe;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/backwall/", "backwall.babylon", scene, function (newMeshes){
	var backwall = newMeshes[1];
	backwall.position.z = 5;
	backwall.position.y = 6;
	backwall.checkCollisions = true;
	backwall.receiveShadows = true;
	backwall.material = scene.tex.stoneTexture;
	backwall.material.alpha = introoff
	// intro
	meshspec.backwall = backwall;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/backwall/", "frame.babylon", scene, function (newMeshes){
	var backwallframe = newMeshes[0];
	backwallframe.position.z = 13;
	backwallframe.position.y = 7;
	backwallframe.checkCollisions = true;
	backwallframe.receiveShadows = true;
	backwallframe.material = scene.tex.doorframetexture;
	backwallframe.material.alpha = introoff
	// intro
	meshspec.backwallframe = backwallframe;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/plainte/", "plainte.babylon", scene, function (newMeshes){
	var plainte = newMeshes[0]
	plainte.position.z = 13;
	plainte.position.y = 7;
	plainte.checkCollisions = true;
	plainte.receiveShadows = true;
	plainte.material = scene.tex.doorframetexture2;
	plainte.rotationQuaternion = null; 
	
	 plainte.material.alpha = introoff
	//  intro
	meshspec.plainte = plainte;
	delayTab++	

	var plainte2 = plainte.createInstance('plainte2')
	plainte2.position.y = 7;
	plainte2.position.z = 0;
	plainte2.position.x = 13;
	plainte2.rotation.y = Math.PI/2;
	plainte.checkCollisions = true;
	plainte2.receiveShadows = true;
	 plainte2.material.alpha = introoff
	//  intro
	meshspec.plainte2 = plainte2;

	var plainte3 = plainte.createInstance('plainte3')
	plainte3.position.y = 7;
	plainte3.position.z = 0;
	plainte3.position.x = -13;
	plainte3.rotation.y = Math.PI/2;
	plainte3.checkCollisions = true;
	plainte3.receiveShadows = true;
	 plainte3.material.alpha = introoff
	//  intro
	meshspec.plainte3 = plainte3;

	var plainte4 = plainte.createInstance('plainte4')
	plainte4.scaling.x = 0.4;
	plainte4.position.y = 7;
	plainte4.position.z = -13.11;
	plainte4.position.x = 8.16;
	plainte4.checkCollisions = true;
	plainte4.receiveShadows = true;
	 plainte4.material.alpha = introoff
	//  intro
	meshspec.plainte4 = plainte4;

	var plainte5 = plainte.createInstance('plainte5')
	plainte5.scaling.x = 0.4;
	plainte5.position.y = 7;
	plainte5.position.z = -13.11;
	plainte5.position.x = -8.16;
	plainte5.checkCollisions = true;
	plainte5.receiveShadows = true;
	 plainte5.material.alpha = introoff
	//  intro
	meshspec.plainte5 = plainte5;
})

BABYLON.SceneLoader.ImportMesh("", "mesh/lamp/", "lamp.babylon", scene, function (newMeshes){
	var lampa = newMeshes[0]
	lampa.position.z = 0;
	lampa.position.x =0;
	lampa.position.y = 12.1;
	lampa.checkCollisions = true;
	lampa.receiveShadows = true;
	lampa.material = scene.tex.yellow;
	lampa.rotationQuaternion = null; 
	
	 lampa.material.alpha = introoff
	//  intro
	meshspec.lampa = lampa;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/bed/", "bed.babylon", scene, function (newMeshes){
	
	var bed = newMeshes[0]
	bed.position.z = 6.9;
	bed.position.x =-5;
	bed.rotation.z =Math.PI;
	bed.position.y = 1.5;
	bed.checkCollisions = true;
	bed.receiveShadows = true;
	bed.material = scene.tex.darkblue;
	bed.rotationQuaternion = null; 
	
	 bed.material.alpha = introoff
	//  intro
	meshspec.bed = bed;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/tv/", "tv.babylon", scene, function (newMeshes){
	var tv = newMeshes[0]
	tv.position.z = 5;
	tv.position.x =13;
	tv.position.y = 5.7;
	tv.rotation.y = Math.PI/2;
	tv.checkCollisions = true;
	tv.receiveShadows = true;
	tv.material = scene.tex.doorframetexture2;
	tv.rotationQuaternion = null; 
	
	 tv.material.alpha = introoff
	//  intro
	meshspec.tv = tv;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/sta/", "staple.babylon", scene, function (newMeshes){
	var sta = newMeshes[0]
	sta.position.z =-10.9;
	sta.position.x = 6.9;
	sta.position.y = 4;
	sta.rotation.y = Math.PI;
	sta.checkCollisions = true;
	sta.receiveShadows = true;
	sta.material = scene.tex.red;
	sta.rotationQuaternion = null; 
	
	 sta.material.alpha = introoff
	//  intro
	meshspec.sta = sta;
	delayTab++	

	var sta2 = sta.clone('sta2')
	sta2.position.z =-10.7;
	sta2.position.x = -12.1;
	sta2.position.y = 5.5;
	sta2.scaling.x = 0.35;
	sta2.scaling.z = 0.35;
	sta2.scaling.y = 0.35;
	sta2.rotation.y = -Math.PI/2;
	sta2.checkCollisions = true;
	sta2.receiveShadows = true;
	sta2.material = scene.tex.red;
	sta2.rotationQuaternion = null; 
	
	sta2.material.alpha = introoff
	//  intro
	meshspec.sta2 = sta2;

	var sta3 = sta.clone('sta3')
	sta3.position.z =-10.7;
	sta3.position.x = -12.1;
	sta3.position.y = 4;
	sta3.scaling.x = 0.35;
	sta3.scaling.z = 0.35;
	sta3.scaling.y = 0.35;
	sta3.rotation.y = -Math.PI/2;
	sta3.checkCollisions = true;
	sta3.receiveShadows = true;
	sta3.material = scene.tex.yellow;
	sta3.rotationQuaternion = null; 
	
	sta3.material.alpha = introoff
	//  intro
	meshspec.sta3 = sta3;
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/good/", "good.babylon", scene, function (newMeshes){

	good = newMeshes[0]
	good.scaling.x = 0.35;
	good.scaling.z = 0.35;
	good.scaling.y = 0.35;
	good.position.y = 6.5;
	good.position.z = -11.7;
	good.position.x = -12.3;
	good.rotation.x = -Math.PI/2
	good.rotation.y = Math.PI
	good.receiveShadows = true;
	good.rotationQuaternion = null; 
	

	//  intro
	meshspec.good = good;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/flatland/", "flatland.babylon", scene, function (newMeshes){

	flatland = newMeshes[0]
	flatland.scaling.x = 0.35;
	flatland.scaling.z = 0.35;
	flatland.scaling.y = 0.35;
	flatland.position.y = 2.8;
	flatland.position.z = 2;
	flatland.position.x = -12;
	flatland.rotation.y = -Math.PI/3.9
	flatland.receiveShadows = true;
	flatland.rotationQuaternion = null; 
	
	//  intro
	meshspec.flatland = flatland;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/grid/", "grid.babylon", scene, function (newMeshes){

	grid = newMeshes[0]
	grid.scaling.x = 0.35;
	grid.scaling.z = 0.35;
	grid.scaling.y = 0.35;
	grid.position.y = 3.8;
	grid.position.z = -11.6;
	grid.position.x = -11.8;
	grid.rotation.y = -Math.PI/1.15
	grid.receiveShadows = true;
	grid.rotationQuaternion = null; 
	
	// grid.material.alpha = introoff
	//  intro
	meshspec.grid = grid;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/lovecraft/", "ctu.babylon", scene, function (newMeshes){

	ctu = newMeshes[0]
	ctu.scaling.x = 0.35;
	ctu.scaling.z = 0.35;
	ctu.scaling.y = 0.35;
	ctu.position.y = 5.38;
	ctu.position.z = -12;
	ctu.position.x = -9.3;	
					
	ctu.rotation.y = Math.PI/2
	ctu.receiveShadows = true;
	ctu.rotationQuaternion = null; 
	
	//  intro
	meshspec.ctu = ctu;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/murani/", "murani.babylon", scene, function (newMeshes){

	murani = newMeshes[0]
	murani.scaling.x = 0.35;
	murani.scaling.z = 0.35;
	murani.scaling.y = 0.35;
	murani.position.y = 4.2;
	murani.position.z = -2;	
	murani.position.x = 11;					
	murani.rotation.y = -Math.PI*3.7
	murani.receiveShadows = true;
	murani.rotationQuaternion = null; 
	
	//  intro
	meshspec.murani = murani;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/king/", "king.babylon", scene, function (newMeshes){

	king = newMeshes[0]
	king.scaling.x = 0.35;
	king.scaling.z = 0.35;
	king.scaling.y = 0.35;
	king.position.y = 6.5;
	king.position.z = -11.3;
	king.position.x = -12.3;
	king.rotation.x = -Math.PI/2
	king.rotation.y = Math.PI
	king.receiveShadows = true;
	king.rotationQuaternion = null; 
	
	king.material.alpha = introoff
	//  intro
	meshspec.king = king;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/k/", "k.babylon", scene, function (newMeshes){

	k = newMeshes[0]
	k.scaling.x = 0.35;
	k.scaling.z = 0.35;
	k.scaling.y = 0.35;
	k.position.y = 0;
	k.position.z = 2.25;
	k.position.x = -10.6
	// k.rotation.x = -Math.PI/2
	k.rotation.y = -Math.PI/3
	k.receiveShadows = true;
	k.rotationQuaternion = null; 
	
	k.material.alpha = introoff
	//  intro
	meshspec.k = k;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/apple/", "apple.babylon", scene, function (newMeshes){

	apple = newMeshes[0]
	apple.scaling.x = 0.35;
	apple.scaling.z = 0.35;
	apple.scaling.y = 0.35;
	apple.position.y = 6.5;
	apple.position.z = -11.5;
	apple.position.x = -12.3;
	apple.rotation.x = -Math.PI/2
	apple.rotation.y = Math.PI
	apple.receiveShadows = true;
	apple.rotationQuaternion = null; 
	
	apple.material.alpha = introoff
	//  intro
	meshspec.apple = apple;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/color/", "color.babylon", scene, function (newMeshes){

	color = newMeshes[0]
	color.scaling.x = 0.3;
	color.scaling.z = 0.3;
	color.scaling.y = 0.3;
	color.position.y = 4.9;
	color.position.z = -11;
	color.position.x = -12.9;
	color.rotation.x = -Math.PI/2.3
	color.rotation.y = -Math.PI/2;

	color.receiveShadows = true;
	color.rotationQuaternion = null; 
	
	color.material.alpha = introoff
	//  intro
	meshspec.color = color;
	delayTab++	
})


BABYLON.SceneLoader.ImportMesh("", "mesh/book/golden/", "golden.babylon", scene, function (newMeshes){

	golden = newMeshes[0]
	golden.scaling.x = 0.35;
	golden.scaling.z = 0.35;
	golden.scaling.y = 0.35;
	golden.position.y = 4;
	golden.position.z = -2;
	golden.position.x = 11;
	
	golden.rotation.y = Math.PI/5
	golden.receiveShadows = true;
	golden.rotationQuaternion = null; 
	
	golden.material.alpha = introoff
	//  intro
	meshspec.golden = golden;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/mag1/", "mag1.babylon", scene, function (newMeshes){

	mag1 = newMeshes[0]
	mag1.scaling.x = 0.5;
	mag1.scaling.z = 0.5;
	mag1.scaling.y = 0.04;
	mag1.position.y = 0.45;
	mag1.position.z = -0.45;
	mag1.position.x = -11;
	
	mag1.rotation.y = -Math.PI/1.7
	mag1.receiveShadows = true;
	mag1.rotationQuaternion = null; 
	

	//  intro
	meshspec.mag1 = mag1;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/book/mag2/", "mag2.babylon", scene, function (newMeshes){

	mag2 = newMeshes[0]
	mag2.scaling.x = 0.5;
	mag2.scaling.z = 0.5;
	mag2.scaling.y = 0.04;
	mag2.position.y = 4.3;
	mag2.position.z = -9;
	mag2.position.x = 10;
	
	mag2.rotation.y = Math.PI/1.5
	mag2.receiveShadows = true;
	mag2.rotationQuaternion = null; 
	
	
	//  intro
	meshspec.mag2 = mag2;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/radio/", "frameradio.babylon", scene, function (newMeshes){

	radframe = newMeshes[0]
	radframe.scaling.x = 1;
	radframe.scaling.z = 1;
	radframe.scaling.y = 1;
	radframe.position.y = 7;
	radframe.position.z = -0.95;
	radframe.position.x = -12.5;
	radframe.materials = scene.tex.radio2;
	
	radframe.receiveShadows = true;
	radframe.rotationQuaternion = null; 
	
	radframe.materials.alpha = introoff
	//  intro
	meshspec.radframe = radframe;
	delayTab++	

	radframe2 = radframe.clone('radframe2')
	radframe2.scaling.x = 1;
	radframe2.scaling.z = 1;
	radframe2.scaling.y = 1;
	radframe2.position.y = 7;
	radframe2.position.z = -7.05;
	radframe2.position.x = -12.5;
	
	radframe2.receiveShadows = true;
	radframe2.rotationQuaternion = null; 
	
	radframe2.material.alpha = introoff
	//  intro
	meshspec.radframe2 = radframe2;
})

BABYLON.SceneLoader.ImportMesh("", "mesh/radio/", "disc.babylon", scene, function (newMeshes){
	disc = newMeshes[0]

	disc.scaling.x = .65;
	disc.scaling.z = .65;
	disc.scaling.y = .65;
	disc.position.y = .445;
	disc.position.z = .45;
	disc.rotation.z = -Math.PI/2;
	

	disc.parent = scene.getMeshByName('axe')

	
	disc.receiveShadows = true;
	disc.rotationQuaternion = null; 
	
	disc.material.alpha = introoff
	//  intro
	meshspec.disc = disc;
	delayTab++	

	disc2 = disc.clone('disc2')

	disc2.position.y = .445;
	disc2.position.z = -.45;
	disc2.position.x = 0;
	disc2.rotation.x = -Math.PI/2;
	

	disc2.parent = scene.getMeshByName('axe2')
	
	disc2.receiveShadows = true;
	disc2.rotationQuaternion = null; 
	
	disc2.material.alpha = introoff
	//  intro
	meshspec.disc2 = disc2;


})

BABYLON.SceneLoader.ImportMesh("", "mesh/pc1/", "pc.babylon", scene, function (newMeshes){
	pc = newMeshes[0]
	pc.scaling.x = .6;
	pc.scaling.z = .6;
	pc.scaling.y = .6;
	pc.position.y = 6.3;
	pc.position.z = -9.3;
	pc.position.x = 7;
	
	pc.rotation.y = Math.PI
	pc.receiveShadows = true;
	pc.rotationQuaternion = null; 
	
	pc.material.alpha = introoff
	//  intro
	meshspec.pcf = pc;
	delayTab++	
})

BABYLON.SceneLoader.ImportMesh("", "mesh/pc1/", "keyboard.babylon", scene, function (newMeshes){
	keyboard = newMeshes[0]
	keyboard.scaling.x = .54;
	keyboard.scaling.z = .54;
	keyboard.scaling.y = .54;
	keyboard.position.y = 4.3;
	keyboard.position.z = -9.9;
	keyboard.position.x = 7.8;
	keyboard.rotationQuaternion = null; 
	keyboard.rotation.y = Math.PI*0.98
	
	
	keyboard.receiveShadows = true;
	
	keyboard.material.alpha = introoff
	//  intro
	meshspec.keyboard = keyboard;
	delayTab++	
})


BABYLON.SceneLoader.ImportMesh("", "mesh/bed/", "cussin.babylon", scene, function (newMeshes){
	var cussin = newMeshes[0]
	cussin.position.z = 11;
	cussin.position.x =-11;
	cussin.position.y = 4.2;
	cussin.rotation.z =Math.PI/1.4;
	cussin.rotation.y =Math.PI/4;
	cussin.checkCollisions = true;
	cussin.receiveShadows = true;
	cussin.material = scene.tex.mat;
	cussin.rotationQuaternion = null; 
	
	 cussin.material.alpha = introoff
	//  intro
	meshspec.cussin = cussin;
	delayTab++	

	var cussin2 = cussin.createInstance('cussin2')
	cussin2.position.z =6;
	cussin2.position.x =-11;
	cussin2.position.y = 3.4;
	cussin2.rotation.z =0;
	cussin2.rotation.y =Math.PI/1.1;
	cussin2.checkCollisions = true;
	cussin2.receiveShadows = true;
	cussin2.material = scene.tex.mat;
	cussin2.rotationQuaternion = null; 
	
	 cussin2.material.alpha = introoff
	//  intro
	meshspec.cussin2 = cussin2;

})

BABYLON.SceneLoader.ImportMesh("", "mesh/bed/", "mat.babylon", scene, function (newMeshes){
	var mat = newMeshes[0]
	mat.position.z = 6.9;
	mat.position.x =-5;
	mat.position.y = 2.55;
	mat.checkCollisions = true;
	mat.receiveShadows = true;
	mat.material = scene.tex.mat;
	mat.rotationQuaternion = null; 
	
	 mat.material.alpha = introoff
	//  intro
	meshspec.mat = mat;
	delayTab++	

	
})						
	












// intro animation ..........................................................................


var intro = function(nscope){

		//  tab Alpha gestion

		var alphatab = [nscope.doorframe,nscope.walldoor]

		var alphatab2 = [nscope.plainte,nscope.lampa,nscope.bed,nscope.cussin,nscope.cussin2,nscope.disc,nscope.mat,nscope.tv,scene.getMeshByName('lamp'),scene.getMeshByName('walldeco1'),scene.getMeshByName('radio'),scene.getMeshByName('speaker1'),scene.getMeshByName('rb'),scene.getMeshByName('tv'),scene.getMeshByName('rb1'),scene.getMeshByName('rb4'),scene.getMeshByName('lightbut'),scene.getMeshByName('fix2'),scene.getMeshByName('cv'), nscope.radframe,scene.getMeshByName('button')]

		var alphatab3 = [nscope.good,nscope.flatland,nscope.grid,nscope.ctu,nscope.murani,nscope.king,nscope.k,nscope.apple,nscope.color,nscope.golden,nscope.mag1,nscope.mag2,nscope.disc,nscope.pcf,nscope.keyboard]



		// door event

		// music start
	    setTimeout(function(){scene.soundlib.intro.play()},2100)

	    // optimisation pre intro 
		var sky = scene.getMeshByName('skyBox')
		$('#introcontain').animate({
			opacity:0.7
		},7000)
		scene.beginDirectAnimation(sky, [anim.wait], 0,180,false,1,function(){

			scene.cameras[0].rotation.x = Math.PI/2.1;
	    	scene.cameras[0].rotation.y = Math.PI;
	    	scene.cameras[0].position.z = -100


	    	// intro from begining to door open and door matrix setup
			var cam = scene.cameras[0]
			scene.beginDirectAnimation(cam, [anim.camy], 0,1080,false,1,function(){})
			scene.beginDirectAnimation(sky, [anim.alpha], 0,180,false,1,function(){

				setTimeout(function(){
					$('#introcontain').animate({
						opacity:0
					},3500,function(){
						$('#introtext').remove()
					})
				},10500)

				scene.beginDirectAnimation(cam, [anim.camx], 0,900,false,1,function(){
					var door = scene.getMeshByName('door')
					scene.beginDirectAnimation(door, [anim.d1], 0,450,false,1,function(){
						scene.beginDirectAnimation(door, [anim.d2], 0,450,false,1,function(){})
						scene.beginDirectAnimation(door, [anim.d1], 0,450,false,1,function(){
	
				 			door.setPivotMatrix(BABYLON.Matrix.Translation(0.5, 0, 0));
	    	  				door.position = door.position.add(new BABYLON.Vector3(-0.5, 0, 0));
	    	  				door.position.x = -2.5;	
						})	
	   				})			
				})

				scene.beginDirectAnimation(cam, [anim.camfor1], 0,1800,false,1,function(){

					for(var i = 0; i<alphatab.length;i++){

						var alphaAnim = new BABYLON.Animation("alpha", "material.alpha", 60, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
						var keys = []; 
						keys.push({
							frame: 0,
							value: 0
						});
						keys.push({
							frame: 180,
							value: 1
						});
						alphaAnim.setKeys(keys);

						alphatab[i].animations.push(alphaAnim);
						scene.beginAnimation(alphatab[i],0,180,false,1,function(){

							scene.getMeshByName('floor').material.alpha = 1;
							scene.getMeshByName('roof').material.alpha = 1;
							scene.getMeshByName('wall').material.alpha = 1;
							scene.getMeshByName('sphere').material.alpha = 1;

							var sphere = scene.getMeshByName('sphere');
							var door = scene.getMeshByName('door');

							scene.beginDirectAnimation(sphere, [anim.sphere1], 0,1350,false,1,function(){})
							scene.beginDirectAnimation(sphere, [anim.sphere2], 0,1350,false,1,function(){

								scene.beginDirectAnimation(sphere, [anim.sphere3], 0,900,false,1,function(){})
								scene.beginDirectAnimation(door, [anim.close], 0,900,false,1,function(){

									setTimeout(function(){
										scene.lights[0].intensity = 0.6;
										scene.lights[0].position.y = 11;
										scene.lights[0].position.z = 0;
										scene.lights[0].position.x = 0;

										cam.lockedTarget = null;
										cam.rotation.y = Math.PI

										for(var i = 0; i<alphatab2.length;i++){
											alphatab2[i].material.alpha = 1;
										}

										for(var i = 0; i<alphatab3.length;i++){
											for(var y = 0; y <alphatab3[i].material.subMaterials.length; y++){
												alphatab3[i].material.subMaterials[y].alpha = 1
											}
										}
										var instruct = setInterval(function(){
											scene.can.children[1].text = "'Z' 'Q' 'S' 'D' To Move - Left Click and Drag For the Camera"},100)
										setTimeout(function(){clearInterval(instruct)}, 2000)
										gameplay(nscope)
										$('#pwrap').remove()
										nscope.disc.material.subMaterials[0].alpha = 0.6

									},1700)

								})

							})

							scene.beginDirectAnimation(door, [anim.open], 0,120,false,1,function(){

								cam.lockedTarget = scene.getMeshByName('sphere');
								scene.beginDirectAnimation(cam, [anim.camfor2], 0,450,false,1,function(){

	    	  						
									
								})
							})
						})
					}
				})	
			})
		})
}












// // room appear 
// var rAppear = function(){
// }

	// // render loop
	// engine.runRenderLoop(function() {
	//    	scene.render();
	// });


}










