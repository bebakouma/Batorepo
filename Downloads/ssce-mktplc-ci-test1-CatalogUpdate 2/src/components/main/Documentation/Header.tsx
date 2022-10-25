import * as React from 'react';
import GraphQL_BGD from '../../../assets/GraphQL_BGD.png';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
  
    return (
        <>
      <article style={{height: '100%', position: 'relative', overflow:'hidden'}} >
      <picture >
        <source media="(min-width: 0px)" srcSet={GraphQL_BGD} />
        <img src={GraphQL_BGD} alt="background" style={{objectFit:'cover', width: '100%', height: '80%'}}/>
      </picture>
      <h1 style={{fontSize: '32px',color: 'white', textAlign:'center', position:'absolute', top:'0', bottom:'0', left:'0', right:'0', height: 'fitContent', margin:'auto', paddingTop: '15%', paddingLeft: '100px' }}>Design, develop, and deploy features quicker with GraphQL</h1>
    </article>
    <div style={{marginLeft:'200px', display:'flex', flex: '100%', flexWrap:'wrap', gap:'100%'}}>
        <Typography variant='h1' color='black' fontSize = "20px" style={{margin: 'auto'}}>
            A Query Language for your API
        </Typography>
        <p style={{fontSize:'15px'}}>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.</p>
        </div>
        </>
          );
        };
      
 export default Header;