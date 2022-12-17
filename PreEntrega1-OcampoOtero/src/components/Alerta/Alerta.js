import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';


function Alerta() {
  return (
    <>
      {[
        'dark'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Bootstrap {variant} 
        </Alert>
      ))}
    </>
  );
}

export default Alerta;