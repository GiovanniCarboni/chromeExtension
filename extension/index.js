const inputBtn = document.getElementById("input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");


let myLeads = [];

inputBtn.addEventListener("click", function() {
	myLeads.push(inputEl.value);
	renderLeads();
	inputEl.value = " ";
});

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

