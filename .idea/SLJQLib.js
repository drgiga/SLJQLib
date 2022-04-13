/**
 *
 * @param jsFilePath
 */
function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

/**
 *
 * @param selector
 * @returns {{hide: self.hide, html: (function(): any), attr: self.attr, element: *, on: self.on}}
 */
function $(selector)
{
    const self =
        {
            element : document.querySelector(selector),
            html : ()=> self.element,
            on:(event, callback)=>{
                document.addEventListener(event, callback);
            },
            hide:()=>{
                self.element.style.display = "none"
            },
            attr:(name, value)=>{
                if(value == null)
                    self.element.getAttribute(name);
                else
                    self.element.setAttribute(name,value);
            }
        }
    return self;
}



/*
// Usage of The SLJQLib Library
console.log($('h1').html());

$('h2').on('click',function (){
    alert("Tag is Clicked!");
})

$('h3').hide();

$('h4').attr('class','Hello World');*/
