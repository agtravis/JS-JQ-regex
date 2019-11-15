$(document).ready(function() {
    
    /*styling jQuery*/    
    $("p#h1h2").on("mouseover", function() {
        $("h1").add("h2").addClass("highlight");
    });
    $("p#h1h2").on("mouseout", function() {
        $("h1").add("h2").removeClass("highlight");
    });
    $("p#hTags").on("mouseover", function() {
        $("h1").add("h2").add("h3").add("h4").add("h5").add("h6").addClass("highlight");
    });
    $("p#hTags").on("mouseout", function() {        $("h1").add("h2").add("h3").add("h4").add("h5").add("h6").removeClass("highlight");
    });
    $("p#pBorder").on("mouseover", function() {
        $(".border").addClass("highlight");
    });
    $("p#pBorder").on("mouseout", function() {
        $(".border").removeClass("highlight");
    });
    $("li#visHead").on("mouseover", function() {
        $("div#header").css("background-color", "yellow");
    });
    $("li#visHead").on("mouseout", function() {
        $("div#header").css("background-color", "white");
    });
    $("p#links").on("mouseover", function() {
        $(".lia").addClass("highlight");
    });
    $("p#links").on("mouseout", function() {
        $(".lia").removeClass("highlight");
    });
    $("p#navbar").on("mouseover", function() {
        $(".ali").addClass("highlight");
    });
    $("p#navbar").on("mouseout", function() {
        $(".ali").removeClass("highlight");
    });
    $("li#responsive").on("mouseover", function() {
        $("body").addClass("highlight");
        $("div#header").css("background-color", "yellow");
    });
    $("li#responsive").on("mouseout", function() {
        $("body").removeClass("highlight");
        $("div#header").css("background-color", "white");
    });
    $("li#navBar").on("mouseover", function() {
        $("div#header").css("background-color", "yellow");
    });
    $("li#navBar").on("mouseout", function() {
        $("div#header").css("background-color", "white");
    });
    $("li#navButtons").on("mouseover", function() {
        $(".lia").addClass("highlight");
    });
    $("li#navButtons").on("mouseout", function() {
        $(".lia").removeClass("highlight");
    });
    $("li#anchors").on("mouseover", function() {
        $(".ali").addClass("highlight");
    });
    $("li#anchors").on("mouseout", function() {
        $(".ali").removeClass("highlight");
    });
    $("li#fontSizes").on("mouseover", function() {
        $("p, li, h1, h2, h3, h4, h5, h6").addClass("highlight");
    });    
    $("li#fontSizes").on("mouseout", function() {
        $("p, li, h1, h2, h3, h4, h5, h6").removeClass("highlight");
    });
    $("li#sideButtons").on("mouseover", function() {
        $("div#miniNav").addClass("highlight");
    });
    $("li#sideButtons").on("mouseout", function() {
        $("div#miniNav").removeClass("highlight");
    });
    
    /*windowScroll*/
    /*When the window scrolls...*/
    $(window).on("scroll", function() {
        
        /*The height of the current scroll position is stored as a variable.*/
        var currentHeight = $(window).scrollTop();
        
        /*The height of the header div is stored as a variable.*/
        var divHeight = $("div#header").height();
        
        /*If the current height is more than the height of the header (i.e. if the header is scrolled offscreen 100%)...*/
        if (currentHeight > divHeight) {
            
            /*The visibility of the navbar is made visible, and...*/
            $("div#miniNav").css("visibility", "visible");
            
            /*...the navbar is animated to the top of the screen.*/
            $("div#miniNav").animate({top: "0"}, "slow");
        }
        if (currentHeight < divHeight) {
            $("div#miniNav").stop(true).animate({top: "1000px"}, 100);
            /*$("div#miniNav").css("visibility", "hidden");*/
        }
    });
    
    /*javaScript*/
    
    /*alert*/
    $("input#alertButton").on("click", function() {
        alert("This is an alert!");
    });
    
    /*prompt*/
    $("input#promptButton").on("click", function() {
        var numOne = prompt("Enter a number");
        var numTwo = prompt("Enter another number");
        numOne = Number(numOne);
        numTwo = Number(numTwo);
        var numTot = numOne + numTwo;
        alert(numTot);
    });
    $("input#promptButtonFalse").on("click", function() {
        var numOne = prompt("Enter a number");
        var numTwo = prompt("Enter another number");
        var numTot = numOne + numTwo;
        alert(numTot);
    });
    
    /*concatenate*/
    $("input#concatenateButton").on("click", function() {
        var firstName = prompt("Enter your first name");
        var lastName = prompt("Enter your last name");
        alert("Your name is " + firstName + " " + lastName + ".");
    });
    
    /*ifElse*/
    $("input#ifElseButton").on("click", function() {
        var howOld = prompt("How old are you?");
        if (howOld >= 21) {
            alert("You are old enought to buy alcohol.");
        }
        else {
            alert("Sorry, you are not old enough to buy alcohol.");
        }
    });
    
    /*dateObj*/
    $("input#dateObjButton").on("click", function() {
        /*establish array*/
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        /*get user info*/
        var monthOfBirth = prompt("In what month were you born, as a number?", "1");
        var monthNum = Number(monthOfBirth);
        var monthInArray = monthNum - 1;
        var dayOfMonth = prompt("On what day of the month were you born?", "5");
        var yearOfBirth = prompt("In what year were you born?", "1985");
        
        /*run the function*/
        repeatAge();
        function repeatAge() {
            /*get the user info in the correct order that javaScript will accept*/
            var dateOfBirth = months[monthInArray] + " " + dayOfMonth + ", " + yearOfBirth;
            
            /*msDiff = how many milliseconds the user has been alive for*/
            var msDiff = new Date().getTime() - new Date(dateOfBirth).getTime();
            
            /*calculate various time designations*/
            var yearsOld = Math.floor(msDiff / (1000 * 60 * 60 * 24 * 365.2422));
            var daysOld = Math.floor(msDiff / (1000 * 60 * 60 * 24));
            var hoursOld = Math.floor(msDiff / (1000 * 60 * 60));
            var minutesOld = Math.floor(msDiff / (1000 * 60));
            var secondsOld = Math.floor(msDiff / 1000);
            
            /*set the cells in the table in the HTML*/
            document.getElementById("yearsCell").innerHTML = yearsOld;
            document.getElementById("daysCell").innerHTML = daysOld;
            document.getElementById("hoursCell").innerHTML = hoursOld;
            document.getElementById("minutesCell").innerHTML = minutesOld;
            document.getElementById("secondsCell").innerHTML = secondsOld;
            
            /*calculate the remainders and concatenate them*/
            var remDays = Math.floor(daysOld - (yearsOld * 365.2422));
            var remHours = Math.floor(hoursOld - (daysOld * 24));
            var remMinutes = Math.floor(minutesOld - (hoursOld * 60));
            var remSeconds = Math.floor(secondsOld - (minutesOld * 60));
            var concatAge = "Or: " + yearsOld + " years, " + remDays + " days, " + remHours + " hours, " + remMinutes + " minutes, and " + remSeconds + " seconds old!";
            document.getElementById("totalCell").innerHTML = concatAge;
            
            /*setTimeout(FUNCTION TO BE REPEATED, MILLISECONDS)*/
            setTimeout(repeatAge, 1000);
            if (remDays === 0) {
                alert("Happy Birthday!");
            }
        }
    });
    
    /*slice*/
    $("input#sliceButton").on("click", function() {
        
        /*get whole content, including html, assigned to a variable*/
        var notOrange = document.getElementById("notOrange").innerHTML;
        
        /*prompt for user input*/
        var notOrangeItem = prompt("What is not orange from the list of orange things?");
        
        /*cut a 'slice' from user input, starting at character index '0' (first character in the string), and ending after '1' character (i.e. (0, 1)).*/
        if (notOrangeItem.slice(0, 1) === "G") {
            
            /*if the first character is as defined, concatenate a new character to a slice consisting of everything from index '1' (2nd character), through to the end of the string (i.e. (1)). Effectively - replacing the first character.*/
            notOrangeItem = "g" + notOrangeItem.slice(1);
        }
        
        /*Check to see if the input, after correction, is still incorrect*/
        if (notOrangeItem !== "grass") {
            alert("That's not right!");
            
            /*'+=' adds a class, the space (" ") after the first quotation is essential. In this case, the after result is "green wrongOrange", and without the space it would be "greenwrongOrange".*/
            document.getElementById("greenToOrange").className += " wrongOrange";
        }
        else {
            var newOrangeItem = prompt("What should we replace it with?");
            
            /*This code is saying NEW VARIABLE equals ORIGINAL VARIABLE but find USER INPUT 1 and replace with USER INPUT 2.*/
            var allOrange = notOrange.replace(notOrangeItem, newOrangeItem);
            
            /*Go back to the document and remove the original content captured, and replace it with the new content created.*/
            document.getElementById("notOrange").innerHTML = allOrange;
            
            /*Within that new content (remember that the HTML was captured, not just the text) get the span of text that was targeted, and change the 'className'. Note that this overwrites whatever the original class was, so we use "=" (no '+'), and also no space character is necessary.*/
            var classOrange = document.getElementById("greenToOrange");
            classOrange.className = "orange";
        }
    });
    
    /*field*/
    $("form#fieldButton").on("submit", function() {
        
        /*This line directly gets the value from the field and places it into the paragraph...*/
        document.getElementById("pToContent").innerHTML = document.getElementById("inputContent").value;
        
        /*...where as these two lines effectively do the same thing [in reverse], except have a midway step of storing the content as a variable first.*/
        var origContent = document.getElementById("pToContent").innerHTML;
        document.getElementById("toValue").value = origContent;
    });
    
    /*tagName*/
    $("input#tagNameDivs").on("click", function() {
        var divs = document.getElementsByTagName("div");
        alert("There are " + divs.length + " divs on this webpage");
    });
    $("input#tagNamePara").on("click", function() {
        var paras = document.getElementsByTagName("p");
        var numParas = paras.length;
        numParas = numParas + 1;
        alert("There are " + numParas + " paragraphs to choose from.");
        var pChoice = prompt("Pick a paragraph number");
        var pNum = Number(pChoice);
        pNum = pNum - 1;
        alert(paras[pNum].innerHTML);
    });
    $("input#tagNameChange").on("click", function() {
        var changeToSmileys = document.getElementsByTagName("li");
        for (var i = 0; i < changeToSmileys.length; i++) {
            changeToSmileys[i].innerHTML = "<img src='images/Smiling_Face_Emoji_large.png' width='25'>";
        }
    });
    
    /*array*/
    $("input#arrayButton").on("click", function() {
        
        /*The array is established in hard code.*/
        var fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi", "Strawberry", "Pear", "Tangerine", "Raspberry"];
        
        /*Math.random() generates a number between 0 and 1*/
        var bigDecimal = Math.random();
        
        /*multiplying the random number by the length of the array ensures the random number is now between zero and the amount of items in the array. Since this array is hard coded, the random number could be multiplied by a hard number also, but it would be better practice to use the convention set out for measuring the length of the array automatically, for consistency, or if the array is altered.*/
        var improvedNum = (bigDecimal * fruits.length);
        
        /*The number is rounded down to fit neatly. Always down - if rounded any other way it could end up being equal to the length of the array plus one. Down ensures the number is an integer between zero and the last index of the array.*/
        var z = Math.floor(improvedNum);
        
        /*With 'z' as the index number, an array item is selected and placed in the designated paragraph as HTML content.*/
        var fruitName = fruits[z];
        document.getElementById("pFruit").innerHTML = fruitName;
    });
    
    /*for*/
    $("input#forButton").on("click", function() {
        
        /*Only two responses are vakid as far as the code is concerned. Any other response results in a default 3rd choice.*/
        var gender = prompt("male/female/other?");
        gender = gender.toLowerCase();
        if (gender === "male") {
            gender = "-man";
        }
        else if (gender === "female") {
            gender = "-woman";
        }
        else {
            gender = "-person";
        }
        
        /*The empty array are declared. The first 3 are filled by user input, and the third is created by the code based on those uder inputs.*/
        var adjectives = [];
        var colors = [];
        var creatures = [];
        var superHeroNames = [];
        
        /*The prompts. Note - '.push()' adds whatever is in between the parenthesises to the END of the array. To add to the front of an array would be '.unshift(). To remove from the front would be '.shift()', and to remove from the end would be '.pop()'. There are other methods to remove from the middle of an array, such as '.splice([index number to start removing], [number of items to remove])'.*/
        adjectives.push(prompt("Name an adjective"));
        adjectives.push(prompt("Name an adjective"));
        adjectives.push(prompt("Name an adjective"));
        colors.push(prompt("Name a color"));
        colors.push(prompt("Name a color"));
        colors.push(prompt("Name a color"));
        creatures.push(prompt("Name a creature"));
        creatures.push(prompt("Name a creature"));
        creatures.push(prompt("Name a creature"));
        
        /*k is the variable to be used for the index number of the generated array.*/
        var k = 0;
        
        /*i is the adjective index variable.*/
        for (var i = 0; i < adjectives.length; i++) {
            
            /*j is the colors index variable.*/
            for (var j = 0; j < colors.length; j++) {
                
                /*in the furthest child for loop, l is the variable to represent the index for this array*/
                for (var l = 0; l < creatures.length; l++) {
                    superHeroNames[k] = "The " + adjectives[i] + " " + colors[j] + " " + creatures[l] + gender + " is here to save the day!";
                    
                    /*k++ is where we fill the generated array.*/
                    k++;
                }
            }
        }
        /*This code is commented out, but if valid it would display each iteration of the generated array as an alert. It is commented out because it would be 3 * 3 * 3 alerts (27 alerts!).*/
        /*for (var m = 0; m < superHeroNames.length; m++) {
          alert(superHeroNames[m]);
        }*/
        
        /*This is the same code used to generate the random array index as previously seen.*/
        var bigDecimal = Math.random();
        var improvedNum = (bigDecimal * superHeroNames.length);
        var z  = Math.floor(improvedNum);
        var shName = superHeroNames[z];
        document.getElementById("pSHN").innerHTML = shName;
    });
    
    /*while*/
    $("input#whileButton").on("click", function() {
        var shades = ["misty", "red-lit", "still-air", "dark", "pitch-black"];
        var times = ["dawn", "afternoon", "evening", "night"];
        var shadyTimes = [];
        
        /*Both the counters for k & j are established (as 0) before the loops are started. It is only necessary that the counter is declared before the loop that increases the counter.*/
        var k = 0;
        var i = 0;
        
        /*First, the 'shades' while loop. The loop will repeat as many times as there are items in the array.*/
        while (i < shades.length) {
            var j = 0;
            
            /*For each iteration of shades[i], the next loop will cycle 'times' for as many times as there are items in that array.*/
            while (j < times.length) {
                
                /*Now the third array is filled.*/
                shadyTimes[k] = shades[i] + " " + times[j];
                
                /*Finally, shadyTimes will be looped*/
                while (k < shadyTimes.length) {
                    k++;
                }
                j++;
            }
            /*The counter is increased after the action has been completed.*/
            i++;
        }
        var bigDecimal = Math.random();
        var improvedNum = (bigDecimal * shadyTimes.length);
        var z = Math.floor(improvedNum);
        var spookyTime = shadyTimes[z];
        var horrorIntroString = "It was a " + spookyTime + ", and the monster was just waking up.";
        document.getElementById("pShadyTime").innerHTML = horrorIntroString;
        document.getElementById("arrayShades").innerHTML = "The contents of the array storing the descriptions: <strong>" + shades + "</strong>.";
        document.getElementById("arrayTimes").innerHTML = "The contents of the array containing the times of day: <strong>" + times +"</strong>.";
        document.getElementById("arrayCombo").innerHTML = "The contents of the empty array after it has been populated: <strong>" + shadyTimes + "</strong>.";
    });
    
    /*parameters*/
    $("input#parametersButton").on("click", function() {
        
        /*This line of code basically says the following:
        var VARIABLENAME = FUNCTIONNAME(A, B);
        The function has not been declared yet, but that is allowed. The variable is being defined as the result of the function after it has finished. There are two pieces of information being passed to the function, as 'arguments'. In this instance, they are both prompts. The prompts could have been stored as variables beforehand, and the variables would be passed to the function, effectively the same thing.*/
        var namePlace = concatNamePlace(prompt("What is your name?"), prompt("Where are you from?"));
        
        /*Now the function is declared. Within the parentheses there are two placeholders. These placeholders are where the information is stored that is sent by the function call arguments, and at this point they are parameters. The parameters are fed to the contents of the function as you can see.*/
        function concatNamePlace(name, place) {
            
            /*'return' is what turns the functions conclusion into a value that can be returned to the function call, and therefore stored in our initial variable.*/
            return "Your name is " + name + " and you come from " + place + ".";
        }
        
        /*Finally, this variable is presented in the webpage.*/
        document.getElementById("pSendReturn").innerHTML = namePlace;
    });
    
    /*return*/
    $("input#returnButton").on("click", function() {
        
        /*This time, the function is coded before the code calls it. It has one parameter, here defined as 'a', but it could be literally anything that is accepted by javaScript.*/
        function totalPrice(a) {
            
            /*If the price is $20 or above, the final price of the item and shipping remains the same, hence the value of a is returned to the function call.*/
            if (a >= 20) {
                return a;
            }
            /*If the price is less than $10.01, or $10 or less, the value of 'a + 1' is returned.*/
            else if (a < 10.01) {
                return a + 1;
            }
            
            /*All values of 'a' unaccounted for are 10.01 through 19.99. If 'a' falls into this spread, 5% of 'a' is calculated and then added to 'a', and 1 is added also.*/
            else {
                return a + 1 + (a * .05);
            }
        }
        
        /*The variable subtotal is declared as being a user input, converted to a number value.*/
        var subTot = Number(prompt("How much is the shelf price?"));
        
        /*Now the function call, using the variable stored on the previous line as the parameter.*/
        var totPrice = totalPrice(subTot);
        
        /*The following lines are unnecessary for the code, but for the sake of displaying the breakdown I need to calculate them this way...*/
        var taxRate = 1.1;
        var taxPaid = ((totPrice * taxRate) - totPrice).toFixed(2);
        var shippingPaid = (totPrice - subTot).toFixed(2);
        var finalPrice = (totPrice * taxRate).toFixed(2);
        document.getElementById("pSubtotal").innerHTML = subTot;
        document.getElementById("pShipping").innerHTML = shippingPaid;
        document.getElementById("pTax").innerHTML = taxPaid;
        document.getElementById("pSendReturnMath").innerHTML = finalPrice;
        /*...up to this point.*/
    });
    
    /*switch*/
    $("form#switchButton").on("submit", function() {
        
        /*The content of the user input field is stored as a variable (as opposed to using a prompt).*/
        var pet = document.getElementById("thisPet").value;
        
        /*converted to lower case to ensure it will match with the code.*/
        pet = pet.toLowerCase();
        
        /*The variable is declared, but not assigned a value yet. This is so it can be assigned later in the code.*/
        var msgNow;
        
        /*'switch' starts the cycle. It tests the variable within the parentheses to see if it is the same as the following 'case's. If it matches the case, the code is followed. If not, the code is ignored.*/
        switch(pet) {
            case "dog" :
                msgNow = "Woof!";
                
                /*'break' ensures that if the case is matched, the cycle is stopped since no further cases need be tried.*/
                break;
            case "cat" :
                msgNow = "Meow!";
                break;
            
            /*The default would be any other posssibility not tried in the cases.*/
            default :
                alert("Sorry, pick a dog or a cat!");
                
                /*The input field is emptied at this point.*/
                document.getElementById("thisPet").value = "";
        }
        
        /*The variable 'msgNow' is tested using 'if', to see if it matches up with one phrase or ('||') another. If either applies, the variable is displayed in the paragraph. This code is actually redundant, the same result can be acheived by just the switch cycles, but for the purposes of demonstration I have left it in.*/
        if(msgNow === "Woof!" || msgNow === "Meow!") {
            document.getElementById("petType").innerHTML = msgNow;
        }
        document.getElementById("thisPet").value = "";
    });
    
    /*images*/
    /*Up first I have 'commented out'  the code to take one image process at a time, to demonstrate what is involved. However, for multiple image manipulation, I have coded a catch-all function.*/
    /*$("img#pic266").on("click", function() {
        document.getElementById("pic266").src = "images/Uncanny_X-Men_Vol_1_267.jpg";
        document.getElementById("pic266").title = "Uncanny X-Men 267";
        document.getElementById("pic266").id = "pic267";
    });*/
        
    /*Here is the function. there are 3 parameters delivered to it. The parameters are just variable names and could be anything, but I have named them so they make sense as far an English speaker is concerned.*/    
    function swapPic(idThis, source, titleText) {
        
        /*The particular image is stored as the variable 'p', and the first parameter fed to it is the image ID.*/
        var p = document.getElementById(idThis);
        
        /*The 'src' is changed to the new source fed by the parameter in the function call.*/
        p.src = source;
        
        /*The title is changed in the same method. It is worth pointing out then when the image is selected to change on hover ('mouseover'), the title is redundant, however it is still coded for consistency and simplification.*/
        p.title = titleText;
    }
    
    /*When this image is clicked, the parameters fed to the function are 1. the current id, 2. the new image source to replace the original, and 3. the new title text.*/
    $("img#pic266").on("click", function() {
        swapPic("pic266", "images/Uncanny_X-Men_Vol_1_267.jpg", "Uncanny X-Men 267");
    });
    
    /*The next is the same function call but first the image is changed on 'mouseover', and secondly on 'mouseout'. Since all 3 images occupy the same space, the id does not need to be updated for the 2nd funtion to run.*/
    $("img#pic268").on("mouseover", function() {
        swapPic("pic268", "images/Uncanny_X-Men_Vol_1_269.jpg", "Uncanny X-Men 269");
    });
    $("img#pic268").on("mouseout", function() {
        swapPic("pic268", "images/Uncanny_X-Men_Vol_1_270.jpg", "Uncanny X-Men 270");
    });
    
    /*byTagName*/
    $("input#tagButton").on("click", function() {
        
        /*All the paragraphs from ALL divs are collected in the array 'p'.*/
        var p = document.getElementsByTagName("p");
        
        /*The index of the array for the 5th paragraph is '4'.*/
        var contentsOfP5 = p[4].innerHTML;
        alert(contentsOfP5);
    });
    
    /*byID*/
    $("input#idButton").on("click", function() {
        var p = document.getElementById("wolverine");
        alert(p.innerHTML);
    });
    
    /*byChildNodes*/
    $("input#childNodesButton").on("click", function() {
        
        /*First the element targeted is the 'parent' node, in this case the div 'marvel' containing the desired paragraph.*/
        var d = document.getElementById("marvel");
        
        /*The 'eCounter' is the name we have opted to give the variable that will equal the tally of elements that exist within the parent node.*/
        var eCounter = 0;
        
        /*The 'for' loop will continue for as many times as there are nodes in the parent node.*/
        for (var i = 0; i < d.childNodes.length; i++) {
            
            /*'nodeType === 1' means if the node being tested is an element node, the following lines of code will take place. 1 = element, 2 = attribute, 3 = text.*/
            if (d.childNodes[i].nodeType === 1) {
                
                /*Each time the 'for' loop discovers an element type node, the counter is increased.*/
                eCounter++;
            }
            
            /*The purpose of this code is to show a specific example. As such, it is unnecessary for the code to run more than it needs to, and I know that the element I am after is the third element, hence:*/
            if (eCounter === 3) {
                d.childNodes[i].innerHTML = "Wolverine has <strong>adamantium</strong> claws.";
                break;
            }
        }
    });
    
    /*addRemove*/
    $("input#addParagraphButton").on("click", function() {
        
        /*This creates a new '<p></p>', an empty element node.*/
        var nodeToAdd = document.createElement("p");
        
        /*The user's input is stored as a variable, and turned into a text node.*/
        var newContent = prompt("Who is your superhero, and what do they do?");
        var newText = document.createTextNode(newContent);
        
        /*The empty <p> node is now filled with the newly created text node.*/
        nodeToAdd.appendChild(newText);
        
        /*Now we are ready to insert the new content into the parent div.*/
        var parentDiv = document.getElementById("marvel");
        var userChoice = prompt("Where would you like to insert?", "first/second/third/fourth/fifth/last?");
        
        /*'.insertBefore' has two arguments inside the parentheses. The first is the new content to be added, the second is where to add it before. In this case, it is simply inserting it before an element targeted by ID.*/
        if (userChoice === "first") {
            parentDiv.insertBefore(nodeToAdd, document.getElementById("spider"));
        }
        
        /*'.nextSibling' is used to indicate the new content will be added before the element after the targeted element.*/
        if (userChoice === "second") {
            parentDiv.insertBefore(nodeToAdd, document.getElementById("spider").nextSibling);
        }
        
        /*'childNodes' does not navigate around the whitespace nodes by design, so even though the element we wish to insert it before is the fourth element we see, we need to account for whitespace. Index '7' is correct, as long as no other additions have previously been made.*/
        if (userChoice === "third") {
            parentDiv.insertBefore(nodeToAdd, parentDiv.childNodes[7]);
        }
        
        /*'.lastChild' targets the last child of the parent div, and '.previousSibling' does the same as '.nextSibling', but going the other direction in the DOM. Again, this doesn't account for whitespace, so I have accounted for it in my code.*/
        if (userChoice === "fourth") {
            parentDiv.insertBefore(nodeToAdd, parentDiv.lastChild.previousSibling.previousSibling.previousSibling.previousSibling);
        }
        if (userChoice === "fifth") {
            parentDiv.insertBefore(nodeToAdd, parentDiv.lastChild.previousSibling);
        }
        
        /*'.appendChild' automatically adds new nodes as the last node.*/
        if (userChoice === "last") {
            parentDiv.appendChild(nodeToAdd);
        }
    });
    $("input#removeParagraphButton").on("click", function() {
       var parentDiv = document.getElementById("marvel");
        var p = parentDiv.lastChild;
        var nodeToRemove = p;
        
        /*'.removeChild' literally removes the last child of the parent. If that last child is whitespace, then nothing will appear to happen, at least to the user.*/
        parentDiv.removeChild(nodeToRemove);
    });
    $("input#removeParagraphButtonWS").on("click", function() {
       var parentDiv = document.getElementById("marvel");
        var p = parentDiv.lastChild;
        
        /*This 'while' loop tests for the node type of the element being targeted, 'p'. If the nodeType is not '1', then the code says to move on to the next node (moving backwards from the last child). So the whitespace nodes are not deleted, just ignored. Effectively, every click of the button now removes one element.*/
        while (p.nodeType !== 1) {
            p = p.previousSibling;
        }
        var nodeToRemove = p;
        parentDiv.removeChild(nodeToRemove);
    });
    
    /*by parentNode, childNode*/
    $("input#domParentChildButton").on("click", function() {
        /*First a node is targeted by ID. It could be any of the other siblings for the purposes of this demonstration, even the desired end node.*/
        var kidNode = document.getElementById("thor");
        
        /*The parent node is now targeted, in this case it is the div. The alternative to these two steps would be to have targeted the parent div by ID.*/
        var pNode = kidNode.parentNode;
        
        /*Now a specific child of the parent node is targeted, and displayed as an alert.*/
        var otherKidNode = pNode.childNodes[5];
        
        /*If just the node stored as the variable was displayed in the alert, the alert will be trying to display the node, and it is the CHILD (or content) of the node we are trying to display.*/
        alert(otherKidNode.innerHTML);
    });
    
    /*bySibling*/
    $("input#domSiblingButton").on("click", function() {
        var p = document.getElementById("thor");
        
        /*There are two '.previousSibling's, only one would result in a whitespace text node being targeted. Two moves behind it to get the content we want.*/
        var sibNode = p.previousSibling.previousSibling;
        alert(sibNode.innerHTML);
    });
    
    /*byNodeValue*/
    $("input#domNodeValueButton").on("click", function() {
        
        /*Targeting the specific node that stores the content to be displayed (<p>).*/
        var parentTag = document.getElementById("wolverine");
        
        /*Now targeting the 'firstChild' of the <p>.*/
        var target = parentTag.firstChild;
        
        /*Finally targeting the value of the text node.*/
        var textContent = target.nodeValue;
        alert(textContent);
    });
    
    /*whitespace*/
    $("input#beforeWSRemoved").on("click", function() {
        
        /*The parent div of all the paragraphs is stored as a variable.*/
        var parentDiv = document.getElementById("marvel");
        
        /*The children of the div are all collected in an array.*/
        var paragraphs = parentDiv.childNodes;
        
        /*The target is the 6th element in the array.*/
        document.getElementById("noWS").innerHTML = "'" + paragraphs[5].innerHTML + "' is the 6th node in the array because the whitespace nodes are still included.";
        document.getElementById("completeArray").innerHTML = paragraphs[0].innerHTML + ", " + paragraphs[1].innerHTML + ", " + paragraphs[2].innerHTML + ", " + paragraphs[3].innerHTML + ", " + paragraphs[4].innerHTML + ", <strong>" + paragraphs[5].innerHTML + "</strong>, etc.";
    });
    $("input#afterWSRemoved").on("click", function() {
        
        /*The first two lines of code are the same.*/
        var parentDiv = document.getElementById("marvel");
        var paragraphs = parentDiv.childNodes;
        
        /*An empty array is created.*/
        var newParagraphs = [];
        
        /*The for loop cycles through each iteration.*/
        for (var i = 0; i < paragraphs.length; i++) {
            
            /*If nodeType is 1, the node type is an element and...*/
            if (paragraphs[i].nodeType === 1) {
                
                /*...the node is added to the END of the array. This is to keep them in the correct sequence, but 'unshift()' could be used to add to the front of the new array instead.*/
                newParagraphs.push(paragraphs[i]);
            }
        }
        document.getElementById("noWS").innerHTML = "'" + newParagraphs[2].innerHTML + "' is the 3rd node in the array because the element nodes have been assigned to a new array, effectively eliminating whitespace.";
        document.getElementById("completeArray").innerHTML = newParagraphs[0].innerHTML + ", " + newParagraphs[1].innerHTML + ", <strong>" + newParagraphs[2].innerHTML + "</strong>, etc.";
    });
    $("input#justParagraphs").on("click", function() {
        
        /*The first four lines of code are the same as previously (with a different array name).*/
        var parentDiv = document.getElementById("marvel");
        var paragraphs = parentDiv.childNodes;
        var onlyParagraphs = [];
        for (var i = 0; i < paragraphs.length; i++) {
            
            /*If the name of the node, accounting for case, is "p" meaning paragraph (<p>)...*/
            if (paragraphs[i].nodeName.toLowerCase() === "p") {
                
                /*...the paragraph is pushed to the front of the array.*/
                onlyParagraphs.push(paragraphs[i]);
            }
        }
        document.getElementById("noWS").innerHTML = "'" + onlyParagraphs[1].innerHTML + "' is the 2nd paragraph in the new array.";
        document.getElementById("completeArray").innerHTML = onlyParagraphs[0].innerHTML + ", <strong>" + onlyParagraphs[1].innerHTML + "</strong>, etc.";
    });
    
    /*objLiteral*/
    $("input#objLiteralButton").on("click", function() {
        
        /*The object is established the same way as a variable.*/
        var bruce = {
            
            /*The property is followed by a colon, then the value in quotations afterwards, followed by a comma...*/
            color: "tuxedo",
            
            /*...unless the property is the last in the object, then there is no comma. The value also does not get contained in quotations if it is a number.*/
            age: 5
            
            /*Note that the last line of the object is closed with a semi-colon.*/
        };
        var conan = {
            color: "orange",
            age: 3
        };
        
        /*The variable referencing the value is achieved by the dot notation.*/
        alert("Bruce's color is '" + bruce.color + "'.");
        alert("Conan's age is '" + conan.age + "'.");
    });
    
    /*objAddProperty*/
    $("input#addPropertyButton").on("click", function() {
        var bruce = {
            color: "tuxedo",
            age: 5
        };
        
        /*This next line establishes both the new property name and the property value.*/
        bruce.weight = 16;
        document.getElementById("newProperty").innerHTML = "weight";
        document.getElementById("newValue").innerHTML = bruce.weight;
    });
    
    /*objDeleteProperty*/
    $("input#deletePropertyButton").on("click", function() {
        var bruce = {
            color: "tuxedo",
            age: 5
        };
        
        /*This line deletes the property.*/
        delete bruce.age;
        
        /*Since the table displayed in the HTML is only a representation, I have also coded for the property name to be deleted. The property value however, I have chosen to display as the value of 'bruce.age', to demonstrate that it has been deleted - it is displayed as 'undefined'.*/
        document.getElementById("removeProperty").innerHTML = "";
        document.getElementById("removeValue").innerHTML = bruce.age;
    });
    
    /*objBlankProperty*/
    $("input#blankObjectButton").on("click", function() {
        
        /*Just like creating an empty array, an empty object is created as below.*/
        var yourName = {};
        
        /*The user is prompted and the input is assigned to the variable, which is implicitly declared as a property of the blank object.*/
        yourName.name = prompt("Enter Your Name");
        document.getElementById("objectName").innerHTML = "Your name";
        
        /*The property is displayed in the table for a visual.*/
        document.getElementById("objectValue").innerHTML = yourName.name;
    });
    
    /*hasProperty*/
    $("input#hasPropertyButton").on("click", function() {
        var bruce = {
            color: "tuxedo",
            age: 5,
            whiskers: "yes"
        };
        var propertyOne = prompt("Enter a property of bruce.");
        
        /*This 'if' statement says that if an item (in this case the variable stored from the user prompt input) is 'in' the object, the action will occur.*/
        if (propertyOne in bruce) {
            alert("'" + propertyOne + "' is a property of bruce.");
        }
        else {
            alert("'" + propertyOne + "' is NOT a property of bruce.");
        }
        
        /*Another way to do this is to simply put the property within the parentheses.*/
        if (bruce.whiskers) {
            alert("'bruce.whiskers' is a hidden property of bruce, and the value is '" + bruce.whiskers + "'");
        }
    });
    
    /*literalMethod*/
    $("input#literalMethodButton").on("click", function() {
        var rectangle = {
            height: 3,
            width: 2,
            
            /*The function is declared in this order: '[property name]: function() {'...*/
            area: function() {
                
                /*...and 'return' sends the function's value back to the function call.*/
                return rectangle.height * rectangle.width;
            }
        };
        
        /*Here is the function call. The parentheses here could be used to pass values to the function.*/
        document.getElementById("totalArea").innerHTML = rectangle.area();
    });
    
    /*constructor*/
    $("input#constructorButton").on("click", function() {
        
        /*The function is declared with a capital letter. This is to indicate to any humans reading the code that it is a constructor function, and does not matter to the code or the browser. This constructor has 3 parameters that are named after what they represent. Again, this makes sense for humans, but they could be named anything.*/
        function Boxmaker(height, width, depth) {
            
            /*Each line in the constructor is as follows: 'this.[propertyname] = [parametername];'. Since we have named the parameters after what they represent, they will be the same as the property name.*/
            this.height = height;
            this.width = width;
            this.depth = depth;
        }
        
        /*These two boxes are constructed to match what is coded in the HTML table.*/
        var box1 = new Boxmaker(4, 5, 6);
        var box2 = new Boxmaker(2, 1, 8);
        
        /*The third box is assembled from user inputs/prompts.*/
        var userHigh = prompt("How high is box3?");
        var userWide = prompt("How wide is box3?");
        var userDeep = prompt("How deep is box3?");
        
        /*The parameters are the variables that store the user input.*/
        var box3 = new Boxmaker(userHigh, userWide, userDeep);
        
        /*The following six lines are to demonstrate success of the constructed objects.*/
        document.getElementById("userHeight").innerHTML = box3.height;
        document.getElementById("userWidth").innerHTML = box3.width;
        document.getElementById("userDepth").innerHTML = box3.depth;
        alert("The height of box1 is " + box1.height + ".");
        alert("The width of box2 is " + box2.width + ".");
        alert("The depth of box3 is " + box3.depth + ".");
    });
    
    /*constructorMethods*/
    $("input#constructorMethodButton").on("click", function() {
        
        /*The constructor starts off the same as previously.*/
        function Boxmaker (height, width, depth) {
            this.height = height;
            this.width = width;
            this.depth = depth;
            
            /*The next line starts the code for the method. It is written as 'this.[propertyname] = function() {'.*/
            this.volume = function() {
                
                /*Inside the method is the code to run, preceded by 'return'.*/
                return this.height * this.width * this.depth;
                
            /*The method is closed witha  semi-colon.*/
            };
        }
        
        /*The variable being declared is an object. the trigger keyword is 'new', and the parameters are fed to the object from the paretheses.*/
        var box1 = new Boxmaker(4, 5, 6);
        var box2 = new Boxmaker(2, 1, 8);
        var box3 = new Boxmaker(3, 3, 3);
        
        /*Since the '.innerHTML' we are trying to post to the browser is the result of a returned function, it must end in '();'.*/
        document.getElementById("box1Volume").innerHTML = box1.volume();
        document.getElementById("box2Volume").innerHTML = box2.volume();
        document.getElementById("box3Volume").innerHTML = box3.volume();
    });
    
    /*prototypes*/
    $("input#prototypeButton").on("click", function() {
        
        /*This is a constructor for objects, without including any methods.*/
        function Boxmaker(height, width, depth) {
            this.height = height;
            this.width = width;
            this.depth = depth;
        }
        
        /*The prototype applies the new property to all objects created with the constructor. Here we are creating a method, and the syntax of the method is the same (after the equals sign) as contained within a constructor. The syntax for the prototype is '[Constructor].prototype.[propertyname]'.*/
        Boxmaker.prototype.volume = function() {
            
            /*This is the same code as before, when the method was contained within the object.*/
            return this.height * this.width * this.depth;
        };
        
        /*Now when the 'new' objects are constructed, they will have the properties assigned literally, and the added properties.*/
        var box1 = new Boxmaker(4, 5, 6);
        var box2 = new Boxmaker(2, 1, 8);
        var box3 = new Boxmaker(3, 3, 3);
        document.getElementById("box1Volume").innerHTML = box1.volume();
        document.getElementById("box2Volume").innerHTML = box2.volume();
        document.getElementById("box3Volume").innerHTML = box3.volume();
        
        /*Here is another prototype being added, after the objects have been constructed. This time a boolean value is being applied to a new property.*/
        Boxmaker.prototype.painted = true;
        
        /*This line supercedes the previous. Effectively, first this property is declared as true, and then this line changes it to false, and all code following this line will relate to the latter value.*/
        box3.painted = false;
        document.getElementById("box1Paint").innerHTML = box1.painted;
        document.getElementById("box2Paint").innerHTML = box2.painted;
        document.getElementById("box3Paint").innerHTML = box3.painted;
    });
    
    /*inheritedVsOwned*/
    $("input#ownedArrayButton").on("click", function() {
                
        /*The set up for the objects is the same as the previous exercise.*/
        function Boxmaker(height, width, depth) {
            this.height = height;
            this.width = width;
            this.depth = depth;
        }
        Boxmaker.prototype.volume = function() {
            return this.height * this.width * this.depth;
        };
        var box1 = new Boxmaker(4, 5, 6);
        var box2 = new Boxmaker(2, 1, 8);
        var box3 = new Boxmaker(3, 3, 3);
        document.getElementById("box1Volume").innerHTML = box1.volume();
        document.getElementById("box2Volume").innerHTML = box2.volume();
        document.getElementById("box3Volume").innerHTML = box3.volume();
        Boxmaker.prototype.painted = true;
        box3.painted = false;
        document.getElementById("box1Paint").innerHTML = box1.painted;
        document.getElementById("box2Paint").innerHTML = box2.painted;
        document.getElementById("box3Paint").innerHTML = box3.painted;
        
        /*An empty array is created.*/
        var listOfProperties = [];
        
        /*This line says that for each time a property exists within the object...*/
        for (var prop in box1) {
            
            /*...the name of that property is added to the END of the array.*/
            listOfProperties.push(prop);
        }
        document.getElementById("arrayValues").innerHTML = "<b>" + listOfProperties + "</b>";
        
        /*A different empty array is created.*/
        var ownedProperties = [];
        
        /*This time, for each time there is a property for the object...*/
        for (var prop in box1) {
            
            /*...and as long as the property is owned rather than inherited...*/
            if (box1.hasOwnProperty(prop)) {
                
                /*...then the property is added to the end of the array.*/
                ownedProperties.push(prop);
            }
        }
        document.getElementById("arrayOwnedValues").innerHTML = "<b>" + ownedProperties + "</b>";
    });
    
    /*createTable*/
    $("input#createTableButton").on("click", function() {
        var bruce = {
            name: "Bruce",
            color: prompt("What is Bruce's Color?", "tuxedo"),
            age: 5
        };
        var conan = {
            name: "Conan",
            color: "orange",
            age: 3
        };
        
        /*A user prompt to set the number of columns. Just for demonstration purposes, more thought could be put in to this aspect.*/
        var numCols = prompt("How many columns? (min 3)", "3");
        
        /*Get the reference for the Div*/
        var tableDiv = document.getElementById("fillTable");
        
        /*Creates a <table> element and a <tbody> element.*/
        var tbl = document.createElement("table");
        var tblBody = document.createElement("tbody");
        
        /*Creates all cells. The counter limits the amount of rows in this outer parents loop.*/
        for (var i = 0; i < 12; i++) {
            
            /*Creates a table row.*/
            var row = document.createElement("tr");
            
            /*The counter sets the number of columns, here the user has already defined this.*/
            for (var j = 0; j < numCols; j++) {
                
                /*Create a <td> element.*/
                var cell = document.createElement("td");
                
                /*Create the default text to fill each cell with. The default text will be a concatenation of text with the counter numbers for the rows and columns, at the moment the cell is created.*/
                var cellText = document.createTextNode("cell in row " + i + ", column " + j);
                
                /*Converting the counter numbers to strings so they can be concatenated with text...*/
                i = i.toString();
                j = j.toString();
                
                /*...in order to create a string variable...*/
                var cellId = "col" + j + "row" + i;
                cellId = cellId.toString();
                
                /*...of which the value can be assigned as the cell's ID, using 'setAttribute.*/
                cell.setAttribute("id", cellId);
                
                /*The text is inserted into the cell.*/
                cell.appendChild(cellText);
                
                /*The cell is added to the end of the row.*/
                row.appendChild(cell);
            }
            
            /*Add the row to the end of the table body (so far).*/
            tblBody.appendChild(row);
        }
        
        /*Put the <tbody> in the <table>.*/
        tbl.appendChild(tblBody);
        
        /*Put the <table> into the <div>.*/
        tableDiv.appendChild(tbl);
        
        /*This is just me defining via a class attribute the appearance of the table.*/
        tbl.setAttribute("class", "noBorderGap");
        
        
        /*These next 9 lines of code are redefining the content of each cell in order to line them up with the objects we have set out earlier in the code. Any cells not defined below will have the default content as already set out by the loop.*/
        document.getElementById("col0row0").innerHTML = "";//lefttop
        document.getElementById("col0row1").innerHTML = "color";//leftmiddle
        document.getElementById("col0row2").innerHTML = "age";//leftbottom
        document.getElementById("col1row0").innerHTML = bruce.name;//centertop
        document.getElementById("col1row1").innerHTML = bruce.color;//centermiddle
        document.getElementById("col1row2").innerHTML = bruce.age;//centerbottom
        document.getElementById("col2row0").innerHTML = conan.name;//righttop
        document.getElementById("col2row1").innerHTML = conan.color;//rightmiddle
        document.getElementById("col2row2").innerHTML = conan.age;//rightbottom
    });
    
    /*jQuery*/
    
    /*hideShow*/
    $("input#hide").on("click", function() {
        
        /*This line targets the paragraph by its ID and hides it.*/
        $("p#hideShow").hide();
    });
    $("input#show").on("click", function() {
        
        /*This next line targets the same paragraph since it has not been removed from the HTML, and is only hidden, then it shows it again.*/
        $("p#hideShow").show();
    });
    
    /*fadeOut/fadeIn*/
    $("input#fadeOut").on("click", function() {
        $("img#uncanny266").fadeOut("slow");
    });
    
    $("input#fadeIn").on("click", function() {
        $("img#uncanny266").fadeIn(3000);
    });
    
    /*slideUp/slideDown*/
    $("input#slideUp").on("click", function() {
        $("img#uncanny267").slideUp(500);
    });
    $("input#slideDown").on("click", function() {
        $("img#uncanny267").slideDown("fast");
    });
    
    /*toggle*/
    $("input#toggle").on("click", function() {
        $("img#uncanny268").toggle();
        
        /*In the CSS, this image has its display set to 'none' by default, so when the first image toggles 'show', this toggles to 'hide', and vice-versa.*/
        $("img#uncanny269").toggle();
    });
    
    /*opacity*/
    $("input#opacityDown").on("click", function() {
        
        /*Use '.css({})' to change/set a CSS style. '0' = invisible.*/
        $("img#uncanny270").css({opacity: 0});
    });
    $("input#opacityUp").on("click", function() {
        
        /*Use '.animate({}, #)' to change/set a CSS style gradually, where '#' is a speed. '1' = solid.*/
        $("img#uncanny270").animate({opacity: 1}, 1000);
    });
    
    /*replaceText*/
    $("input#insertTextJQ").on("click", function() {
        $("p#insertText").text("This is a literal text string. HTML tags <em>don't</em> work!");
    });
    
    /*replaceHTML*/
    $("input#insertHTMLJQ").on("click", function() {
        $("div#insertHTML").html("<p>Using this method, text can be placed with HTML tags to <em>stylize</em> <strong>text</strong>.</p>")
    });
    
    /*addHTML*/
    $("input#moreJQ").on("click", function() {
        var origText = $("p#origText").text();
        $("div#insertStuff").html("<p>" + origText + "and you will be able to read more <strong>detail</strong> on whatever was being started.</p>");
    });
    
    /*addText*/
    $("input#moreTextJQ").on("click", function() {
        $("p#exampleText").text($("p#exampleText").text() + "I have shown how the code is a little more confusing. For humans, anyway, the browser reads it just fine.");
    });
    
    /*addClass*/
    $("input#addClassJQ").on("click", function() {
        $("p#addClass").addClass("orange");
    });
    $("input#anotherClassJQ").on("click", function() {
        $("p#addClass").addClass("wrongOrange");
    });
    $("input#oneMoreClassJQ").on("click", function() {
        $("p#addClass").addClass("stayLit");
    });
    
    /*removeClass*/
    $("input#removeClassJQ").on("click", function() {
        $("p#addClass").removeClass("orange stayLit");
    });
    
    /*inputValue*/
    $("input#inputValJQ").on("click", function() {
        var userInput = $("input#field1").val();
        $("p#para1").text(userInput);
        var paraText = $("p#para1").text();
        $("input#field2").val(paraText);
    });
    
    /*replaceAttribute*/
    $("input#replaceAttrJQ").on("click", function() {
        $("p#attrPara").attr("class", "wrongOrange");
    });
    
    /*removeAttribute*/
    $("input#removeAttrJQ").on("click", function() {
        $("p#removeAttrPara").removeAttr("class");
    });
    
    /*empty*/
    $("input#emptyJQ").on("click", function() {
        $("p#emptyRemovePara").empty();
    });
    $("input#fillJQ").on("click", function() {
        $("p#emptyRemovePara").text("Demonstration text again");
    });
    
    /*remove*/
    $("input#removeJQ").on("click", function() {
        $("p#emptyRemovePara").remove();
    });
    
    /*toggleClass*/
    $("input#toggleJQ").on("click", function() {
        $("img").toggleClass("hidden");
        
        /*This next line is a javaScript 'if' statement, and it states that if the '.val()' of the button is as follows...*/
        if ($("input#toggleJQ").val() === "Show 266 and 268") {
            
            /*...then on the click the text will change to as follows.*/
            $("input#toggleJQ").val("Show 267 and 269");
        }
        
        /*The 'else' line says that if the text of the button is not as above in the 'if' statement, then it should display as follows (effectively returning it to the original).*/
        else {
            $("input#toggleJQ").val("Show 266 and 268");
        }
    });
    
    /*replaceWith*/
    $("input#replaceWithoutJQ").on("click", function() {
        $("p#demoTextRW").replaceWith("After");
    });
    $("input#replaceWithJQ").on("click", function() {
        $("p#demoTextRW").replaceWith("<p id='demoTextRW' class='orange'>After</p>")
    });
    
    /*append*/
    $("input#appendJQ").on("click", function() {
        $("ol#fruitList").append("<li>Kiwi</li>");
    });
    $("input#appendToJQ").on("click", function() {
        $("li#banana").append("s are <strong>yellow</strong>.")
    });
    
    /*prepend*/
    $("input#prependJQ").on("click", function() {
        $("ol#fruitList").prepend("<li>Blueberry</li>")
    });
    $("input#prependToJQ").on("click", function() {
        $("li#banana").prepend("This fruit is a ");
    });
    
    /*after*/
    $("input#afterJQ").on("click", function() {
        $("li#banana").after("<li>Pear</li>");
    });
    
    /*before*/
    $("input#beforeJQ").on("click", function() {
        $("li#banana").before("<li>Tangerine</li>");
    });
    
    /*showMore/Less*/
    $("a#show_more").on("click", function() {
        $("p#paraShort").addClass("fullHeight");
    });
    $("a#show_less").on("click", function() {
        $("p#paraShort").removeClass("fullHeight");
    });
    
    /*showMore/Less animated*/
    $("a#show_more_animated").on("click", function() {
        $("p#paraShort").animate({height: "12em"}, 2000);
    });
    $("a#show_less_animated").on("click", function() {
        $("p#paraShort").animate({height: "4em"}, 2000);
    });
    
    /*animatePosition*/
    $("input#animatePositionJQ").on("click", function() {
        $("div#xmen269img").animate({left: "55%"});
    });
    
    /*animateMargin*/
    $("input#animateMarginJQ").on("click", function() {
        
        /*Note that the new position is not a defined place, but an adjustment to the existing place, hence the "+=".*/
        $("div#xmen270img").animate({marginLeft: "+=1600px"});
    });
    
    /*animateCenter*/
    $("input#centerJQ").on("click", function() {
        
        /*Measure the width of the browser window:*/
        var windowWidth = $(window).width();
        
        /*Measure the width of the div containing the image:*/
        var imageWidth = $("div#xmen269img").width();
        
        /*Subtract the width of the image from the width of the window, then divide by two, to get the central position. Then finally, concatenate with "px" to format correctly for the CSS to be animated, and store as a variable.*/
        var imageHorizOffset = ((windowWidth - imageWidth) / 2) + "px";
        
        /*Animate the div by setting the 'left' position to the variable just created.*/
        $("div#xmen269img").animate({left: imageHorizOffset});
    });
    
    /*twoAnimationsAtOnce*/
    $("input#twoAtOneJQ").on("click", function() {
        var windowWidth = $(window).width();
        var imageWidth = $("div#xmen269img").width();
        var imageHorizOffset = ((windowWidth - imageWidth) / 2) + "px";
        var windowHeight = $(window).height();
        var imageHeight = $("div#xmen269img").height();
        var imageVertOffset = ((windowHeight - imageHeight) / 2) + "px";
        
        /*To make two animations happen at the same time, they both go inside the same '.animate({})' method, and are separated by a comma.*/
        $("div#xmen269img").animate({left: imageHorizOffset, top: imageVertOffset});
    });
    
    /*stopAnimation*/
    $("input#startAnimateJQ").on("click", function() {
        $("div#xmen269img").animate({marginLeft: "+=1200px"}, 10000);
    });
    $("input#stopAnimateJQ").on("click", function() {
        $("div#xmen269img").stop();
    });
    
    /*stopMore*/
    $("input#startMultipleJQ").on("click", function() {
        $("div#xmen269img").css("top", "500px");
        $("div#xmen269img").animate({marginLeft: "+=1200px"}, 5000);
        $("div#xmen269img").animate({marginTop: "+=400px"}, 3000);
        $("div#xmen269img").animate({marginLeft: "-=400px"}, 3000);
        $("div#xmen269img").animate({marginTop: "-=200px"}, 2000);
    });
    $("input#stopCurrentJQ").on("click", function() {
        $("div#xmen269img").stop();
    });
    $("input#stopAllJQ").on("click", function() {
        $("div#xmen269img").stop(true);
    });
    $("input#finishStopRemainingJQ").on("click", function() {
        $("div#xmen269img").stop(true, true);
    });
    
    /*measure*/
    $("input#measureJQ").on("click", function() {
        var width = $("img#measureImg").width();
        var height = $("img#measureImg").height();
        $("p#width").text("The image is " + width + " pixels wide.");
        $("p#height").text("The image is " + height + " pixels high.");
    });
    $("input#measureInnerJQ").on("click", function() {
        var width = $("img#measureImg").innerWidth();
        var height = $("img#measureImg").innerHeight();
        $("p#innerWidth").text("The image is " + width + " pixels wide including the padding.");
        $("p#innerHeight").text("The image is " + height + " pixels high including the padding.");
    });
    $("input#measureOuterJQ").on("click", function() {
        var width = $("img#measureImg").outerWidth();
        var height = $("img#measureImg").outerHeight();
        $("p#outerWidth").text("The image is " + width + " pixels wide including the padding and the border.");
        $("p#outerHeight").text("The image is " + height + " pixels high including the padding and the border.");
    });
    $("input#measureOuterTrueJQ").on("click", function() {
        var width = $("img#measureImg").outerWidth(true);
        var height = $("img#measureImg").outerHeight(true);
        $("p#trueWidth").text("The image is " + width + " pixels wide including the padding, the border, and the margin.");
        $("p#trueHeight").text("The image is " + height + " pixels high including the padding, the border, and the margin.");
    });
    
    /*chaining*/
     $("input#chainAnimateJQ").on("click", function() {
        $("div#xmen269img").animate({marginLeft: "+=1200px"}, 5000).animate({marginTop: "+=400px"}, 3000).animate({marginLeft: "-=400px"}, 3000).animate({marginTop: "-=200px"}, 2000);
    });
    $("input#chainStyleJQ").on("click", function() {
        $("p#chainStyle").addClass("green").css("border", "2px solid red").css("background-color", "yellow");
    });
    
    /*delay*/
     $("input#chainAnimateDelayJQ").on("click", function() {
        $("div#xmen269img").animate({marginLeft: "+=1200px"}, 5000).delay(2000).animate({marginTop: "+=400px"}, 3000).delay(2000).animate({marginLeft: "-=400px"}, 3000).delay(2000).animate({marginTop: "-=200px"}, 2000);
    });
    
    /*animatedTabs*/
    $("div#tab1").on("mouseenter", function() {
        $("div#full_tab1").animate({right: "0"}, "fast");
    });
    $("div#full_tab1").on("mouseleave", function() {
        $(this).animate({right: "-300px"}, "fast");
    });
    $("div#tab2").on("mouseenter", function() {
        $("div#full_tab2").animate({right: "0"}, "fast");
    });
    $("div#full_tab2").on("mouseleave", function() {
        $(this).animate({right: "-300px"}, "fast");
    });
    $("div#tab3").on("mouseenter", function() {
        $("div#full_tab3").animate({right: "0"}, "fast");
    });
    $("div#full_tab3").on("mouseleave", function() {
        $(this).animate({right: "-300px"}, "fast");
    });
    
    /*windowSizedDivs*/
    
    /*Measure the height of the header including padding and border.*/
    var headerHeight = $("div#header").outerHeight();
    
    /*Measure the height of the whole window inside the browser.*/
    var windowHeight = $(window).height();
    
    /*I want the height of the div to be everything below the header to the bottom of the screen, so I subtract the height of the header from the height of the window.*/
    var divHeight = windowHeight - headerHeight;
    
    /*Selecting all divs with the desired class to be the height I have just calculated.*/
    $("div.divSetHeight").css("height", divHeight);
    
    /*The first button will send the scroll position to align with the top of the first div.*/
    $("input#scrollJQ").on("click", function() {
        
        /*This says that the position the browser should scroll to is when the top of the targeted div is at the top of the window, and then accounts for the height of the header. NOTE: I have measured the height of the header again because, due to local scope of variables, the variable storing the height of the header used previously is not valid inside this function.*/
        $(window).scrollTop(($("div#topDiv").offset().top) - $("div#header").outerHeight());
    });
    
    /*Each successive button tells the browser a new position at which to scroll.*/
    $("input#scroll1JQ").on("click", function() {
        $(window).scrollTop(($("div#topMiddleDiv").offset().top) - $("div#header").outerHeight());
    });
    $("input#scroll2JQ").on("click", function() {
        $(window).scrollTop(($("div#middleDiv").offset().top) - $("div#header").outerHeight());
    });
    $("input#scroll3JQ").on("click", function() {
        $(window).scrollTop(($("div#bottomMiddleDiv").offset().top) - $("div#header").outerHeight());
    });
    $("input#scroll4JQ").on("click", function() {
        $(window).scrollTop(($("div#bottomDiv").offset().top) - $("div#header").outerHeight());
    });
    
    /*The last button specifies '0' as the location to which to scroll, meaning the top of the page again.*/
    $("input#scroll5JQ").on("click", function() {
        $(window).scrollTop(0);
    });
    
    /*animateScroll*/
    $("input#animateScrollJQ").on("click", function() {
        
        /*Measuring the height of the window...*/
        var windowHeight = $(window).height();
        
        /*...and the HTML (that is to say measuring all the content on and offscreen).*/
        var HTMLHeight = $("html").height();
        
        /*This line animates the scroll to the bottom of the page. NOTE: Without subtracting the height of the window, the scroll is attempting to scroll below the bottom of the page. This is not an issue, but since the animation is on a curve, it will start smoothly and finish abruptly, so I code the scroll to a full window's measurement below the end of the page.*/
        $("html").animate({scrollTop: HTMLHeight - windowHeight}, 8000);
    });
    
    /*monitorScroll*/
    $(window).scroll(function() {
        $("p#scrollPosition").html("The scroll position is<br><strong>" + $(window).scrollTop() + "</strong><br>pixels from the top.");
    });
    
    /*imageScroll*/    
    $(window).on("scroll", function() {
        
        /*If the distance between the top of the screen and the scroll position is greater than 200 pixels, then...*/
        if ($(window).scrollTop() > 200) {
            
            /*The div will animate to a new position.*/
            $("div#imgScroll").animate({bottom: "400px"}, 1000);
        }
        
        /*If the above criteria is not the case, whether before the scroll has triggered or returning to 200 or less pixels*/
        else {
            
            /*Whatever animation is currently going on, and all subsequent animations, will stop, and then the div will animate to a new position.*/
            $("div#imgScroll").stop(true).animate({bottom: "-500px"});
        }
    });
    
    /*highlightFields*/
    $("input:text, textarea").on("focus", function() {
        $(this).css("background-color", "lightyellow");
    });
    $("input:text, textarea").on("blur", function() {
        $(this).css("background-color", "white");
    });
    
    /*each*/
    
    /*This line says that when the submit is clicked to the targeted form, a function runs.*/
    $("form#eachJQ").on("submit", function() {
        
        /*A variable is established to be zero in value.*/
        var totalPets = 0;
        
        /*The selector is every input that is 'text' that is within the the specific form. Then, for 'each' of the elemented selected by the 'multi-selector'...*/
        $("form#eachJQ input:text").each(function() {
            
            /*...the value of the field of 'this' (needed to specify which field is being referred to) is converted to an integer (without it would be a string and be concatenated). Then this number is added to the variable established at the beginning of the function.*/
            totalPets += parseInt($(this).val());
        });
        
        /*This is the variable being displayed in a paragraph.*/
        $("p#totalPetsJQ").html("You have <strong>" + totalPets + "</strong> pets.");
    });
    
    /*eventType*/
    $("img#eventTypePic").on("mouseover click dblclick mouseout", function(e) {
        var whichEvent = (e.type);
        $("p#eventType").html("The event was: <strong>" + whichEvent + "</strong>.");
    });
    
    /*delegate*/
    
    /*Re-using the append fruit code from earlier, so just adding new code for the second list to show the difference.*/
    $("input#appendVegJQ").on("click", function() {
        $("ol#veggieList").append("<li>Butternut Squash</li>");
    });
    
    /*In this code, without delegation, the 'li' element is in the selector.*/
    $("ol#fruitList li").on("click", function() {
        $(this).empty();
    });
    
    /*In this code however, the 'li' element has been delegated to an argument in the method.*/
    $("ol#veggieList").on("click", "li", function() {
        $(this).empty();
    });
    
});