/*'const' is a type of variable declaration which means that once the variable has been declared, it cannot be reassigned. 'inputs' is the name we are giving to our variable, it will be a collection of all the 'input' elements gathered together by 'document.querySelectorAll()'.*/
const inputs = document.querySelectorAll("input");

/*This is establishing the object 'patterns' which will hold properties that have values. The properties will line up with the names of the inputs, and the values are the regular expressions to be matched. See below for the breakdown of the regex's.*/
const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/,
    telephone: /^\d{11}$/
};

/*The validation function has 2 parameters, we are calling them after what they will represent, the field and the regex. These values will be passed to the function by the function call.*/
function validate(field, regex) {
    
    /*When the regular expression is tested (using '.test()') on the field being targeted's value at that moment, the value returned will be either true or false (if the regex matches). If the value is true, then the following code will execute.*/
    if (regex.test(field.value)) {
        
        /*The class 'valid' is assigned to the field input in question. '.className' is used in order to eliminate any other classes that might already be assigned - this is important because as the user types, the regex will match and unmatch.*/
        field.className = "valid";
    }
    
    /*If false is returned, then the className is 'invalid'.*/
    else {
        field.className = "invalid";
    }
}

/*'inputs' is the collection of field inputs. 'forEach((input) =>' states that for each input within the collection of inputs, a function will run. This is an 'arrow' function, which is a newer syntax for writing a function.*/
inputs.forEach((input) => {
    
    /*Assigned to the input is an event listener, and a function will run on the occurance of the event. The even is 'keyup', which means after a key is depressed and let go. The event type is recorded as 'e' in (e).*/
    input.addEventListener("keyup", (e) => {
        
        /*This is a line logging the action to the console, it has been commented out.*/
        //console.log(e.target.attributes.name.value);
        
        /*'validate()' is the function, and there are the two arguments being passed to the function, which will become parameters: 
        e.target is the location of the event ('keyup'), being passed as the 'field' parameter.
        patterns[#] is the object and the '#' represents what will be passed to the function as the second parameter 'regex'.
            e.target.attributes.name takes us to the input field into which the user has typed's name (in the HTML). This is essentially a string value.*/
                /*'.value', combined with the string generated up to this point, now switces to a property value in the object 'patterns', there fore getting the regex stored and sending that as the parameter.*/
        validate(e.target, patterns[e.target.attributes.name.value]);
   });
});

/*

Username
/^[a-z\d]{5,12}$/i

/^ this must be at the beginning of the expression
[a-z\d] this one character can be a letter or number
{5,12} there can be between 5 & 12 characters
$ this must also be at the end of the expression - ^$ sandwiched means this is the entire expression.
/i this expression may be in upper or lower case


Email
/^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

/^([a-z\d\.-_]+)
/^ this must be at the beginning of the expression
() everything in the parentheses is evaluated as one expression within the larger expression
[] everything in the brackets is one character
a-z any lower case letter
\d any number (digit)
\. a period. (NOTE: '.' on its own means ANY character, the '\' ESCAPES the standard definition of any character following it)
-_ the literal characters '-' and '_'
+ the character preceding this must exist a minimum of one time

@ there must be an '@' character at this point in the expression

([a-z\d-]+)
() everything in the parentheses is evaluated as one expression within the larger expression
[] everything in the brackets is one character
a-z any lower case letter
\d any number (digit)
- the literal character '-'
+ the character preceding this must exist a minimum of one time

\. There must be a '.' at this point

([a-z]{2,8})
() everything in the parentheses is evaluated as one expression within the larger expression
[] everything in the brackets is one character
a-z any lower case letter
{2,8} this part must have between 2 & 8 characters

(\.[a-z]{2,8})?
() everything in the parentheses is evaluated as one expression within the larger expression
\. There must be a '.' at this point
[] everything in the brackets is one character
a-z any lower case letter
{2,8} this part must have between 2 & 8 characters
? the expression preceding this is optional

$/ this ends the expression


Password
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/

(?=.*[a-z])
(?=) after the equals sign, the expression is looking ahead (without moving an invisible cursor demonstrating where the regex engine is at) for a particular expression
. any character
* used zero or more times
[a-z] followed by a-z in lower case
(so basically looking for at least one instance of a lower case letter)

(?=.*[A-Z]) at least one instance of an upper case letter
(?=.*\d) at least one instance of a digit
(?=.*[@$!%*?&_-]) at least once instance of one of these characters: @$!%*?&_-

[A-Za-z\d@$!%*?&_-]{8,} These are the allowable characters, and there must be at least 8, and there is no maximum


Telephone
/^\d{11}$/
This is 11 digits


e.target means wherever the event happened, the location of that event - i.e. the field in which the keyup happened.



/^[\w@-]{8,20}$/
This would be an alternative and more straightforward password regex. It checks for a 'word' character, which is a-zA-Z0-9_, and also it allows @ and -.

*/