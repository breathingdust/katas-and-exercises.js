//http://eloquentjavascript.net/02_program_structure.html#h_5Hz2kiaaXp

function chessboard(){
	var output = "";
	for(var i = 1;i <=8;i++){
		for(var j = 1;j <= 8;j++){
			if ((i+j)%2==0){
				output+= " ";
			}else{
				output += "#";
			}
		}
		output += "\r\n";
	}
	return output;
}

module.exports = {
	chessboard
}