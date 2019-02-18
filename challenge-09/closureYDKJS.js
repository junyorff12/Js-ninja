function User() {
	
	let username ,password;
	
	function doLogin(user, pw) {  // doLogin cria uma CLosure que envolve username e password
		username = user;
		password = pw;
	}

	let publicAPI = { // publicAPI cria uma closure e uma ponte entre a instancia que será criada e o objeto
		login: doLogin
	}

	return publicAPI;
}

fred = User();

fred.login('fred', '12battery34');

