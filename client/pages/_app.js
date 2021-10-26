import './index.scss';

// App: next가 서버사이드렌더링(SSR)을 하기 위해 필요한 컴포넌트
// (기본적으로 작성 공식이 정해져 있음)
const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.getInitialProps = async ({ ctx, Component }) => {
  // 각 Component 별로 getInitialProps가 정의가 되어 있으면 ctx를 넘김
  const pageProps = await Component.getInitialProps?.(ctx);
  // pageProps를 props로 넘김 => 위에서 Component와 함께 받아 Component 안에 props로 넣어줌
  return { pageProps };
};

export default App;
