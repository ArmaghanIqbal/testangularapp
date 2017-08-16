function RegistrationPageHTML() {

    document.title = 'Registration';
    document.getElementById('ParentDiv').remove();

    // get the refference of the main Div
    var mainDiv = document.getElementById('MainDiv');

    var ParentDiv = document.createElement('div');
    ParentDiv.setAttribute('id', 'ParentDiv');
    ParentDiv.setAttribute('align', 'center');

    // create new div that will work as a container
    var newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'innerDiv1');
    newDiv.setAttribute('align', 'center');

    //create span to contain the text
    var newSpan = document.createElement('span');
    newSpan.innerHTML = "First Name :";

    // create new textbox for email entry
    var newTextBox = document.createElement('input');
    newTextBox.type = 'text';
    newTextBox.setAttribute('id', 'txtFirstName');


    var newDiv1 = document.createElement('div');
    newDiv1.setAttribute('id', 'innerDiv2');
    newDiv1.setAttribute('align', 'center');

    //create span to contain the text
    var newSpan1 = document.createElement('span');
    newSpan1.innerHTML = "Last Name :";

    // create new textbox for email entry
    var newTextBox1 = document.createElement('input');
    newTextBox1.type = 'text';
    newTextBox1.setAttribute('id', 'txtLastName');

    var newDiv2 = document.createElement('div');
    newDiv2.setAttribute('id', 'innerDiv3');
    newDiv2.setAttribute('align', 'center');

    //create span to contain the text
    var newSpan2 = document.createElement('span');
    newSpan2.innerHTML = "User Name :";

    // create new textbox for email entry
    var newTextBox2 = document.createElement('input');
    newTextBox2.type = 'text';
    newTextBox2.setAttribute('id', 'txtUserName');

    var newDiv3 = document.createElement('div');
    newDiv3.setAttribute('id', 'innerDiv4');
    newDiv3.setAttribute('align', 'center');

    //create span to contain the text
    var newSpan3 = document.createElement('span');
    newSpan3.innerHTML = "Password :";

    // create new textbox for email entry
    var newTextBox3 = document.createElement('input');
    newTextBox3.type = 'text';
    newTextBox3.setAttribute('id', 'txtPassword');


    var newDiv4 = document.createElement('div');
    newDiv4.setAttribute('id', 'innerDiv5');
    newDiv4.setAttribute('align', 'center');


    // create new textbox for email entry
    var newButton = document.createElement('input');
    newButton.id = 'btnSave';
    newButton.value = 'Save';
    newButton.type = 'button';

    var newDiv5 = document.createElement('div');
    newDiv5.setAttribute('id', 'innerDiv6');
    newDiv5.setAttribute('align', 'center');


    var newSpan4 = document.createElement('span');
    newSpan4.innerHTML = "Admin";


    var newRadio = document.createElement('input');
    newRadio.id = 'rbtnRoleAdmin';
    newRadio.value = '1';
    newRadio.type = 'radio';
    newRadio.name = 'chooserole';

    var newSpan5 = document.createElement('span');
    newSpan5.innerHTML = " Normal";

    var newRadio1 = document.createElement('input');
    newRadio1.id = 'rbtnRoleNormal';
    newRadio1.value = '2';
    newRadio1.type = 'radio';
    newRadio1.name = 'chooserole';

    /* 
     // create remove button for each email adress
     var newButton = document.createElement('input');
     newButton.type = 'button';
     newButton.value = 'Remove';
     newButton.id = 'btn'+NumOfRow;
     
     }*/

    // atach event for remove button click
    newButton.onclick = function LoginAuth() {

        save(document.getElementById('txtFirstName').value,document.getElementById('txtLastName').value,document.getElementById('txtUserName').value,document.getElementById('txtPassword').value,document.getElementById('rbtnRoleAdmin').value)
    }


    // append the span, textbox and the button
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newTextBox);
    newDiv1.appendChild(newSpan1);
    newDiv1.appendChild(newTextBox1);
    newDiv2.appendChild(newSpan2);
    newDiv2.appendChild(newTextBox2);
    newDiv3.appendChild(newSpan3);
    newDiv3.appendChild(newTextBox3);
    newDiv5.appendChild(newSpan4);
    newDiv5.appendChild(newRadio);
    newDiv5.appendChild(newSpan5);
    newDiv5.appendChild(newRadio1);
    newDiv4.appendChild(newButton);


    // finally append the new div to the main div
    ParentDiv.appendChild(newDiv);
    ParentDiv.appendChild(newDiv1);
    ParentDiv.appendChild(newDiv2);
    ParentDiv.appendChild(newDiv3);
    ParentDiv.appendChild(newDiv5);
    ParentDiv.appendChild(newDiv4);

    mainDiv.appendChild(ParentDiv);

}
