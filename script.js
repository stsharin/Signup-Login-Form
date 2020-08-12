const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const signInbtn = document.getElementById('si');
const signUpbtn = document.getElementById('su');

signInbtn.addEventListener('click', () =>{
	swal("Welcome Back!", "Login Successful", "success");
})

signUpbtn.addEventListener('click', () =>{
	swal("Welcome!", "Registration Successful", "success");
})

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});