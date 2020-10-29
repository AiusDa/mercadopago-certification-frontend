/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type DataProps = {
  description?: string;
  lang?: string;
  metas?: MetaProps[];
  title?: string;
};

export type MetaProps =
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined };

export const SEO: React.FC<DataProps> = ({
  description = '',
  lang = 'en',
  metas = [],
  title = ''
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const defaultMetas = [
    {
      name: 'description',
      content: metaDescription
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: metaDescription
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:creator',
      content: site.siteMetadata?.author || ''
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: metaDescription
    }
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      // titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : ''}
      titleTemplate='Vendorplace'
      meta={[...defaultMetas, ...metas]}
    />
  );
};
