const BooksList = (props) => {
    let booksData=props.data
    let remove=props.fun
    let removeAll=props.func
    return ( 
        <div className="booksList">
            <h1>List of Books -{booksData.length}</h1>
            {booksData.map((dat)=>(
                <div style={{border:"2px solid black"}}>
                    <h1>Title:{dat.title}</h1>
                    <h3>Author:{dat.author}</h3>
                    <h4>Published in the year{dat.year}</h4>
                    <p>{dat.pages} pages/language: {dat.language}</p>
                    <a href={dat.link}>Read More</a>
                    <button onClick={()=>remove(dat.title)}>Not Intrested</button>
                    <button onClick={()=>removeAll(dat.title)}>Remove All</button>
                </div>
            ))}
        </div>
     );
}
 
export default BooksList;

// //re-using components
// creating json Server
//use effect hook
//fetching data from server
//routers
//from submission