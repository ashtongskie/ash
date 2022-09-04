		/*SEARCH FOR SPECIFIC INFORMATION THEN CHANGE*/
		const personalInformation =
		`{
			"id": "1",
      		"firstName": "Ashley",
			"middleName": "Delos Reyes",
      		"lastName": "Rambuyong",
			  "age": "26",
			  "birthDate": "September 6, 1995",
			  "contactno": ["09266728380","09688855662","09507810926"]	
		}`
		
			/*ASSIGNMENT OF Personal Info for HEADER*/

		const obj = JSON.parse(personalInformation)
		document.getElementById("firstName_html").innerHTML = obj.firstName;
		document.getElementById("firstName_html1").innerHTML = "WHO IS "+ obj.firstName+" ?";
		document.getElementById("lastName_html").innerHTML = obj.lastName;

			/*ASSIGNMENT OF Personal Info for FOOTER*/

		document.getElementById("panghuli").innerHTML = (obj.firstName+" " +obj.middleName+" "+obj.lastName) ;

		function myFunction() {
			const element = document.getElementById("mainSection");
			element.scrollIntoView();
		  }

		