import axios from 'axios';
import React from 'react';
import Head from 'next/head';

type Props = { name: string; };
class Page extends React.Component<Props> {
  static async getInitialProps(ctx) {
    const { data } = await axios.get('/api/hello-world');
    return data;
  }

  render() {
    const { name } = this.props;
    return (
      <>
        <Head><title>HelloPage</title></Head>
        <div>Welcome, {name}</div>
      </>
    )
  }
}

export default Page;
