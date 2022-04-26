import React, { useEffect }from 'react';
import { Link } from "react-router-dom";


function ListPage() {


  useEffect(() => {

  

    console.log();
});

return (
         <div>
              <Link to="/Page/Page1"> Page1  </Link> 
              <Link to="/Page/Page2"> Page2  </Link>    
          </div>
        );
    
}


export default ListPage