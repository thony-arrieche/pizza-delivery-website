/*
DEFINE an observer that applies/removes a class when the
element is visible or scrolled away
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show-element');
        }
        else {
            entry.target.classList.remove('show-element');
        }
    });
});
/* Select the elements we want to hide from view until 
they are on user view
 */
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));
