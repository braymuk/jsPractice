const getTheTitles = function(books) {
    let results = [];
    books.map((book, index)=> {
        results[index] = book.title;
    })
    return results;
}

module.exports = getTheTitles;
