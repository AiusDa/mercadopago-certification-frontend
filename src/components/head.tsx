/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';

type DataProps = {
  pageType?: 'home' | 'search' | 'item' | '';
};

export const Head: React.FC<DataProps> = ({ pageType = '' }) => {
  return (
    <Helmet>
      <script
        src="https://www.mercadopago.com/v2/security.js"
        view={pageType}
      ></script>
    </Helmet>
  );
};
