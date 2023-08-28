// author

let author=document.getElementById('author');

// quote

let quote=document.getElementById('quote');

// quote_button

let quote_button=document.getElementById('quote_button');


quote_button.addEventListener('click',function(){

    
    let url='https://api.quotable.io/random';

    fetch(url)
    .then(res=>res.json())
    .then(data=>{

        console.log(data);

        author.innerText=`${data.author}`;
        quote.innerText=`${data.content}`


    });


})