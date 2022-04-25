boldCount = 0;
function bold()
{
    //var text = getText();
    //var text2 = text.bold();
    if (document.getElementById('editor_page').innerText == '') {
        if (boldCount == 0) {
            document.getElementById('bold_button').style.fontWeight = 'bold';
            document.getElementById('editor_page').style.fontWeight = 'bold';
            boldCount = 1;
        
        }
        else {
            document.getElementById('bold_button').style.fontWeight = '100';
            document.getElementById('editor_page').style.fontWeight = '100';
            boldCount = 0;
        }
    }
    else {
        alert("Please Clear the Document to Make Changes");
    }
}
function getText()
{
    if (document.getSelection)
    {
       var text = document.getSelection().toString();
        return text;
    }
    else
    {
        if (document.selection)
        {
            var text2=document.selection.createRange().text;   
            return text2;
        }
    }
}
function changeFontSize(event)
{
   // var text = getText();
    if (document.getElementById('editor_page').innerText == '') {
           //let innerValue = document.getElementById('editor_page').style.fontSize;
        if (event.target.value == "12") {
            document.getElementById('editor_page').style.fontSize = "12px";
           // let changeFonrOne = `<font size="1">${text} </font>`;
            //document.getElementById('editor_page').innerHTML = innerValue.replace(text, changeFonrOne);
        }
        else if (event.target.value == "14") {
       document.getElementById('editor_page').style.fontSize = "14px";
            // let changeFonrOne = `<font size="2">${text} </font>`;
            // document.getElementById('editor_page').innerHTML = innerValue.replace(text, changeFonrOne);
        }
        else if (event.target.value == "16") {
       
            document.getElementById('editor_page').style.fontSize = "16px";
            // let changeFonrOne = `<font size="3">${text} </font>`;
            // document.getElementById('editor_page').innerHTML = innerValue.replace(text, changeFonrOne);
        }
        else if (event.target.value == "18") {
       
            document.getElementById('editor_page').style.fontSize = "18px";
            // let changeFonrOne = `<font size="4">${text} </font>`;
            // document.getElementById('editor_page').innerHTML = innerValue.replace(text, changeFonrOne);
        }
        else {
        
        }
    }
    else {
     
        alert("Please Clear the Document to Make Changes");
    }
}
function changeFontFamily(event)
{
    //var text = getText();
    if (document.getElementById('editor_page').innerText == '') {
        
        //let innerValue = document.getElementById('editor_page').innerText;
        if (event.target.value == "Courier New") {
            document.getElementById('bold_button').style.fontFamily = "Courier New";
        }
        else if (event.target.value == "Courier") {
       document.getElementById('bold_button').style.fontFamily = "Courier";
        }
        else if (event.target.value == "New Times Roman") {
       document.getElementById('bold_button').style.fontFamily = "Times New Roman";
        }
        else if (event.target.value == "Arial") {
            document.getElementById('bold_button').style.fontFamily = "Arial";
        }
        else {
        
        }
    }
    else {
        alert("Please Clear the Document to Make Changes");
    }
}
function Copy() {
    var text = getText();
    if (text == '') {
        alert("Select the text to copy");
    }
    else {
        navigator.clipboard.writeText(text);
    }
    
}
function Save()
{
    alert("Press CTRL+S to download the file");
}
