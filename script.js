function myFunction() {
	
	var commissionsOpen = false;
	var commissionSectionOpen = document.getElementById("commissionSectionOpen");
	var commissionSectionClosed = document.getElementById("commissionSectionClosed");
	
	if (commissionsOpen) {
		commissionSectionOpen.display = "block";
		commissionSectionClosed.display = "none";
	}
	else {
		commissionSectionOpen.display = "none";
		commissionSectionClosed.display = "block";
	}
	console.log("Wah");
}

