//Create event lisener
document.getElementById('button').addEventListener('click',loadUsers);

function loadUsers(){
	// Create XHR Object
	var xhr = new XMLHttpRequest();
	// OPEN - type, url/file, async
	xhr.open('GET', 'https://api.github.com/users', true);

	// OPTIONAL - used for loaders
	xhr.onprogress = function(){
		console.log('READYSTATE: ', xhr.readyState);
	}

	xhr.onload = function(){
		if(this.status === 200){
			// JSON.parse();
			var users = JSON.parse(this.responseText);

			var output = '';
			for(var i in users){
				output +=
				'<div class="user">' + 
				'<img src="'+users[i].avatar_url+'" width="70" height="70">' + 
				'<ul>' +
				'<li>ID: '+users[i].id+'</li>' + 
				'<li>Login: '+users[i].login+'</li>'+
				'</ul>' + 
				'</div>';
			}

			document.getElementById('users').innerHTML = output;
		}
	}

	xhr.onerror = function(){
		console.log('Request Errorr...');
	}

	//Sends Request
	xhr.send();

	// HTTP Statuses
	// 200: "OK"
	// 403: "Forbidden"
	// 404: "Not Found"
}