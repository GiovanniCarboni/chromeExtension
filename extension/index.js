const inputBtn = document.getElementById("input-btn");
const inputEl = document.querySelector("#input-el");
const clearBtn = document.getElementById("clear-btn");
const ulEl = document.querySelector("#ul-el");
const tabBtn = document.querySelector("#tab-btn");
const showBtn = document.getElementById("show-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

let myLeads = [];
let oldLeads = null; // do you wanna show the old leads? make this button

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	render(myLeads);
}

function render(arr) {
	let listItems = "";
	for (let i = 0; i < arr.length; i++) {
		listItems += `
					<li>
						<a href="${arr[i]}" target="_blank">
							${arr[i]}
						</a>
					</li>
					`;
	};
	ulEl.innerHTML = listItems;
};

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
	inputEl.value = " ";
	console.log(localStorage.getItem("myLeads"));
});

tabBtn.addEventListener("click", function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		myLeads.push(tabs[0].url);
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		render(myLeads);
	});
});

clearBtn.addEventListener("click", function() {
	if (myLeads.length > 0) {oldLeads = myLeads};
	localStorage.setItem("oldLeads", JSON.stringify(oldLeads));
	localStorage.clear("myLeads");
	myLeads = [];
	render(myLeads);
});

showBtn.addEventListener("click", function() {
	render(oldLeads);
});

