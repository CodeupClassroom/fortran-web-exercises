(function () {

    // TODO: Challenge yourself by replacing all of the Vanilla JS DOM code with jQuery!

// get the thing
    let navContent = document.getElementById("navContent");

// create an element
    let nameElement = document.createElement("p");

// get the data and set it to the text of the new element
    nameElement.innerText = "Hi, " + getGitHubInfo().name + "!";

// TODO: Add nameElement to the DOM - specifically in between the GitHub Logo and the ul on the navbar
    navContent.insertBefore(nameElement, navContent.children[1]);

    let contentDiv = document.querySelector('div.container-fluid.container-md.row.mx-md-auto.mt-4');

    let details = document.createElement('p');
    details.innerText = getGitHubInfo().details;

    contentDiv.replaceChildren();

    // Target a specific area on the DOM to insert our new paragraph
    $('body > script').first().before($(getNewParagraph()).addClass("test-class"));

    // add multiple classes and css props to a given element
    $("#navContent > p").addClass("col-4 align-self-end text-start").css({
        "color": "white",
        "border": "white 2px solid",
        "border-radius": "30%"
    });

    // target ALL elements on the body
    // $("*").css("border", "red 2px solid")
    //

    // add a hover event to each selected element through
    // IMPLICIT iteration (loop without writing the loop)
    // $("body > div > p").hover(function (){
    //     $(this).css("background-color", "red")
    // }, function(){
    //     $(this).css("background-color", "white");
    // })

    // log out the text contents of EACH selected element
    // $("body > div > p").each(function(){
    //     console.log($(this).text())
    // })

    // $.each() lets you iterate over ANY collection
    // var myArr = ["dog", "cat", "bird"];
    //
    // $.each(myArr, function(){
    //     console.log($(this));
    // });

    // $().each() is meant for collections of jQuery objects, DOM Nodes, or HTML Elements
    $("ul > li").each(function () {
        if ($(this).first().text() === "Global Domination 😍") {
            $(this).first().text("Global.. benevolence...")
        }
    })

    //return a template string representing new html element(s)
    //language=HTML
    function getNewParagraph() {
        return `
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa, cum cupiditate eum facilis
               inventore ipsum iure iusto maiores nam necessitatibus officiis quaerat quisquam recusandae suscipit
               voluptas voluptatibus. Aliquid amet dicta, fugit inventore iure laborum nihil non nostrum obcaecati
               officia officiis quasi, sequi sint sit sunt tenetur, voluptates! Adipisci asperiores at, consequatur
               cumque dicta dignissimos earum ex exercitationem laudantium minima minus mollitia nam natus
               necessitatibus nemo porro quis soluta voluptatem! A ad animi culpa, dolore eos est hic id itaque
               laudantium libero mollitia natus nemo nihil nulla odit officiis perferendis praesentium quam quasi
               repellat saepe similique ut voluptate? Commodi, modi.</p>
          </div>
        `
    }

// PRETEND THIS IS AN API CALL ACROSS THE INTERWEBS
    function getGitHubInfo() {
        return {
            name: "vegetasrevenge",
            details: "I DO CODE REAL GUD 🧠"
        };
    }
})()






