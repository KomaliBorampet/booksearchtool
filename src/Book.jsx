import React, { useEffect, useState } from 'react';

export function Book(props) {

    const [coverPage, setCoverPage] = useState();

    useEffect(() => {

        if (props.data?.cover_edition_key) {
            fetch(`https://openlibrary.org/api/books?bibkeys=OLID:${props.data.cover_edition_key}&format=json&jscmd=data`)
                .then(res => res.json())
                .then(res => {
                    const dataOLID = res[`OLID:${props.data.cover_edition_key}`];
                    if (dataOLID.cover.medium) {
                        setCoverPage(dataOLID.cover.medium)
                    }
                })
        }
    }, [props])

    return (
        <>
            <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "2em" }} >
                    <img src={coverPage} style={{ width: "100px" }} alt="cover" />
                </div>
                <div>
                    <div> Title: {props.data?.title} </div>
                    <div> Author(s): {props.data?.author_name && props.data?.author_name.join(", ")}</div>
                    <div> Publish Date: {props.data?.first_publish_year  && props.data?.first_publish_year}</div>
                    <div> ISBN: {props.data?.isbn && props.data?.isbn.length > 0 && props.data?.isbn[0]}</div>
                </div>
            </div>
        </>
    )
}