//Nasa JavaScript

//Nasa home page
		var welcome = document.getElementById("welcome");
		welcome.innerHTML = "Hi, Welcome to Nasa Microsite!!&nbsp;";

//Nasa Launches page
		var launch = document.getElementById("launch");
		launch.innerHTML = "Live feed of International space station location.";
		var da = new Date();
		document.getElementById("dat").innerHTML = da;


//API JSON fetch Lat & LONG
		var pos = "http://api.open-notify.org/iss-now.json";
		async function currentPosition() {
			// body...
			var wru = await fetch(pos);
			var data = await wru.json();

			var newLati = data.iss_position.latitude;

			var newLong = data.iss_position.longitude;

			var nlati = document.getElementById("lati");
			nlati.textContent = newLati;

			var nlong = document.getElementById("long");
			nlong.textContent = newLong;



			//console.log(newLati);
			//console.log(newLong);

 			//console.log(data.iss_position.longitude);
 			//console.log(data.iss_position.latitude);

			
		}

		setInterval("location.reload(true);", 10000);

		currentPosition();



// Nasa About page

		var about = document.getElementById("about");
		about.innerHTML = "NASA's Vision: To discover and expand knowledge for the benefit of humanity";

		
//Nasa Contact Page

		function sub(){
			// Variable names
			var fname = document.getElementById("fname").value;
			var lname = document.getElementById("lname").value;
			var phone = document.getElementById("phone").value;
			var email = document.getElementById("email").value;

			var fnameInput = /^[a-zA-Z]+$/;
			var fnameMatch = fnameInput.test(fname);

			console.log(fnameMatch);

			var lnameinput = /^[a-zA-Z]+$/;
			var lnameMatch = lnameinput.test(lname);


				if ((fnameMatch == false ) || (lnameMatch == false)) {
				alert("Please enter a valid First and last name");
				}

			var phoneInput = /^[0-9]{8,14}$/;
			var phoneMatch = phoneInput.test(phone);

				if (phoneMatch == false){
					alert("Enter a valid Phone number")
				}


			var emailInput = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,}$/;
			var emailMatch = emailInput.test(email);

				if (emailMatch == false){
					alert("Enter a valid E-mail address")
				}

			//return false;
		}

