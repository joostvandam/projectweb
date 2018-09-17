
function searchClicked() {
    /**
     * Get the value from the searchbox
     * Get a list of titles based on the H3 tag
     * Get a list of articles
     * Find all articles where the title (partially) matches the Search Query
     * Color all the matching articles aqua.
     */
    let searchQuery = document.querySelector(".zoeken input").value;
    let titles = document.querySelectorAll("#overview article h3");
    let articles = document.querySelectorAll("#overview article");
    for(let i = 0; i < titles.length; i++) {
        let title = titles[i];
        if (title.innerText.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) {
            articles[i].classList.remove("found");
            continue;
        }
        articles[i].classList.add("found");
    }
}


/**
 * Instead of using jQuery and the command:
 *  $(document).ready({
 *      //code here
 *  });
 *  I used vanilla JavaScript, based on this answer: https://stackoverflow.com/a/800010
 */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".klik").addEventListener("click", searchClicked);
});

