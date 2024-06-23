document
  .getElementById("subscribe-button")
  .addEventListener("click", function () {
    alert("Thank you for subscribing!");
  });

var rows = document.getElementById("blog-posts").rows;
for (var i = 0; i < rows.length; i++) {
  rows[i].addEventListener("click", function () {
    var blogTitle = this.cells[0].innerText;
    alert("You clicked on " + blogTitle);
  });
}
