

class Tamagotchi {
	constructor(name){
	this.hunger = 0;
	this.sleepiness = 0;
	this.boredom = 0;
	this.age = 0;
	this.name = name;

	}
};
//starting game
let hungry = 0;
let bored = 0;
let sleep = 0;
let gettingOlder;

let tamaIsBored = 0;
let hangry = 0;
let soTired = 0;

let timer;
let seconds = 0;
let aging = 1;
let timeIsRunning = false;
$('#start').click(function(){
	$('#mrNinja').attr("src", "https://png2.kisspng.com/sh/707a6aa33beb4abf2d64f49d2f223068/L0KzQYm3VsE1N5tmjZH0aYP2gLBuTf5qdptmRdN3aX3khLbrTfZqdJ4ykdHAdIXldX7qjPlxNZJ3jJ8AYkK1SLS7WMIzOGE7SZCCMEm6SYS3WcE2OmkAUaICOUK0Q4q6TwBvbz==/kisspng-ninja-animated-film-youtube-clip-art-5b228c48220061.7097930915289907921393.png");
	if(!timeIsRunning){
		timeIsRunning = true;
	timer = setInterval(function(){
		seconds++;
		if(seconds % 3  === 0){
			bored = new Tamagotchi(seconds++);
			tamaIsBored++;
			$('#boredMetric').append(bored).text(`Boredom: ${tamaIsBored}`);
		}
		 if(seconds % 4 === 0){
			hungry = new Tamagotchi(seconds++);
			hangry++;
			$('#hungerMetric').append(hungry).text(`Hunger: ${hangry}`);
		
		}else if(seconds % 5 === 0){
			sleep = new Tamagotchi(seconds++);
			soTired++;
			$('#sleepMetric').append(sleep).text(`Sleepiness: ${soTired}`);
		
		}else if(seconds === 1){
			 gettingOlder = new Tamagotchi(seconds++)
			 aging++;
			$('#ageMetric').append(gettingOlder).text(`Age: ${aging}`);
		} 

			didYouDie()
		}, 1000)
	} 	
});
function didYouDie() {
			if(hangry === 10){
				
				alert("Sorry, the Tamagotchi got too hungry.");
				clearInterval(timer);
				$('#mrNinja').attr("src", "https://ui-ex.com/images/ninja-transparent-cartoon-3.gif");
			
			}else if(tamaIsBored === 10){
				$('#mrNinja').attr("src", "https://ui-ex.com/images/ninja-transparent-cartoon-3.gif");
				alert("Sorry, the Tamagotchi needed more training.");		
				clearInterval(timer);
			
			} else if(aging === 10){
				$('#mrNinja').attr("src", "https://ui-ex.com/images/ninja-transparent-cartoon-3.gif");
				alert("The Tamagotchi is all grown.");
				clearInterval(timer);
			
			} else if(tamaIsBored === 10){
				$('#mrNinja').attr("src", "https://ui-ex.com/images/ninja-transparent-cartoon-3.gif");
				alert("Sorry, the Tamagotchi didn't get enough sleep.");
				clearInterval(timer)
			}
	}


//decreasing food/sleep/boredom count

	$('#food').click(function(){
	hangry -= 1;
});
	$('#train').click(function(){
	tamaIsBored -= 1;
})
	$('#nap').click(function(){
	soTired -= 1;
});




//submit name and hide input
let tamagotchi;
function submitName(event){
    event.preventDefault();
    const userInput = $("#name").val()
    console.log(userInput)
    name = userInput;
    tamagotchi = new Tamagotchi(userInput)
    $('#name').val("");
 	renderName();
}
$("#submit-name").submit(submitName);
function renderName(){
        $('#newTama').append(`<h3>${tamagotchi.name} is ready for training!</h3>`);
        onClickClose();
    };
function onClickClose(){
	$('#submit-name').hide();
}

