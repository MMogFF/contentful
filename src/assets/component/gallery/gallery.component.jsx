import React, { useState, useEffect } from 'react';
import { contentfulClient } from '../../utils/contentfulClient';

export const GalleryComponent = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
            contentfulClient.getEntries({
                content_type: 'gallery',
              })
                .then((entry) => {
                    setEntries(entry.items);
                    console.log(entry.items[0].fields.images[0].fields.file.url);
                    
                    
                })
                .catch((error) => {
                    console.error('Error fetching entry:', error);
                });
        }, []);

    return (
        <div>
            {entries.map((entry, index) => (
                <div key={index}>
                    {entry.fields.title && (
                        <>
                            <h3>{entry.fields.title}</h3>
                            <p>{entry.fields.description.content[0].content[0].value}</p>
                            {entry.fields.images[0].fields.file.url && (
                                <img src={entry.fields.images[0].fields.file.url} alt={entry.fields.title} />
                            )}
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}