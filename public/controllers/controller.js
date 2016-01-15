function AppCtrl($scope){
	console.log("Hello World from Controller....")

	person1  = {
		name : "Sagar",
		email : "sagar.jhaa@gmail.com",
		number : "(111) 111-1111"
	};

	person2 = {
		name  : "Snigdha", 
		email : "snigdha@kent.edu",
		number: "(222) 222-2222" 
	};

	person3 = {
		name : "Raghav",
		email : "raghav@gmail.com",
		number : "(330) 475-2172"
	};

	var contactlist = [person1,person2,person3];

	$scope.contactlist = contactlist;
};