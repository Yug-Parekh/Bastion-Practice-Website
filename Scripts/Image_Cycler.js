

const Bastions = ["images/Home_Page_Pictures/Treasure_Bastion.webp", "images/Home_Page_Pictures/Housing_Bastion.webp", "images/Home_Page_Pictures/Bridge_Bastion.webp", "images/Home_Page_Pictures/Stables_Bastion.webp"];

let currentBastion = 0;

const imgElement = document.getElementById("Bastion_cycle");

function cycleBastions() {
    currentBastion++;

    // Go back to the first image when it reaches the end of the array
    if (currentBastion >= Bastions.length) {
        currentBastion = 0;
    }

    // Update the image source to show the Bastion
    imgElement.src = Bastions[currentBastion];
}

setInterval(cycleBastions, 5000); // Change image every 5 seconds
