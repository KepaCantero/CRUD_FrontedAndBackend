$(()=>{
    const id = getIdFromQuery();
    getOne(id)
    .then(todo =>{
        $('#date').text(todo.date);
        $('#title').text(todo.title);
        $('#description').text(todo.description);
        $('#priority').text(todo.priority);
        $('#editButton').attr('href', `/edit.html?id=${todo.id}`);
    })

    $('#deleteButton').click(deleteTodo);

	function deleteTodo() {
		$.ajax({
				type: 'DELETE',
				dataType: 'json',
				url: `${API_URL}/${id}`,
		}).then(result => {
			window.location = '/';
		});
	}
})
