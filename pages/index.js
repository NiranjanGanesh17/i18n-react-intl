import Head from 'next/head';
// import '../styles/index.css';
import Navbar from '../components/Navbar';
import '../styles/Home.module.css'
import { FormattedMessage, FormattedDate } from 'react-intl';


export default function Home() {
  return (

    // <div className={styles.container}>
    <div id="whole">
      <Head>
        <title>I18n</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1>
        <FormattedMessage id='Hello' /><br />
        Today's Date :
        <FormattedDate
          value={new Date()}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </h1>
      <style JSX>{`
      #whole{
        background-color:black;
        color:white;
        height:100vh;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
      }
      `}</style>
    </div >
  )
}
