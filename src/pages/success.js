import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';

const Success = () => (
  <Layout>
    <section className="success-page">
      <div className="page-center">
        <h2>Your submission was received!</h2>

        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  </Layout>
);

export default Success;
