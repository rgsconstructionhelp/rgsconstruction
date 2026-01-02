  const scriptURL =                       
      "https://script.google.com/macros/s/AKfycbxzJl0ksA-5tZUlzfucaYFcFUF-DSdjik0qTGpdUWjpi1Bx3okorOFM6WB6s1UOq4Hy/exec";
      const form = document.forms["submit-to-google-sheet"];
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);
        var ex = document.getElementById("ex").checked;
        var age = document.getElementById("age").checked;

        if (age) {
          formData.append("age", "Yes");
        } else {
          formData.append("age", "No");
        }
        if (ex) {
          formData.append("ex", "Yes");
        } else {
          formData.append("ex", "No");
        }

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });