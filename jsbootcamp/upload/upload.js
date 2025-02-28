const input = document.querySelector('input[type="file"]');
input.addEventListener("change", (e) => {
    const form = document.querySelector("form");
    const fd = new FormData(form);

    // add all selected files
    // e.target.files.forEach((file) => {
    //   fd.append(e.target.name, file, file.name);
    // });

    // create the request
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            // we done!
        }
    };

    // path to server would be where you'd normally post the form to
    xhr.open("POST", "./api", true);
    xhr.send(fd);
});

// const form = document.querySelector("form");
// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   const form = event.currentTarget;
//   const url = new URL(form.action);
//   const formData = new FormData(form);
//   const searchParams = new URLSearchParams(formData);

//   const fetchOptions = {
//     method: form.method,
//   };

//   if (form.method.toLowerCase() === "post") {
//     if (form.enctype === "multipart/form-data") {
//       fetchOptions.body = formData;
//     } else {
//       fetchOptions.body = searchParams;
//     }
//   } else {
//     url.search = searchParams;
//   }

//   fetch(url, fetchOptions)
//     .then((response) => {
//       if (!response.ok) throw new Error(`${response.status}`);
//       console.log(response);
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   event.preventDefault();
// }
