
			function rightClick(n) {
				var nuber = n+1
				if (  nuber <= 7 ){
					var str  = nuber + '.jpg'
					var strr  = nuber + 1+ '.jpg'
				
					document.getElementById("mydiv").setAttribute('src', str);
					document.getElementById("mydiv1").setAttribute('src', strr);
					

				}
				else {
					document.getElementById("mydiv").setAttribute('src', '8.jpg');
					document.getElementById("mydiv1").setAttribute('src', '1.jpg');

				}	
			}


			function leftClick(n) {
				var nuber = n-1
				if (  nuber >= 1 ){
					var str  = nuber + '.jpg';
					var strr  = nuber+1+ '.jpg';
					

					document.getElementById("mydiv").setAttribute('src', str);
					document.getElementById("mydiv1").setAttribute('src', strr);
					

				}
				else {
					document.getElementById("mydiv").setAttribute('src', '8.jpg');
				
					document.getElementById("mydiv1").setAttribute('src', '1.jpg');

				}	
				
							   	}

           document.getElementById("right").addEventListener(
					"click",
					function() {rightClick(parseInt(document.getElementById("mydiv").getAttribute('src').split('.')[0]))
					}, //cтрока преобразуется в число
					false
				);


           document.getElementById("left").addEventListener(
					"click",
					function() {leftClick(parseInt(document.getElementById("mydiv").getAttribute('src').split('.')[0]))
                                   
					 },
					false
				);
			