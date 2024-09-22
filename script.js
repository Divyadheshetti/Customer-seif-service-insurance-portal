document.addEventListener("DOMContentLoaded", function () {
    let claims=[];
    const claimForm = document.getElementById("claim-form");
    const claimstist = document.getElementById("claims-list");
    const submissionMessage= document.getElementById("submission-message");
  
     // claim Submission
    claimForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const policyNumber =document.getElementById("policy-number").value;
        const incidentDate = document.getElementById("incident-date").value;
        const description = document.getElementById("description").value;

       if (policyNumber && incidentDate  && description) {
         const newClaim={
            id: `CLM${claims.length + 1}`,
            policyNumber,
            date: incidentDate,
            description,
            status: "In Review",
          };
    
            claims.push(newClaim);
            submissionMessage.textContent = "Clain submitted successfully!";
            claimForm.reset();
            setTimeout(function () {
               submissionMessage.textContent="";
            }, 2000); 
            updateclaimsList();
        }else {
           submissionMessage.textContent ="Please fill all the fields.";
        }
    });
    
  
    
    //updating Claim List
    function updateclaimsList(){
      claimstist.innerHTML=claims.map(claim => `
            <tr>
                <td>${claim.id}</td>
                <td>${claim.status}</td>
                <td>${claim.date}</td>
            </tr>
       `).join('');
    }
    
    //navigation  button event listeners
    document.getElementById("nav-file-claim").addEventListener("click", function () {
       toggleSections("claim-form-section");
    });
    document.getElementById("nav-track-claims").addEventListener("click", function () {
        toggleSections("claims-tracking-section");
    });
    document.getElementById("nav-chatbot").addEventListener("click", function () {
        toggleSections ("chatbot-section");
    });
    document.getElementById("nav-knowledge-base").addEventListener("click", function () {
        toggleSections("knowledge-base-section");
    });
        
    // Function to show the correct section and hide others
    function toggleSections (sectionId) {
      document.querySelectorAll("section").forEach(section => section.style.display = "none");
      document.getElementById(sectionId).style.display = "block";
    }
        
    // For knowledge base 
    let articles = [
         "How to file an insurance claim",
         "What documents are required for insurance claims?",
         "How to track the status of your claim", "Understanding insurance policies",
         "How to update your insurance policy",
         "FAQs about insurance claim processing"
    ];
    let searchBar = document.querySelector("#search-bar");
    let searchResults = document.querySelector("#search-results");
            
    searchBar.addEventListener("input", function () {
        let query = searchBar.value.toLowerCase(); 
        searchResults.innerHTML = ""; // clear previous results
            
        // Filter articles based on the query
        articles.forEach(article => {
            if (article.toLowerCase().includes (query)) {
               let li = document.createElement("li"); 
               li.textContent = article;
               searchResults.appendChild(li);
            }
            
        });
            
           
    });
});
            
    
    