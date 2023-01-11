import React from 'react'
import { useGlobalContext } from '../../context'
import Loader from '../Loader/Loader'
import coverImg from "../../assets/images/cover_not_found.jpg"
import "./BookList.css"
import Book from './Book'

const BookList = () => {

    const { books, loading, resultTitle } = useGlobalContext()
    const booksWithCovers = books.map((singleBook) => {
        return {
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
        }


    })
    console.log(booksWithCovers)
    if (loading) return <Loader />
    return (
        <section className="booklist">
            <div className="conatainer">
                <div className="section-title">
                    <h2>{resultTitle}</h2>
                </div>
                <div className="booklist-content grid">
                    {
                        booksWithCovers.slice(0, 30).map((item, index) => {
                            return (
                                <Book key={index} {...item} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default BookList