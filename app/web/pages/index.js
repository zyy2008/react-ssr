import React from 'react';
import { connect, useIntl, getLocale, setLocale } from 'umi';
import { Button } from 'antd';

const Home = (props) => {
  console.log(props)
  return (
    <div>
      <Button >切换语言</Button>
    </div>
  )
}
Home.getInitialProps = (async ({ store, isServer, history, match, route }) => {
  // console.log(ctx);
  if (!isServer) { return }
  await store.dispatch({ type: 'test/test' })
  const { test } = store.getState()
  return { test }
})

export default connect((({ test }) => ({ title: test.title })))(Home)
