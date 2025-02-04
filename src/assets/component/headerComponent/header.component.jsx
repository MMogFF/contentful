import React, { useState, useEffect } from 'react';
import { contentfulClient } from '../utils/contentfulClient';

export const HeaderComponent = () => {
    const [entry, setEntry] = useState(null);

    useEffect(() => {
        contentfulClient.getEntry('5gu8ensQStuwrxVVAmPdsh')
            .then((entry) => {
                setEntry(entry);
                console.log(entry);
                
            })
            .catch((error) => {
                console.error('Error fetching entry:', error);
            });
    }, []);

    return (
        <header>
            {entry && (
                <div>
                    <h1>{entry.fields.headerTitle}</h1>
                    <img src={entry.fields.headerImage.fields.file.url} alt="" />
                </div>
            )}
        </header>
    );
}