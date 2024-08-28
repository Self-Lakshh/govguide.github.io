var userQuery = "";
var queryCount = 0;

document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("user-input-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        // Get the user's query
        var userQuery = document.getElementById("query").value;
        console.log(userQuery);
    
        // Get the chat container element
        var mainArea = document.getElementById("chat-container");
    
        // Increment the query count for unique IDs
        queryCount++;
    
        // Create a new div element to display the user's query
        var newDiv = document.createElement("div");
        newDiv.id = `query-${queryCount}`;
        newDiv.style.backgroundColor = "aquamarine";
        newDiv.style.color = "black";
        newDiv.style.width = "70%";
        newDiv.style.display = "flex";
        newDiv.innerHTML = `<p>${userQuery}</p>`;
    
        // Append the new div to the chat container
        mainArea.appendChild(newDiv);
    
        // Optionally clear the input field after submission
        document.getElementById("query").value = "";
    });

    function getQuery() {
        // Get the input value
        userQuery = document.getElementById("query").value;
        console.log("User Query: " + userQuery);
    
        // Get the chat container element
        var area = document.getElementById("chat-container");
    
        // Append the user query as a new div inside the chat container
        area.innerHTML += `<div style="width: 70%; background: yellow; color: black; margin: 10px 0; padding: 10px;">${userQuery}</div>`;
    }

    // Function to get the NLP reply (for demonstration purposes)
    function getReply() {
        var area = document.getElementById("chat-container"); 
        area.innerHTML = "<div style='width:70%;background:yellow;color:white'></div>";
        console.log("NLP Reply: " + nlpReply);
    }
});