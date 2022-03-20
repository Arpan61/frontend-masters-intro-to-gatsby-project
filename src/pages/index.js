import * as React from 'react';
import {Link, useStaticQuery, graphql } from 'gatsby';

export default function IndexPage() {
    const data = useStaticQuery(graphql`
        query GetSiteData{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    const meta = data?.site?.siteMetadata ??{};

    return (
        <>
            <h1>{meta.title}</h1> 
            <main>
                <h1>Hello World</h1>
            </main>
        </>
    );
}