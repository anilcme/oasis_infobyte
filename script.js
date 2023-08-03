function showConfirmationPopup() {
      var savePassword = confirm("Do you want to save your password?");
      if (savePassword) {
        alert("Password saved!");
      } else {
        alert("Password not saved.");
      }

      alert("Email registration confirmed!");
    }