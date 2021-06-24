console.info("Salut");
	console.debug(131/2);
	var name = "Paul"
	console.info("Name: " + name);

	var age = 12 + 6;
	console.info("Age:");
	console.info(age);

	console.warn("Age:", age)

	var skills = ['html', "css", `js`];
	console.info("skills:", skills);

	name = "Paullie";
	console.info("Name: " + name);

	var m = document.getElementById("job-info");
	console.info('my motto', m);
	

	m.onclick = function() {
		console.info('click pe motto');
		m.innerHTML = "Dispatcher @DURTRANSPORT";
		m.style.color ="#1144dd";

		if (m.innerText == 'Student @FastTrackIt') {
			m.innerHTML = "Dispatcher @DURTRANSPORT";
			m.style.color = '';
		} else {
			m.innerHTML = "Dispatcher @DURTRANSPORT"
			m.style.color= '';
		}
	}