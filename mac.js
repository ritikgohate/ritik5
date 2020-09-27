//document.body.style.backgroundColor = "red";
			var arr1= [];
			/*var arr1[1]= document.getElementById("a11").value;
			var arr1[2]= document.getElementById("a12").value;
			var arr1[3]= document.getElementById("a13").value;
			var arr1[4]= document.getElementById("a21").value;
			var arr1[5]= document.getElementById("a22").value;
			var arr1[6]= document.getElementById("a23").value;
			var arr1[7]= document.getElementById("a31").value;
			var arr1[8]= document.getElementById("a32").value;
			var arr1[9]= document.getElementById("a33").value;*/
			//document.getElementById("s1").innerHTML="NO";		

			var i=0;
			
			
			
			//document.write("sdas");

			function check(x,y){
				i =i +1;

				//document.getElementById("demo").innerHTML=i;
				if (i%2==0){
					document.getElementById(x.id).style.backgroundColor = "green";	
					arr1[y]="green";
					}else{
					document.getElementById(x.id).style.backgroundColor = "red";
					arr1[y]="red";		
				}

			/*	if( arr1[1] && arr1[2] && arr1[3] == "red" || arr1[4] && arr1[5] && arr1[6] == "red" || arr1[7] && arr1[8] && arr1[9] == "red" || 
					arr1[1] && arr1[4] && arr1[7] == "red" || arr1[2] && arr1[5] && arr1[8] == "red" || arr1[3] && arr1[6] && arr1[9] == "red" ||
					arr1[1] && arr1[5] && arr1[9] == "red" || arr1[3] && arr1[5] && arr1[7] == "red")
					{ alert("Player1 wins!!!");
					}
				if(arr1[1] && arr1[2] && arr1[3] == "green" || arr1[4] && arr1[5] && arr1[6] == "green" || arr1[7] && arr1[8] && arr1[9] == "green" ||
					arr1[1] && arr1[4] && arr1[7] == "green" || arr1[2] && arr1[5] && arr1[8] == "green" || arr1[3] && arr1[6] && arr1[9] == "green" ||
					arr1[1] && arr1[5] && arr1[9] == "green" || arr1[3] && arr1[5] && arr1[7] == "green")
					{ alert("Player2 wins!!!");}*/
					
				
				game();

				}
				function game(){
					if( arr1[1] == "red" && arr1[2] == "red" && arr1[3] == "red")
					{
						alert("Player1 wins!!!");
					}else if (arr1[4] == "red" && arr1[5] == "red" && arr1[6] == "red") 
					{
						alert("Player1 wins!!!");
					}else if(arr1[7] == "red" && arr1[8] == "red" && arr1[9] == "red"){
						alert("Player1 wins!!!");
					}else if(arr1[1] == "red" && arr1[4] == "red" && arr1[7] == "red"){
						alert("Player1 wins!!!");
					}else if( arr1[2] == "red" && arr1[5] == "red" && arr1[8] == "red"){
						alert("Player1 wins!!!");
					}else if(arr1[3] == "red" && arr1[6] == "red" && arr1[9] == "red"){
						alert("Player1 wins!!!");
					}else if(arr1[1] == "red" && arr1[5] == "red" && arr1[9] == "red"){
						alert("Player1 wins!!!");
					}else if(arr1[3] == "red" && arr1[5] == "red" && arr1[7] == "red"){
						alert("Player1 wins!!!");
					}else if( arr1[1] == "red" && arr1[2] == "red" && arr1[3] == "red")
					{
						alert("Player2 wins!!!");
					}else if (arr1[4] == "green" && arr1[5] == "green" && arr1[6] == "green") 
					{
						alert("Player2 wins!!!");
					}else if(arr1[7] == "green" && arr1[8] == "green" && arr1[9] == "green"){
						alert("Player2 wins!!!");
					}else if(arr1[1] == "green" && arr1[4] == "green" && arr1[7] == "green"){
						alert("Player2 wins!!!");
					}else if( arr1[2] == "green" && arr1[5] == "green" && arr1[8] == "green"){
						alert("Player2 wins!!!");
					}else if(arr1[3] == "green" && arr1[6] == "green" && arr1[9] == "green"){
						alert("Player2 wins!!!");
					}else if(arr1[1] == "green" && arr1[5] == "green" && arr1[9] == "green"){
						alert("Player2 wins!!!");
					}else if(arr1[3] == "green" && arr1[5] == "green" && arr1[7] == "green"){
						alert("Player2 wins!!!");
					}else if (i>=9) {
					alert("Draw!");
				   }

				}
				alert(localStorage.getItem("key1")); 
							
