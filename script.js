const map = [
	"WWWWWWWWWWWWWWWWWWWWW",
	"W   W     W     W W W",
	"W W W WWW WWWWW W W W",
	"W W W   W     W W   W",
	"W WWWWWWW W WWW W W W",
	"W         W     W W W",
	"W WWW WWWWW WWWWW W W",
	"W W   W   W W     W W",
	"W WWWWW W W W WWW W F",
	"S     W W W W W W WWW",
	"WWWWW W W W W W W W W",
	"W     W W W   W W W W",
	"W WWWWWWW WWWWW W W W",
	"W       W       W   W",
	"WWWWWWWWWWWWWWWWWWWWW",
    ];

const boardMaze = document.getElementById("boardMaze")
let player = document.getElementsByClassName("player")

document.addEventListener('keydown', (event) => {
	const keyName = event.key;
	if(keyName === "ArrowUp"){
		let nextLine = playerLocation()[0] - 1
		let column = playerLocation()[1]
		let nextLineStr = nextLine.toString()
		let columnStr = column.toString()
		let newPosition = nextLineStr + "a" + columnStr
		let divTest = document.getElementsByClassName(newPosition)[0]
		let typeOfdiv = divTest.classList[1]
			if(typeOfdiv === "space"){
				let player = document.getElementsByClassName("player")[0]
				divTest.appendChild(player)
			}else{
				console.log("erro")
			}
	}
	if(keyName === "ArrowDown"){
		let nextLine = playerLocation()[0] + 1
		let column = playerLocation()[1]
		let nextLineStr = nextLine.toString()
		let columnStr = column.toString()
		let newPosition = nextLineStr + "a" + columnStr
		let divTest = document.getElementsByClassName(newPosition)[0]
		let typeOfdiv = divTest.classList[1]
			if(typeOfdiv === "space"){
				let player = document.getElementsByClassName("player")[0]
				divTest.appendChild(player)
			}else{
				console.log("erro")
			}
	}
	if(keyName === "ArrowRight"){
		let nextLine = playerLocation()[0]
		let column = playerLocation()[1]+1
		if(column <= 20){
		let nextLineStr = nextLine.toString()
		let columnStr = column.toString()
		let newPosition = nextLineStr + "a" + columnStr
		let divTest = document.getElementsByClassName(newPosition)[0]
		let typeOfdiv = divTest.classList[1]
			if(typeOfdiv === "space"){
				let player = document.getElementsByClassName("player")[0]
				divTest.appendChild(player)
			}
			if(typeOfdiv === "finsh"){
				console.log("winner")
				let player = document.getElementsByClassName("player")[0]
				divTest.appendChild(player)
			}if(typeOfdiv === "wall"){
				console.log("erro")
			}
				
			
		}
	}
	if(keyName === "ArrowLeft"){
		let nextLine = playerLocation()[0]
		let column = playerLocation()[1]-1
		if(column >= 0 && column < 20){
		let nextLineStr = nextLine.toString()
		let columnStr = column.toString()
		let newPosition = nextLineStr + "a" + columnStr
		let divTest = document.getElementsByClassName(newPosition)[0]
		let typeOfdiv = divTest.classList[1]
			if(typeOfdiv === "space"){
				let player = document.getElementsByClassName("player")[0]
				divTest.appendChild(player)
			}else{
				console.log("erro")
			}
	}
}
})

function makeDiv(array){
	let result = []
	for(let linha = 0; linha < array.length; linha++){

		let newLine = document.createElement("div")
		newLine.classList.add("line" + linha)
		newLine.classList.add("line")
		boardMaze.appendChild(newLine)

		for(let coluna = 0; coluna < array[linha].length; coluna++){
			let newWall = document.createElement("div")
			if(array[linha][coluna] === "W"){
				newWall.classList.add(linha + "a" + coluna)
				newWall.classList.add("wall")
			}
			if(array[linha][coluna] === " "){
				newWall.classList.add(linha + "a" + coluna)
				newWall.classList.add("space")
			}
			if(array[linha][coluna] === "S"){
				newWall.classList.add(linha + "a" + coluna)
				newWall.classList.add("space")
				let newPlayer = document.createElement("div")
				newPlayer.classList.add("player")
				newWall.appendChild(newPlayer)
				
			}
			if(array[linha][coluna] === "F"){
				newWall.classList.add(linha + "a" + coluna)
				newWall.classList.add("finsh")
			}
			newLine.appendChild(newWall)
			result.push(array[linha][coluna])
		}
	}
	return result
}

function playerLocation(){
	let player = document.getElementsByClassName("player")[0]
	let localPlayer = player.parentElement
	let local = localPlayer.classList[0]	 //coluna e linha que ele se encontra
	let arrayLocal = local.split("a").map(Number)

	return arrayLocal
}

function reset(){
	let player = document.getElementsByClassName("player")[0]
	let strat = document.getElementsByClassName("9a0")[0]
	strat.appendChild(player)
}

function win (){

}

makeDiv(map)

