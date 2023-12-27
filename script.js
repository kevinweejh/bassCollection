// 1. Password validation
const validatePassword = (passwordInput) => {
    const validationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let classes = document.getElementById("password").classList;
    if(!validationRegex.test(passwordInput)) {
        classes.add("border-red-700", "border");
        classes.remove("border-green-700");
        console.log("password no validate")
    } else {
        classes.remove("border-red-700");
        classes.add("border-green-700", "shadow-outline");
        console.log("password validated")
    }
}

// 2. Password matching
const matchPassword = (passwordInput, confirmPasswordInput) => {
    let classes = document.getElementById("confirm-password").classList;
    if(passwordInput !== confirmPasswordInput) {
        classes.add("border-red-700", "border");
        classes.remove("border-green-700");
        console.log("password no match")
    } else {
        classes.remove("border-red-700");
        classes.add("border-green-700", "shadow-outline");
        console.log("password matched")
    }
}

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

confirmPasswordInput.addEventListener("input", () => matchPassword(passwordInput.value, confirmPasswordInput.value));   
passwordInput.addEventListener("input", () => validatePassword(passwordInput.value));  

// 3. Brand -> Other -> Unhide 'Other brand' and 'Other model' label + input, enable both, and disable 'Model' input
const otherBrandToggle = (brandInput) => {
    if(brandInput === "Other") {
        otherBrandLabel.removeAttribute("hidden");
        otherBrandInput.removeAttribute("hidden");
        otherBrandInput.removeAttribute("disabled");
        otherModelLabel.removeAttribute("hidden");
        otherModelInput.removeAttribute("hidden");
        otherModelInput.removeAttribute("disabled");
    }
}

const brandInput = document.getElementById("brand");
const otherBrandLabel = document.getElementById("other-brand-label");
const otherBrandInput = document.getElementById("other-brand");
const modelInput = document.getElementById("model");
const otherModelLabel = document.getElementById("other-model-label");
const otherModelInput = document.getElementById("other-model");

brandInput.addEventListener("change", () => otherBrandToggle(brandInput.value));

// 4. Model -> [value ends with 'other'] -> Unhide 'Other model' label + input, and enable
const otherModelToggle = (modelInput) => {
    let model;
    modelLastWord = modelInput.split("-").pop();
    
    if(modelLastWord === "other") {
        otherModelLabel.removeAttribute("hidden");
        otherModelInput.removeAttribute("hidden");
        otherModelInput.removeAttribute("disabled");
    }
}

modelInput.addEventListener("change", () => otherModelToggle(modelInput.value));

// 5. Assign the correct datalist based on Brand
const assignModelDatalist = (brandInput) => {
    switch(brandInput) {
        case "Fender":
            modelInput.setAttribute("list", "fender-model-list")
            break;
        case "Squier":
            modelInput.setAttribute("list", "squier-model-list")
            break;
        case "Ibanez":
            modelInput.setAttribute("list", "ibanez-model-list")
            break;
        case "Music Man":
            modelInput.setAttribute("list", "musicman-model-list")
            break;
        case "Sterling":
            modelInput.setAttribute("list", "sterling-model-list")
            break;
        case "Yamaha":
            modelInput.setAttribute("list", "yamaha-model-list")
            break;
    }
}
brandInput.addEventListener("change", () => assignModelDatalist(brandInput.value));