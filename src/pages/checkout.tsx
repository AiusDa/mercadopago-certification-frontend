import React from 'react';
import { configure } from 'mercadopago';

import Layout from '../components/layout';
import { SEO } from '../components/seo';

export function configureMercadoPagoSDK() {
  configure({
    access_token:
      'APP_USR-1159009372558727-072921-8d0b9980c7494985a5abd19fbe921a3d-617633181'
  });
}

const CheckoutPage = () => {
  if (typeof window !== 'undefined') {
    configureMercadoPagoSDK();
  }

  return (
    <Layout>
      <SEO title="Checkout Page" />
    </Layout>
  );
};

export default CheckoutPage;
