const inputBtn = document.getElementById("input-btn");
const inputEl = document.querySelector("#input-el");
const clearBtn = document.getElementById("clear-btn");
const ulEl = document.querySelector("#ul-el");


let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads();
}

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();
	inputEl.value = " ";
	console.log(localStorage.getItem("myLeads"));
});

clearBtn.addEventListener("click", function() {
	localStorage.clear();
	myLeads = [];
	renderLeads();
})

function renderLeads() {
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		listItems += `
					<li>
						<a href="${myLeads[i]}" target="_blank">
							${myLeads[i]}
						</a>
					</li>
					`;
	};
	ulEl.innerHTML = listItems;
};

