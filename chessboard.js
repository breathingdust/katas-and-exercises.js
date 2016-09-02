Given an input integer, create a chessboard output


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
								  console.log(output);
