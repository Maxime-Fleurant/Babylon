Warning -- Bizarement le browser avec lequel j'ai les pires performances
est firefox, sur internet explorer, edge et chrome c'est beaucoup plus 
fluide  j'ai pas de chute de framerate, apparement firefox implemente mal 
webgl enfin ca doit dependre des gpu aussi mais j'ai desactiver ma carte 
graphique pendant que je developpais pour n'utiliser que le gpu integre
du cpu pour avoir des conditions plus reel mais j'ai aucune idee de
comment ca peut tourner sur un ordinateur lambda. Sur internet explorer
les sons que j'ai utiliser ne marches pas l'api audio n'est pas compatible.
Je n'ai pas teste sur des versions anterieurs a ie 11 aussi donc les 
meilleurs conditions pour jouer je pense sont sur CHROME ou EDGE.
sorry.. 


Petit recap du code car il est pas super bien organise. En particulier 
la Partie principale du jeu, le fichier "app2.js", car j'utilise le 
framework babylon.js et j'ai code en meme temps que j'apprenais a
l'utiliser mais pour les gros bloc de ce fichier en gros c'est:





- ligne 0 a 500 : La mise en place de la "scene", ou je definis les
lumieres les cameras, ensuite toutes les textures, puis les "mesh", 
se sont les objets 3d ici on retrouve uniquement ceux que j'ai creer 
directement en utilisant babylon.js, les formes simples cube sphere.  

exemple de la creation de camera :

var camera = new BABYLON.FreeCamera('FreeCamera',new BABYLON.Vector3(0,6.3,-16),scene)

	ici je creer un nouveau objet camera, 'freecamera', il y aussi une arcRotateCamera
	qui permet de pointer vers le centre d'un cercle et de tourner autour. je lui donne
	une position et je l'attache a l'objet scene. L'objet scene c'est le gros objet global 
	ou on peut retrouver a peut pret tout ce qu'on a injecter pour faire des manipulations
	un peu comme l'objet window en fait. 

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

	je peux definir pas mal de propriete sur les camera ici je lui ai donner une vitesse
	angularsensibility c'est la vitesse de deplacement a la souris, ellipsoid c'est une hitbox 
	autour de la camera, le fov et le keybinding.


exemple de creation de texture :

var tele = new BABYLON.StandardMaterial('tele', scene)
tele.alpha = 1;
tele.diffuseColor = new BABYLON.Color3.FromInts(50,50,50);
tele.specularColor = new BABYLON.Color3.FromInts(0,0,0),
tele.ambientColor = new BABYLON.Color3(0, 0, 0);
tele.diffuseTexture = new BABYLON.VideoTexture("video",["video/mov2.webm","video/movie.mp4"], scene, true);
tele.emissiveColor = new BABYLON.Color3(1,1,1);
tele.diffuseTexture.video.volume  = 0.3;

	alpha: c'est la transparence. 
	diffuseColor, c'est la couleur native.
	specular c'est la couleur refleter par la lumiere. 
	cette texture je l'utilise sur un cube pour faire une dalle 
	d'ecran donc le specular j'ai mit noir sans reflet comme une texture noire. 


exemple de creation de mesh.

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

	un cube de 1 sur 1, scale sur les axe x z y, avec une position une rotation
	un material comme ceux creer si dessus. receive shadow, door.open c'est un booleen 
	que j'ai stocker dans l'objet pour une animation.






- ligne 500 a 800 : juste des animations, enfin je definis des types d'animation que j utilise plus tard


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


	si j'attache l'anim camy ici a un objet, et que je declanche l'anim l objet va effectuer une 
	rotation sur l'axe y a 60fps pendant 1000 frame  et ensuise on definit l evolution de l'anim 
	avec des steps par frame. 









- lighe 800 a 1200 : se sont les mechanismes que j'ai fait pour le jeu toute les interactions dans la scene.
il y a des truc marant du genre, quand j attrape un livre je me deplace a la position 10 000 10 000 10 000 avec 
un lumiuere accrocher a camera pour palier a des probleme de colision. 



-ligne 1300 a 1400 c'est un peu d'optimisation : a quel moment je declanche la scene , j attend que tous les meshs et 
sons soit charge etc. il y un array shadowgenerator perdu ici aussi. 


- ligne 1400 a 2000: pas grand chose a voir ce sont d'autre mesh que j'importe mais eux plus complex que j'ai creer avec blender
que j'ai du apprendre a utiliser donc c'est pas super mais bon par exemple le lit, l'ordi les forme qui sont pas juste des cubes, 
je les ai creer dans blender pour aller plus vite. 


- et finalement ligne 2000 a 2150 c'est le code ou j'enchaine les animations pour l'intro. C'est ici que j'utilise toutes les animations
que j'ai cree plus haut. 

















Sinon pour le reste, dans le dossier JS,  app1.js c'est le ficher js pour les anime de la page web. Et canvas.js c'est le moteur 
que j'avais creer pour essayer de faire de la 3d, je l'utilise ici pour faire le background. Ce fichier est mieu organiser et
je fais plus de javascript dedans. Il y a plein de method que j'avais creer que j'utilise pas ici puisque j'ai juste fait 
un espace en profondeur et des ligne sur les murs, mais je peux creer des volumes, choisir leur profondeur etc. 




