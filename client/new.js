$(()=>{

$('form').submit((event)=>{
    event.preventDefault();
    const title = $('#title').val();
    const description = $('#description').val();
    const priority = $('#priority').val();
    const todo = {
        title,
        description,
        priority
    };
    $.post( API_URL, { title: title, description: description, priority: priority } )
    .then(result =>
        {console.log(result)}
    ).catch(error =>{
        const $errorMessage= $('#errorMessage')
        $errorMessage.text(error.responseJSON.message);
        $errorMessage.css('display', '')
    });
})
})
