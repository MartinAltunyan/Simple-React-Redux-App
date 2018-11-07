export  function selectBook(book) {
    //selectBook action creator, neeeds to return an action with  a type property
    return {
        type:"BOOK_SELECTED",
        payload:book
    };
}