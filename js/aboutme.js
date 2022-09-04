        var education =
		
			`[{
				"logo": "img/sti.png",
				"school": "<br>STI-Fairview",
				  "courseTaken": "<br>Information Technology Program",
				  "address": "#70 Regalado Avenue, North Fairview, Quezon City, 1121 Metro Manila.",
				  "yearTaken": "2014 to 2016"
			},
			{
				"logo": "img/prmsu.png",
  				"school": "President Ramon Magsaysay State University",
  				"courseTaken": "Bachelor of Science in Information Technology",
				"address": "South Poblacion, 2211 Masinloc, Philippines",
				"yearTaken": "2018 to 2022"
			}
			]`
			
			const parseEducation = JSON.parse(education)
        	let coursetaken = "";
			let schoolInfo = "";
			
			for(i=0;i<parseEducation.length;i++){
			coursetaken += parseEducation[i].courseTaken+ "<br>";
			schoolInfo += 
			`
						<div class="card">
								<img src="${parseEducation[i].logo}" width="80px" height="auto"><br>
								<h5>${parseEducation[i].school}</h5>
								<h4>${parseEducation[i].courseTaken}</h4>
						<div class="pra">
							<p>${parseEducation[i].yearTaken}</p>
						</div>
					</div>
					
			`
			}
			alert(`loaded`)
			document.getElementById("coursetaken_html").innerHTML = coursetaken;
			document.getElementById("schoolPackage").innerHTML = schoolInfo;



		const skills = 
		`{
			"Web Development",
			"Wordpress Management",
			"System and Network Administrator",
			"Technical Support",
			"Photo Editing / Video Editing"
		}`
		const achievements=
		`{
			"Best in Programming",
			"San Miguel Corporation Scholar",
			"Technolympics 2019 1st Place Programming using Console",
			"Technolympics 2022 1st Place Programming using Console"
		}`
		const workExperience = 
		`[
			{
				"company": "<br>Philam Asia Labor Pool Incorporated<br><br>",
  				"jobDescription": "Office Staff",
				"jobDuration":"<br>600 Hours",
 				"jobResponsibilities": ["Database Management",
					"Encoding of personal information",
					"Hardware and Software Maintenance"]

			},
			{
				
				"company": "<br>JPT Central corporate Holding and Management Corporation",
				"jobDescription": "Branch Personnel - Staff Level 3",
				"jobDuration":"May 2017 - May 2018",
				"jobResponsibilities": 
					[
						"Branch Appraiser (Loan Value for Gadgets)",
						"Hardware and Software Maintenance",
						"Customer Service"
					]
	
				
			},
			{
				"company": "<br>BCUBE Information Technology Solutions",
  				"jobDescription": "Technical Support - Wordpress Management",
				"jobDuration":"April 2021 - August 2022",
 				"jobResponsibilities": 
				[
					"Wordpress Management",
					"Data Uploading and Migration",
					"Installation and System Configuration",
					"Maintenance and Troubleshooting",
					"Pro-active Service",
					"On-site and Off-site Support"
				]

			}
		]`


		const parseWorkExperience = JSON.parse(workExperience)
        	let workPackage = "";

			for(i=0;i<parseWorkExperience.length;i++){
				
				workPackage += 
				`
							<div class="card">
									<h5>${parseWorkExperience[i].company}</h5>
									<h4>${parseWorkExperience[i].jobDescription}</h4>
									<p>${parseWorkExperience[i].jobResponsibilities}</p>	
							<div class="pra">
								<p>${parseWorkExperience[i].jobDuration}</p>
							</div>
						</div>
						
				`
				}
				document.getElementById("workPackage").innerHTML = workPackage;

		const intro = 
		`
			I am highly motivated, Experienced technical support in six 
			different Government Organization. I have managed many System 
			difficulties, issues and problems. Graduated as Information 
			Technology Program and as Bachelor of Science in Information 
			Technology. I am looking for a fresh opportunity to utilize my 
			skills and knowledge and bring a high level of quality and service 
			to a well-established and respected company.  
		`
		document.getElementById("intros").innerHTML = (intro);