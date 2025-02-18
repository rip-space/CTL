let ctl = document.getElementById("code");
let code = ctl.value; // Store the initial value of the textarea
let num = 1; // Line number counter
const lines = new Map(); // Initialize an empty Map for lines
const funct = new Map(); // Function storage Map
const varr = new Map(); // Variable storage Map

// Function to create a new textarea element
function createTextarea(id) {
    let textarea = document.createElement('textarea');
    textarea.setAttribute('id', id);
    textarea.style.resize = 'none';
    textarea.style.width = '100%';
    textarea.style.height = '20px';
    textarea.style.marginTop = '5px';

    // Add event listener to the new textarea
    textarea.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent default behavior of Enter key

            // Retrieve the line code from the current line
            let currentLineId = `line${num}`;
            let linecode = textarea.value.trim(); // Get value from the current textarea

            // Check if the linecode is empty
            if (linecode === '') {
                displayMessage("Please enter a line of code before adding a new line.");
                return; // Exit if the textarea is empty
            }

            // Store the new line in the Map
            lines.set(currentLineId, linecode);

            // Create a new line ID for the next textarea
            let newLineId = `line${num + 1}`;

            // Append new textarea to body
            let newTextarea = createTextarea(newLineId);
            document.body.appendChild(newTextarea);
            newTextarea.focus(); // Set focus on the new textarea

            // Increment the line number
            num++;

            // Call p() to process the lines whenever a new line is added
            p();
        }
    });

    return textarea;
}

// Event listener for the initial textarea
ctl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default behavior of Enter key

        // Retrieve the line code from the current line
        let currentLineId = `line${num}`;
        let linecode = ctl.value.trim(); // Get value from the input textarea

        // Check if the linecode is empty
        if (linecode === '') {
            displayMessage("Please enter a line of code before adding a new line.");
            return; // Exit if the textarea is empty
        }

        // Store the new line in the Map
        lines.set(currentLineId, linecode);

        // Create a new line ID for the next textarea
        let newLineId = `line${num + 1}`;

        // Append new textarea to body
        let newTextarea = createTextarea(newLineId);
        document.body.appendChild(newTextarea);
        newTextarea.focus(); // Set focus on the new textarea

        // Increment the line number
        num++;

        // Call p() to process the lines whenever a new line is added
        p();
    }
});

// Initialize the first line in the Map
lines.set('line1', code);

// Function to process stored lines
function p() {
    // Clear previous output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous output

    for (let numline = 1; numline <= num; numline++) { // Use <= num for existing lines
        let linnnee = `line${numline}`;
        let linnee = lines.get(linnnee);

        if (!linnee) continue; // Skip undefined lines

        if (linnee.startsWith("alert")) {
            let text = linnee.substring(6).trim(); // Extract alert message
            text = text.replace(/\/(\w+)/g, (match, p1) => varr.get(p1) || ''); // Replace variables with their values
            if (text) alert(text);
        } else if (linnee.startsWith("text")) {
            let text = linnee.substring(5).trim(); // Extract text message
            text = text.replace(/\/(\w+)/g, (match, p1) => varr.get(p1) || ''); // Replace variables with their values
            if (text) {
                let p = document.createElement("p");
                p.textContent = text; // Set the text safely
                outputDiv.appendChild(p); // Append to the output div
            }
        } else if (linnee.startsWith("var")) {
            let varAssignment = linnee.substring(4).trim(); // Extract variable assignment
            let [varName, varValue] = varAssignment.split('=').map(s => s.trim()); // Split by = to get name and value
            if (varName && varValue) varr.set(varName, varValue); // Store variable in the map
        } else if (linnee.startsWith("function")) {
            let functspot = linnee.indexOf(')');
            if (functspot !== -1) {
                let functname = linnee.substring(9, functspot).trim(); // Get function name
                let functcode = linnee.substring(functspot + 1).trim(); // Get function code
                if (functname && functcode) funct.set(functname, functcode); // Save function code in the map
            }
        } else if (linnee.startsWith("run")) {
            let getspot = linnee.indexOf(')');
            if (getspot !== -1) {
                let getfunctname = linnee.substring(4, getspot).trim(); // Get function name to run
                let functt = funct.get(getfunctname); // Retrieve function code
                
                if (functt) {
                    // Evaluate the function code
                    try {
                        // Wrap the function code in a self-invoking function to allow text output
                        (function() {
                            let outputText = '';
                            let print = function(text) {
                                outputText += text + '\n';
                            };
                            let getVar = function(name) {
                                return varr.get(name) || '';
                            };
                            eval(functt);
                            if (outputText) {
                                let p = document.createElement("p");
                                p.textContent = outputText.trim(); // Set the text safely
                                outputDiv.appendChild(p); // Append to the output div
                            }
                        })();
                    } catch (e) {
                        displayMessage(`Error executing function ${getfunctname}: ${e.message}`);
                    }
                } else {
                    displayMessage(`Function ${getfunctname} is not defined.`);
                }
            }
        }
    }
}

// Function to display messages on the page
function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.textContent = message;
        setTimeout(() => messageDiv.textContent = '', 3000); // Clear message after 3 seconds
    }
}
