import * as React from 'react';

const NodeRed: React.FC = () => {
  
    return (
        <>
          <div style={{marginLeft: '200px', marginTop: '-30px'}}>
            <iframe src="http://ssce-nodered-dev.ssnc-corp.cloud:1880/" height="700" width="1320" ></iframe>
          </div>
        </>
          );
        };
      
 export default NodeRed;