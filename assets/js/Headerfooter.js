 
    // Include header.html
    const headerContainer = document.getElementById("headerContainer");
    fetch("header.html")
        .then(response => response.text())
        .then(content => {
            headerContainer.innerHTML = content;
        });

    // Include footer.html
    const footerContainer = document.getElementById("footerContainer");
    fetch("footer.html")
        .then(response => response.text())
        .then(content => {
            footerContainer.innerHTML = content;
        });
 