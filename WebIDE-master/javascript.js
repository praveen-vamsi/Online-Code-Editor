const htmledi = CodeMirror(document.querySelector(".editor .code .html"),{
    lineNumbers:true,
    tabSize: 4,
    mode: "xml",
});

const cssedi = CodeMirror(document.querySelector(".editor .code .css"),{
    lineNumbers:true,
    tabSize: 4,
    mode: "css"
});

const jsedi = CodeMirror(document.querySelector(".editor .code .js"),{
    lineNumbers:true,
    tabSize: 4,
    mode: "javascript"
});

document.querySelector("#runbt").addEventListener("click",function(){
    let htmlcode = htmledi.getValue();
    let cssCode = "<style>" + cssedi.getValue() + "</style>";
    let jsCode = "<script>" + jsedi.getValue() + "</script>";
    let outputwin = document.querySelector("#oframe").contentWindow.document;
    outputwin.open();
    outputwin.write(htmlcode+cssCode+jsCode);
    outputwin.close();
})