import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';


var Navbar = () => {
    const router = useRouter();
    const { formatMessage: f } = useIntl();
    return (
        <nav id="nav">
            <Link href="/">{f({ id: "Home" })}</Link><br />
            <Link href="/about">{f({ id: "About" })}</Link><br />
            <div>
                <h3>languages</h3>
                <ul>
                    {router.locales.map((one) => <li key={one}><Link href={router.asPath} locale={one}><button id="btn">{one == 'en' ? "English" : one == 'es' ? 'Spanish' : "French"}</button></Link></li>)}
                </ul>
            </div>
            <style JSX>{`
      #nav{
       background-color:white;
       color:black;
       width:100%;
       display:flex;
       align-items:center;
       justify-content:space-around;
       flex-direction:row;
       font-size:25px;
      }
      ul{
          list-style:none;
      }
      #btn{
          
         margin:5px;
        height:30px;
        text-weight:bold;

      }
      `}</style>
        </nav>



    )
}
export default Navbar