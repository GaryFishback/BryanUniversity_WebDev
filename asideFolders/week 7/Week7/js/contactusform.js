const scrollButton = document.getElementById("scroll")
    // $(window).scroll(() => {
    //     ($(this).scrollTop() > 100 ?
    //         $(scrollButton).fadeIn() :
    //         $(scrollButton).fadeOut()
    //     )
    //     $(scrollButton).click(() => {
    //         $("html, body").animate({ scrollTop: 0 }, 600);
    //     });
    // });
scrollUp = () => {
    const scrollButton = document.getElementById("scroll")
    $(window).scroll(() => {
        ($(this).scrollTop() > 100 ?
            $(scrollButton).fadeIn() :
            $(scrollButton).fadeOut()
        )
        $(scrollButton).click(() => {
            $("html, body").animate({ scrollTop: 0 }, 600);
        });
    })
}
scrollUp()

//i'm honestly hesitant about messing much with the scroll up button or the navbar, for now,
// mostly for the sake of saving time. 
//After all those 2 aspects are maintained through the two pages already.


// <main>
//             <form class="contact-items" method="post" action="submit.html">
//                 <h1>OR - Let Us Contact You!</h1>
//                 <input type="text" placeholder="Your Name...">
//                 <input type="email" placeholder="Your Email...">
//                 <input type="tel" placeholder="Your Phone...">
//                 <textarea cols="20" rows="20" placeholder="Your Message Here..."></textarea>
//                 <button><a>Submit</a></button>
//             </form>
//     </main>

const main = document.getElementsByTagName("main")[0]
const footer = document.getElementsByTagName("footer")[0]
    // console.log(main)

//         <section>
//             <h1>Contact US: </h1>
//             <p><span>Phone:</span> (786)-546-9033</p>
//             <p><span>Email:</span> <a href="gisellesanchezj@yahoo.es">gisellesanchezj@yahoo.es</a></p>
//             <p><span>Address:</span> 9026 SW 97th Ave Apt 7, Miami Fl 33176</p>
//             <p><span>Website:</span> <a href="https://stillneedsadomain.com">https://stillneedsadomain.com</a></p>
//         </section>
const removingContactSection = document.getElementsByTagName("section")[1]

const removingContactForm = document.getElementsByClassName("contact-items")[0]

const formChildren = removingContactForm.children
console.log(formChildren)
const nameInput = formChildren[1]
const emailInput = formChildren[2]
const phoneInput = formChildren[3]
const pInput = formChildren[4]
console.log(name)
const formButton = document.getElementsByTagName("button")[1]
    // console.log(formButton)
const footerFigure = document.getElementsByTagName("figure")[0]
formButton.addEventListener("click", (e) => {
    e.preventDefault();

    // console.log(nameInput.value)
    // console.log(emailInput.value)
    // console.log(phoneInput.value)
    // console.log(pInput.value)
    const ul = document.createElement("ul")
    main.append(ul)
    ul.innerHTML = "<h1>Input List: </h1>"
    for (let i = 0; i < formChildren.length; i++) {

        // (formChildren[i].name === "Name" ? li.innerHTML = name.value : console.log("no"));
        // (formChildren[i].name === "email" ? li.innerHTML = name.value : console.log("no"));
        // (formChildren[i].name === "phone" ? li.innerHTML = name.value : console.log("no"));
        // (formChildren[i].name === "p" ? li.innerHTML = name.value : console.log("no"));
        const liInnerHtml = document.getElementsByTagName("li")
        if (formChildren[i].name === "Name") {
            const li = document.createElement("li")
            ul.append(li);
            li.innerHTML = nameInput.value
        }
        if (formChildren[i].name === "email") {
            const li = document.createElement("li")
            ul.append(li);
            li.innerHTML = emailInput.value
        }
        if (formChildren[i].name === "phone") {
            const li = document.createElement("li")
            ul.append(li);
            li.innerHTML = phoneInput.value
        }
        if (formChildren[i].name === "p") {
            const li = document.createElement("li")
            ul.append(li);
            li.innerHTML = pInput.value
        }
        // li.innerHTML = removingContactForm.Name.value;
    }


    // console.log("black")
    main.removeChild(removingContactSection)
    main.removeChild(removingContactForm)
    const submitH1 = document.createElement("h1")
    submitH1.innerHTML = "Contact US: "
        // submitH1.className = "contactus"
    footer.insertBefore(submitH1, footerFigure)
    const pArray = ["<span>Phone:</span> (786)-546-9033",
        '<span>Email:</span> <a href="gisellesanchezj @yahoo.es">gisellesanchezj@yahoo.es</a>',
        "<span>Address:</span> 9026 SW 97th Ave Apt 7, Miami Fl 33176",
        '<span>Website:</span> <a href="https://stillneedsadomain.com">https://stillneedsadomain.com</a>'
    ]
    pArray.forEach(element => {
        const p = document.createElement("p")
        p.innerHTML = element;
        footer.insertBefore(p, footerFigure)
    })
    const header = document.createElement("header")
    const headerH1 = document.createElement("h1")
    headerH1.textContent = "Acupuncture Clinic"
    const headerDivStructure = document.createElement("div")
    headerDivStructure.className = "headerstructurer"
    headerDivStructure.innerHTML = '<q>We will always treat you the way we would treat ourselves.</q><figure><img src="../../../../PublishingAcu_Mockup/Week6/img/bluegreenlightbadge.png"></figure>'
    document.body.insertBefore(header, main)
    header.append(headerH1, headerDivStructure)


})

// <header>
//         <h1>Acupuncture Clinic</h1>
//         <div class="headerstructurer">
//             <q>We will always treat you the way we would treat ourselves.</q>
//             <figure>
//                 <img src="../../../../PublishingAcu_Mockup/Week6/img/bluegreenlightbadge.png">
//             </figure>
//         </div>
//     </header>