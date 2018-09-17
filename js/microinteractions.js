/**
 * Micro-transaction 1 - search by title
 */
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
        let title = titles[i].textContent;
        if (title.toLowerCase().indexOf(searchQuery.toLowerCase()) === -1) { // If title doesn't match
            articles[i].classList.remove("found"); // Remove the found class
        }
        else {
            articles[i].classList.add("found"); // Else add the found class
        }
    }
    checkboxChange(document.querySelector("input[id=filter-check]")); // Filter boxes if checked.
}

/**
 * Micro-transaction 2 - Hover over boxes
 */
function mouseEvent() {
    /**
     * Make all articles small, once you hover over them, make them larger again.
     */
    for(let article of document.querySelectorAll("#overview article")) {
        article.classList.add("small");
        article.addEventListener("mouseover", onMouseOver, false);
        article.addEventListener("mouseout", onMouseOut, false);
    }
}
function onMouseOver() {
    this.classList.remove("small") // Remove the small class once the mouse hovers out of the box
}
function onMouseOut() {
    this.classList.add("small") // Add the small class once the mouse hovers into the box
}

/**
 * Micro-transaction 3 - Hide non-matching search results
 */
function checkboxChange(elem) {
    /**
     * Hide not found text boxed when checked and searched.
     */
    let articles = [...document.querySelectorAll("#overview article")]; // Get all articles and convert NodeList to array (https://stackoverflow.com/a/32767009)
    let articles_to_show = articles.filter(article => article.classList.contains("found")); // Find all articles that do have the class "found" in them
    if(elem.checked && articles_to_show.length > 0) { // If filter is checked, and there are some found you can hide
        let articles_to_hide = articles.filter(article => !article.classList.contains("found")); // Find all articles that do NOT have the class "found" in them
        articles_to_hide.map(article => article.classList.add("hide")); // Loop over all articles to hide and add the "hide" class
        articles_to_show.map(article => article.classList.remove("hide")); // Loop over all articles to show and remove the "hide" class
    } else { // Otherwise show all articles
        articles.map(article => article.classList.remove("hide")); // Loop over all articles and remove the "hide" class
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
    mouseEvent();


    document.querySelector("input[id=filter-check]").addEventListener( 'change', function() {checkboxChange(this)});
});

