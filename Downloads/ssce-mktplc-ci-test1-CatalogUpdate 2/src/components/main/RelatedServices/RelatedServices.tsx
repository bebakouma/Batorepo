import * as React from 'react';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Savings from '../../../assets/Savings.png';
import AnalystRelationse from '../../../assets/AnalystRelations.png';
import PredictiveAnalytics from '../../../assets/PredictiveAnalytics.png';
import RiskCompliance from '../../../assets/RiskCompliance.png';
import BusinessIntelligence from '../../../assets/BusinessIntelligence.png';

const RelatedServices: React.FC = () => { 
return (
  <>
  <div style={{marginLeft: '260px'}}>
  <Typography variant='h1' color='primary' style={{fontSize:'28px'}}>Related Services</Typography>
    <div style={{ display:'flex', alignItems: 'flex-start', gap: '60px', marginBottom: '100px', marginTop: '20px', marginLeft:'40px'}}>
   
    <Card sx={{ minWidth: 200, backgroundColor: '#EBF8FD', border: '8px solid #0A85C7', borderRadius: '8px'}}>
      <CardActionArea style={{width: '200'}}>
      <CardMedia
          component="img"
          height="100"
          image={Savings} 
          alt="algorithmics"
          style={{objectFit:'contain', width:100, margin:50}}
      />
      </CardActionArea>
    </Card>
  
    <Card sx={{ minWidth: 200, backgroundColor: '#EBF8FD', border: '8px solid #0A85C7', borderRadius: '8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={AnalystRelationse}
          alt="algorithmics"
          style={{objectFit:'contain', width:100, margin:50}}
          />
      </CardActionArea>
    </Card>

    <Card sx={{ minWidth: 200, backgroundColor: '#EBF8FD', border: '8px solid #0A85C7', borderRadius: '8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={PredictiveAnalytics}
          alt="algorithmics"
          style={{objectFit:'contain', width:100, margin:50}}
        />
      </CardActionArea>
    </Card>

    <Card sx={{ minWidth: 200, backgroundColor: '#EBF8FD', border: '8px solid #0A85C7', borderRadius: '8px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={RiskCompliance}
          alt="algorithmics"
          style={{objectFit:'contain', width:100, margin:50}}
        />
      </CardActionArea>
    </Card>
    </div>
    </div>
  </>
    );
  };


  export default RelatedServices;