import axios from 'axios';
import React from 'react';
import Head from 'next/head';

type Props = { name: string; };
class Page extends React.Component<Props> {
  static async getInitialProps(ctx) {
    let data = {};
    try {
      const resp = await axios.get(
        '/api/hello-world',
        { baseURL: ctx.req ? `https://d9b5r7xrlfpsj.cloudfront.net` : window.location.origin },
      );
      data = resp.data;
    } catch (e) {}

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
