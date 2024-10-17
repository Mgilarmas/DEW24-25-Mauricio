//write your JS code here:

function openBlankPage(){
    window.open('','','width=200 height=100');
}

function openMsgWindow(){
    let msgWindow = window.open('','MsgWindow','');

    msgWindow.document.write('Some text')
}

function openMsgWindow2(){
    let msgWindow2 = window.open('','MsgWindow','');

    msgWindow2.document.write('Some other text')
}

function replaceWindow(){
    window.location.replace('http://www.google.com');
}

function windowAppearance(){
    window.open('','','toolbar=yes,scrollbars=yes,resizable=yes,width=200 height=400,left=200,top=100');
}

function openCloseWindow(){
    let newWindow = window.open();
    setTimeout(() =>{
        newWindow.close();
    }, 2000)
}

function openerProperty(){
    let openerWindow = window.open();
    openerWindow.opener.document.write('some window text');
}

function createIframe(){
    let iframe = document.createElement('iframe');
    iframe.src = 'iframe.html';
    document.body.appendChild(iframe);
    iframe.onload = function() {
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.write('some text');
    }
}

