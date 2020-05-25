//Fonctionnalité 1 et 1 bis
//Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

let footerCounter = 0;
let footer = document.querySelector('footer');



footer.addEventListener("click", addone);
	function addone() {
	footerCounter += 1;	
	console.log(`clic numéro ${footerCounter}`);
};


//Fonctionnalité 2
//Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

let navbarHeader = document.getElementById("navbarHeader");
let menuBtn = document.querySelector(".navbar-toggler");

	menuBtn.addEventListener("click", navbartoggle);

	function navbartoggle() {
  	navbarHeader.classList.toggle('collapse');
	};


//Fonctionnalité 3
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

let btnEdit = document.getElementsByClassName("btn-outline-secondary")[0];
let	firstCard = document.getElementsByClassName("card-text")[0];
	console.log(btnEdit.textContent);
	console.log(firstCard.textContent);

    btnEdit.addEventListener("click", Red);
    function Red() {
    	firstCard.style.color = "red";
    } ;


//Fonctionnalité 4
//On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

let btnEdit2 = document.getElementsByClassName("btn-outline-secondary")[1];
let	secondCard = document.getElementsByClassName("card-text")[1];
	console.log(btnEdit2.textContent);
	console.log(secondCard.textContent);

    btnEdit2.addEventListener("click", Green);
    function Green() {
    	if (secondCard.style.color === 'green') {
   			secondCard.style.color = '';
    	} else {
    	secondCard.style.color = 'green';
    } 
 };


//Fonctionnalité 5
//si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.getElementsByTagName('link')[0];

console.log(bootstrap);

	navbar.addEventListener("dblclick", destroyCDN);

	function destroyCDN() {
		if  (bootstrap.rel === "stylesheet") { 
			bootstrap.rel = "styleDisabled";
		} else {
			bootstrap.rel = "stylesheet";
		}
		};

//Fonctionnalité 6

// si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

let viewBtn = document.getElementsByClassName("btn-success");
console.log(viewBtn)

for (let i=0; i < viewBtn.length; i++){
	viewBtn [i].addEventListener("mouseover", Fonction6);
	function Fonction6(){
		document.getElementsByClassName("card-text")[i].classList.toggle("d-none"); //d-none on enleve le texte
		document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25"); 
	};
};





//Fonctionnalité 7

// si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

let btnGrey = document.getElementsByClassName("btn-secondary")[0];

let old = document.getElementsByClassName("row")[1];
let young = document.getElementsByClassName("col-md-4");

	btnGrey.addEventListener("click", Fonction7);

	function Fonction7() {
		old.prepend(young[5]) //prepend c'est ajouter devant 
	};

//Fonctionnalité 8
// si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 

let btnBlue = document.getElementsByClassName("btn-primary")[0];

	btnBlue.addEventListener("click", Fonction8);

	function Fonction8() {
		old.appendChild(young[0]);
	};



//Fonctionnalité 9