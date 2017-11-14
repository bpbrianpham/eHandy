/* jshint browser: true */
/* eslint-env browser */
/* eslint no-unused-vars:0 */
/* eslint no-unused-vars: "error" */

function search(ele){
    if(event.keyCode==13){

		//Sends AJAX request
		if(window.XMLHttpRequest){
			//For IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp = new XMLHttpRequest();
		}else{
			//For IE6, IE4
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				$('#phpScripts').append(xmlHttp.responseText);
			}
		};

		xmlhttp.open("GET","search.php?q="+ele.value,true);
		xmlhttp.send();

    }
}

function result(group,name,phone){
    createGroupTitle(group);
    createGroupLine(group);
    createResult(group,name);

}


function createGroupTitle(name){
	if(document.getElementById(name)==null){
		var resultDisplay = document.getElementById("display");

		var divOuter = document.createElement('div');
		divOuter.setAttribute('id',name);

		var div = document.createElement('div');
		div.setAttribute('class','result-title');
		var para = document.createElement("a");
		var text = document.createTextNode(name);

		para.appendChild(text);
		div.appendChild(para);
		divOuter.appendChild(div);
		resultDisplay.appendChild(divOuter);
	}
}

function createGroupLine(groupName){
	if(document.getElementById("line"+groupName)==null){
    	var resultDisplay = document.getElementById(groupName);
    	var div = document.createElement('div');
   		div.setAttribute('class','result-line');
		div.setAttribute('id',"line"+groupName);
    	resultDisplay.appendChild(div);
	}
}

function createResult(groupName,name){
	var div = document.getElementById("buttons"+groupName);
	if(div==null){
		var resultDisplay = document.getElementById(groupName);
		var divOuter = document.createElement('div');
		divOuter.setAttribute('class',"result-box-padding");
		div = document.createElement('div');
		div.setAttribute('class',"result-box");
		div.setAttribute('id',"buttons"+groupName);
		resultDisplay.appendChild(divOuter);
		divOuter.appendChild(div);
	}
	var button = document.createElement('button');
	button.setAttribute('onClick',"showInfo()");
	var text = document.createTextNode(name);
	button.appendChild(text);
	div.appendChild(button);
}

function showLogin(){
    document.getElementById('login').style.display='block';
    document.getElementById('blurable').className = "blur"; 
}

function removeLogin(){
    document.getElementById('login').style.display='none';
    document.getElementById('blurable').className = "unblur"; 
}

function showInfo(){
    document.getElementById('info').style.display='block';
    document.getElementById('blurable').className = "blur"; 
}

function removeInfo(){
    document.getElementById('info').style.display='none';
    document.getElementById('blurable').className = "unblur"; 
}

function showSignup(){
    document.getElementById('signup').style.display='block';
    document.getElementById('blurable').className = "blur"; 
}

function removeSignup(){
    document.getElementById('signup').style.display='none';
    document.getElementById('blurable').className = "unblur"; 
}

