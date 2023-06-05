function displayMemberInfo() {
    var selectedMember = document.getElementById("memberSelect").value;
    var memberInfoDiv = document.getElementById("memberInfo");
    
    // Hide all member info paragraphs
    var memberInfoParagraphs = memberInfoDiv.getElementsByTagName("p");
    for (var i = 0; i < memberInfoParagraphs.length; i++) {
        memberInfoParagraphs[i].style.display = "none";
    }
    
    // Display the selected member's info
    if (selectedMember) {
        var selectedMemberInfo = document.getElementById(selectedMember + "Info");
        selectedMemberInfo.style.display = "block";
   
  
  
    }
  }
  
  document.getElementById('member-select').addEventListener('change', function() {
    var selectedMember = this.value;
    var displayText = document.getElementById('display-text');
    
    switch (selectedMember) {
      case 'rza':
        displayText.textContent = "You selected RZA.";
        break;
      case 'gza':
        displayText.textContent = "You selected GZA.";
        break;
      case 'method-man':
        displayText.textContent = "You selected Method Man.";
        break;
      case 'ghostface-killah':
        displayText.textContent = "You selected Ghostface Killah.";
        break;
      case 'raekwon':
        displayText.textContent = "You selected Raekwon.";
        break;
      default:
        displayText.textContent = "Please select a member.";
        break;
    }
  });
  