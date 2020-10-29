import React, { ReactElement } from 'react';
import { WindowLocation } from '@reach/router';
import * as queryString from 'query-string';

import Layout from '../components/layout';
import { SEO } from '../components/seo';
import { Page, PageProps } from 'gatsby';

function renderStatus(status: string): ReactElement {
  switch (status) {
    case 'approved':
      return <h2>Pago exitoso</h2>;
    case 'pending':
      return <h2>Tu pago está pendiente por ser realizado</h2>;
    case 'in_process':
      return <h2>Tu pago se está procesando</h2>;
    case 'rejected':
      return <h2>Tu pago ha sido rechazado, por favor inténtalo de nuevo</h2>;
    default:
      return <h2>Error desconocido al realizar el pago</h2>;
  }
}

const CheckoutPage: React.FC<PageProps> = ({ location }) => {
  const params: queryString.ParsedQuery = queryString.parse(location.search);
  const { collection_status } = params;
  return (
    <Layout>
      <SEO title="Thank you Page" />
      {renderStatus(collection_status as string)}
    </Layout>
  );
};

export default CheckoutPage;
