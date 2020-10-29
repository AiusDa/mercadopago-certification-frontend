import React from 'react';
import axios from 'axios';

import Layout from '../components/layout';
import { Head } from '../components/head';

const createPayment = async () => {
  const API_URL = process.env.API_URL;
  const data = {
    items: [
      {
        id: '1234',
        title: 'Product title',
        description: 'Dispositivo móvil de Tienda e-commerce',
        quantity: 1,
        currency_id: 'MXN',
        unit_price: 10.5,
        external_reference: 'ahidalgo@idealizer.mx'
      }
    ],
    payer: {
      name: 'Lalo',
      surname: 'Landa',
      email: 'test_user_81131286@testuser.com',
      phone: {
        area_code: '52',
        number: 5549737300
      },
      address: {
        zip_code: '03940',
        street_name: 'Insurgentes Sur',
        street_number: 1602
      }
    }
  };

  console.log({ url: `${API_URL}/payment` });

  const result = await axios.post(`${API_URL}/payment`, data, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  });

  window.location.href = result.data.body.init_point;
};

const IndexPage = () => {
  return (
    <Layout>
      <Head pageType="home" />
      <button onClick={() => createPayment()}>Comprar producto</button>
    </Layout>
  );
};

export default IndexPage;
