
// Select the container element that holds the buttons
const container = document.getElementById("Selection_Buttons");

// Add an event listener to the container to handle button clicks
container.addEventListener('click', function(event) {

    // Check which button was clicked out of the four.
    if (event.target.id === "Bridge_Bastion") {

        // If the Bridge Bastion button was clicked, it will add more buttons for the orientations of the Bridge
        container.innerHTML = '';

        const left_single_triple = document.createElement("button");
        left_single_triple.textContent = "Left Single Right Triple";
        left_single_triple.className = "Left_Single_Triple";
        left_single_triple.id = "Left_Single_Triple";

        const double_triple = document.createElement("button");
        double_triple.textContent = "Double Triple";
        double_triple.className = "Double_Triple";
        double_triple.id = "Double_Triple";

        const right_single_triple = document.createElement("button");
        right_single_triple.textContent = "Right Single Left Triple";
        right_single_triple.className = "Right_Single_Triple";
        right_single_triple.id = "Right_Single_Triple";

        const double_single = document.createElement("button");
        double_single.textContent = "Double Single";
        double_single.className = "Double_Single";
        double_single.id = "Double_Single";

        container.appendChild(double_single);
        container.appendChild(double_triple);
        container.appendChild(right_single_triple);
        container.appendChild(left_single_triple);
    }

    if (event.target.id === "Housing_Bastion") {

        // If the Housing Bastion button was clicked, it will add more buttons for the orientations of the Housing
        container.innerHTML = '';

        const left_single = document.createElement("button");
        left_single.textContent = "Left Single";
        left_single.className = "Left_Single_Housing";
        left_single.id = "Left_Single_Housing";

        const left_ruins = document.createElement("button");
        left_ruins.textContent = "Left Ruins";
        left_ruins.className = "Left_Ruins_Housing";
        left_ruins.id = "Left_Ruins_Housing";

        const double_triple = document.createElement("button");
        double_triple.textContent = "Double Triple";
        double_triple.className = "Double_Triple_Housing";
        double_triple.id = "Double_Triple_Housing";
        

        container.appendChild(double_triple);
        container.appendChild(left_single);
        container.appendChild(left_ruins);
    }

    if (event.target.id === "Stables_Bastion") {
    container.innerHTML = '';

    const buttonGrid = document.createElement("div");
    buttonGrid.className = "Stables_Button_Grid";

    const Triple = document.createElement("button");
    Triple.textContent = "Triple";
    Triple.className = "Triple_Stables";

    const Triple_Wrapper = document.createElement("div");
    Triple_Wrapper.style.cssText = "position: relative; display: inline-block;";
    Triple_Wrapper.className = "Triple_Wrapper";

    const Single = document.createElement("button");
    Single.textContent = "Single";
    Single.className = "Single_Stables";

    const Single_Wrapper = document.createElement("div");
    Single_Wrapper.style.cssText = "position: relative; display: inline-block;";
    Single_Wrapper.className = "Single_Wrapper";

    const Lantern = document.createElement("button");
    Lantern.textContent = "Lantern";
    Lantern.className = "Lantern_Stables";

    const Lantern_Wrapper = document.createElement("div");
    Lantern_Wrapper.style.cssText = "position: relative; display: inline-block;";
    Lantern_Wrapper.className = "Lantern_Wrapper";

    const submit_stables = document.createElement("button");
    submit_stables.textContent = "Submit";
    submit_stables.className = "Submit_Stables";
    submit_stables.id = "Submit_Stables";

    const selectedValues = {
        Triple: '',
        Single: '',
        Lantern: ''
    };

    const Triple_Menu = document.createElement("div");
    Triple_Menu.style.cssText = "display: none; position: absolute; top: calc(100% + 4px); left: 0; min-width: 160px; background: white; border: 1px solid #ccc; z-index: 100;";
    ["Triple Triple", "Left Triple", "Double Triple (L-M)", "Middle Triple", "Double Triple (M-R)", "Right Triple", "Double Triple (L-R)","No Triple"].forEach(optionLabel => {
        const menuItem = document.createElement("button");
        menuItem.textContent = optionLabel;
        menuItem.style.cssText = "display: block; width: 100%; padding: 8px 14px;";

        // store the value of the item clicked
        menuItem.addEventListener('click',function(e) {

            e.stopPropagation();
            selectedValues.Triple = this.textContent;
            Triple.textContent = this.textContent; // updates the text displayed on the button
            Triple_Menu.style.display = 'none';
            console.log('Triple selected:', selectedValues.Triple);

        })

        Triple_Menu.appendChild(menuItem);
    });

    const Single_Menu = document.createElement("div");
    Single_Menu.style.cssText = "display: none; position: absolute; top: calc(100% + 4px); left: 0; min-width: 160px; background: white; border: 1px solid #ccc; z-index: 100;";
    ["Triple Single", "Left Single", "Double Single (L-M)", "Middle Single", "Double Single (M-R)", "Right Single", "Double Single (L-R)","No Single"].forEach(optionLabel => {
        const menuItem = document.createElement("button");
        menuItem.textContent = optionLabel;
        menuItem.style.cssText = "display: block; width: 100%; padding: 8px 14px;";

        // store the value of the item clicked
        menuItem.addEventListener('click',function(e) {

            e.stopPropagation();
            selectedValues.Single = this.textContent;
            Single.textContent = this.textContent; // updates the text displayed on the button
            Single_Menu.style.display = 'none';
            console.log('Single selected:', selectedValues.Single);

        })

        Single_Menu.appendChild(menuItem);
    });

    const Lantern_Menu = document.createElement("div");
    Lantern_Menu.style.cssText = "display: none; position: absolute; top: calc(100% + 4px); left: 0; min-width: 160px; background: white; border: 1px solid #ccc; z-index: 100;";
    ["Triple Lantern", "Left Lantern", "Double Lantern (L-M)", "Middle Lantern", "Double Lantern (M-R)", "Right Lantern", "Double Lantern (L-R)","No Lantern"].forEach(optionLabel => {
        const menuItem = document.createElement("button");
        menuItem.textContent = optionLabel;
        menuItem.style.cssText = "display: block; width: 100%; padding: 8px 14px;";

        // store the value of the item clicked
        menuItem.addEventListener('click',function(e) {
            e.stopPropagation();
            selectedValues.Lantern = this.textContent;
            Lantern.textContent = this.textContent; // updates the text displayed on the button
            Lantern_Menu.style.display = 'none';
            console.log('Lantern selected:', selectedValues.Lantern);

        })

        Lantern_Menu.appendChild(menuItem);
    });

    Triple.addEventListener('click', (e) => {
        e.stopPropagation();
        Triple_Menu.style.display = Triple_Menu.style.display === 'none' ? 'block' : 'none';
        Single_Menu.style.display = 'none';
        Lantern_Menu.style.display = 'none';
    });

    Single.addEventListener('click', (e) => {
        e.stopPropagation();
        Single_Menu.style.display = Single_Menu.style.display === 'none' ? 'block' : 'none';
        Triple_Menu.style.display = 'none';
        Lantern_Menu.style.display = 'none';
    });

    Lantern.addEventListener('click', (e) => {
        e.stopPropagation();
        Lantern_Menu.style.display = Lantern_Menu.style.display === 'none' ? 'block' : 'none';
        Triple_Menu.style.display = 'none';
        Single_Menu.style.display = 'none';
    });

    document.addEventListener('click', () => {
        Triple_Menu.style.display = 'none';
        Single_Menu.style.display = 'none';
        Lantern_Menu.style.display = 'none';
    });

    // Logic for the Submit Button

    submit_stables.addEventListener('click', function(e) {

        if (!selectedValues.Triple || !selectedValues.Single || !selectedValues.Lantern) {
            alert("Please select an option for each of the buttons (Triple, Single, Lantern)");
            return;
        }

        const combinedFormation = selectedValues.Triple + " " + selectedValues.Single + " " + selectedValues.Lantern;

        console.log(currentQuestion, combinedFormation)

        if (combinedFormation === currentQuestion.formation) {
            currentScore += 2;
            submit_stables.classList.add("correct");
        } else {
            currentScore -= 2;
            submit_stables.classList.add("incorrect");
        }
        updateScoreDisplay();

        setTimeout(function() {
            submit_stables.classList.remove("correct", "incorrect");
            container.innerHTML = `
                <button class="Bridge_Bastion" id="Bridge_Bastion"> Bridge Bastion </button>
                <button class="Treasure_Bastion" id="Treasure_Bastion"> Treasure Bastion </button>
                <button class="Housing_Bastion" id="Housing_Bastion"> Housing Bastion </button>
                <button class="Stables_Bastion" id="Stables_Bastion"> Stables Bastion </button>
            `;
            questionPicker();
            updateScoreDisplay();
        }, 1000);
    });



    Triple_Wrapper.appendChild(Triple);
    Triple_Wrapper.appendChild(Triple_Menu);

    Single_Wrapper.appendChild(Single);
    Single_Wrapper.appendChild(Single_Menu);

    Lantern_Wrapper.appendChild(Lantern);
    Lantern_Wrapper.appendChild(Lantern_Menu);

    buttonGrid.appendChild(Triple_Wrapper);
    buttonGrid.appendChild(Single_Wrapper);
    buttonGrid.appendChild(Lantern_Wrapper);
    buttonGrid.appendChild(submit_stables);

    container.appendChild(buttonGrid);
    
    }

});