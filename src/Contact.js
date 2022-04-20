import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";


const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        Lorem, 
        ipsum dolor sit amet consectetur adipisicing elit. 
        Nam quo, voluptate numquam necessitatibus eum, 
        doloremque in illum ipsam, 
        dolorum dignissimos harum cupiditate nemo quaerat excepturi adipisci nostrum amet qui, 
        delectus reiciendis minima nisi temporibus ab? 
        Consequuntur, 
        dolorum iure illum enim culpa voluptatem tempora perferendis 
        modi voluptates aliquid impedit corrupti atque.
        Odio at blanditiis enim soluta culpa, ea ipsum fugiat ratione ad incidunt impedit, 
        exercitationem neque assumenda perspiciatis temporibus eius nihil nam earum 
        consequuntur ipsa! 
        At nemo dicta repellat quos, 
        libero molestiae illum suscipit. 
        Eveniet, consequuntur incidunt.
      </div>
      <Button onClick={() => navigate("/")}>
        Back To Header
      </Button>

    </div>
  )
}

export default Contact;