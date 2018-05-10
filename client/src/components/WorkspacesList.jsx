import React from 'react';

 function WorkspaceList(props) {
   return (
     <ul>
-      <li>Spaces will go here</li>
      {props.workspaces.map(workspace => (
        <li>
          <h2>{workspace.w_name}</h2>
          <h2>{workspace.address}</h2>

        </li>
      ))}
     </ul>
   )
 }

 export default WorkspaceList;
