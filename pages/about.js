import { FormattedMessage } from 'react-intl';
import Navbar from './../components/Navbar';

var about = () => {
    return (

        <div id="whole" >
            <Navbar />
            <h1>
                <FormattedMessage id="About Us" />
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

export default about