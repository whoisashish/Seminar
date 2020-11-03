(function () {
    'use strict';

    class Menu {
        constructor(settings) {
            this.menuNode = settings.menuNode;
            this.state = false;
            this.menuStateTextNode = settings.menuStateTextNode || this.menuNode.querySelector('.menu__screen-reader');
            this.menuOpenedText = settings.menuOpenedText || 'Open menu';
            this.menuClosedText = settings.menuClosedText || 'Close menu';
        }

        changeState(state) {
            return this.state = !state;
        }

        changeStateText(state, node) {
            let text = (state !== true) ? this.menuOpenedText : this.menuClosedText;

            node.textContent = text;
            return text;
        }

        toggleMenuState(className) {

            let state;

            if (typeof className !== 'string' || className.length === 0) {
                return console.log('you did not give the class for the toggleState function');
            }

            state = this.changeState(this.state);

            this.changeStateText(state, this.menuStateTextNode);
            this.menuNode.classList.toggle(className);

            return state;
        }
    }

    const jsMenuNode = document.querySelector('.menu');
    const demoMenu = new Menu({
        menuNode: jsMenuNode
    });

    function callMenuToggle(event) {
        demoMenu.toggleMenuState('menu_activated');
    }

    jsMenuNode.querySelector('.menu__toggle').addEventListener('click', callMenuToggle);
    jsMenuNode.querySelector('.homeToggle').addEventListener('click', callMenuToggle);
    jsMenuNode.querySelector('.allToggle').addEventListener('click', callMenuToggle);
    jsMenuNode.querySelector('.staffToggle').addEventListener('click', callMenuToggle);
    jsMenuNode.querySelector('.binToggle').addEventListener('click', callMenuToggle);
})();

var home = document.getElementById("home");
var all = document.getElementById("all");
var bin = document.getElementById("bin");
var staff = document.getElementById("staff");
var menuMain = document.getElementById("menu");
var bin1 = document.getElementById("bin1");
var bin2 = document.getElementById("bin2");
var bin3 = document.getElementById("bin3");
var bin4 = document.getElementById("bin4");
var bin5 = document.getElementById("bin5");
var bin6 = document.getElementById("bin6");
var bin7 = document.getElementById("bin7");
var bin8 = document.getElementById("bin8");
var bin9 = document.getElementById("bin9");
var bin10 = document.getElementById("bin10");

function openHome() {
    home.style.display = "block";
    all.style.display = "none";
    bin.style.display = "none";
    staff.style.display = "none";
}

function openAll() {
    home.style.display = "none";
    all.style.display = "block";
    bin.style.display = "none";
    staff.style.display = "none";
}

function openStaff() {
    home.style.display = "none";
    all.style.display = "none";
    staff.style.display = "block";
    bin.style.display = "none";
}

function openBin() {
    bin.classList.toggle("hideBin");
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    openBin();
}

window.onclick = function (event) {
    if (event.target == bin) {
        openBin();
    }
}

var binCount = document.getElementById("binsFullCount");
var oldCount = binCount.innerHTML;
var newCount = 0;

if (parseInt(oldCount) < 0) {
    oldCount = 0;
}

function fillBin() {
    if (parseInt(oldCount) < 10) {
        newCount = parseInt(oldCount) + 1;
        oldCount = newCount;
        binCount.innerHTML = oldCount;
    }
    allBins();
}

function emptyBin() {
    if (parseInt(oldCount) > 0) {
        newCount = parseInt(oldCount) - 1;
        oldCount = newCount;
        binCount.innerHTML = oldCount;
    }
    allBins();
}

function allBins() {
    if (newCount == 0) {
        bin1.innerHTML = "Empty";
        bin2.innerHTML = "Empty";
        bin3.innerHTML = "Empty";
        bin4.innerHTML = "Empty";
        bin5.innerHTML = "Empty";
        bin6.innerHTML = "Empty";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 1) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Empty";
        bin3.innerHTML = "Empty";
        bin4.innerHTML = "Empty";
        bin5.innerHTML = "Empty";
        bin6.innerHTML = "Empty";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 2) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Empty";
        bin4.innerHTML = "Empty";
        bin5.innerHTML = "Empty";
        bin6.innerHTML = "Empty";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 3) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Empty";
        bin5.innerHTML = "Empty";
        bin6.innerHTML = "Empty";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 4) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Empty";
        bin6.innerHTML = "Empty";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 5) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Filled";
        bin6.innerHTML = "Empty";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 6) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Filled";
        bin6.innerHTML = "Filled";
        bin7.innerHTML = "Empty";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 7) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Filled";
        bin6.innerHTML = "Filled";
        bin7.innerHTML = "Filled";
        bin8.innerHTML = "Empty";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 8) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Filled";
        bin6.innerHTML = "Filled";
        bin7.innerHTML = "Filled";
        bin8.innerHTML = "Filled";
        bin9.innerHTML = "Empty";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 9) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Filled";
        bin6.innerHTML = "Filled";
        bin7.innerHTML = "Filled";
        bin8.innerHTML = "Filled";
        bin9.innerHTML = "Filled";
        bin10.innerHTML = "Empty";
    }
    if (newCount == 10) {
        bin1.innerHTML = "Filled";
        bin2.innerHTML = "Filled";
        bin3.innerHTML = "Filled";
        bin4.innerHTML = "Filled";
        bin5.innerHTML = "Filled";
        bin6.innerHTML = "Filled";
        bin7.innerHTML = "Filled";
        bin8.innerHTML = "Filled";
        bin9.innerHTML = "Filled";
        bin10.innerHTML = "Filled";
    }
}

const main = document.querySelector("main");

main.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const {
            name
        } = e.target.dataset;
        if (name === "add-btn") {
            const todoInput = main.querySelector('[data-name="todo-input"]');
            if (todoInput.value.trim() !== "") {
                const value = todoInput.value;
                const template = `
        <li class="list-group-item" draggable="true" data-id="${Date.now()}">
          <p>${value}</p>
          <button class="btn btn-outline-danger btn-sm" data-name="remove-btn">X</button>
        </li>
        `;
                const todosList = main.querySelector('[data-name="todos-list"]');
                todosList.insertAdjacentHTML("beforeend", template);
                todoInput.value = "";
            }
        } else if (name === "remove-btn") {
            e.target.parentElement.remove();
        }
    }
});

main.addEventListener("dragenter", (e) => {
    if (e.target.classList.contains("list-group")) {
        e.target.classList.add("drop");
    }
});

main.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("drop")) {
        e.target.classList.remove("drop");
    }
});

main.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("list-group-item")) {
        e.dataTransfer.setData("text/plain", e.target.dataset.id);
    }
});

let elemBelow = "";

main.addEventListener("dragover", (e) => {
    e.preventDefault();

    elemBelow = e.target;
});

main.addEventListener("drop", (e) => {
    const todo = main.querySelector(
        `[data-id="${e.dataTransfer.getData("text/plain")}"]`
    );

    if (elemBelow === todo) {
        return;
    }

    if (elemBelow.tagName === "P" || elemBelow.tagName === "BUTTON") {
        elemBelow = elemBelow.parentElement;
    }

    if (elemBelow.classList.contains("list-group-item")) {
        const center =
            elemBelow.getBoundingClientRect().y +
            elemBelow.getBoundingClientRect().height / 2;

        if (e.clientY > center) {
            if (elemBelow.nextElementSibling !== null) {
                elemBelow = elemBelow.nextElementSibling;
            } else {
                return;
            }
        }

        elemBelow.parentElement.insertBefore(todo, elemBelow);
        todo.className = elemBelow.className;
    }

    if (e.target.classList.contains("list-group")) {
        e.target.append(todo);

        if (e.target.classList.contains("drop")) {
            e.target.classList.remove("drop");
        }

        const {
            name
        } = e.target.dataset;

        if (name === "completed-list") {
            if (todo.classList.contains("in-progress")) {
                todo.classList.remove("in-progress");
            }
            todo.classList.add("completed");
        } else if (name === "in-progress-list") {
            if (todo.classList.contains("completed")) {
                todo.classList.remove("completed");
            }
            todo.classList.add("in-progress");
        } else {
            todo.className = "list-group-item";
        }
    }
});
