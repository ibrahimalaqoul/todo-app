import { useContext } from "react";
import { SettingsContext } from "../../context/settings";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { When } from "react-if";
import { AuthContext } from '../../context/Auth.js';

export default function List(props){
    const settings = useContext(SettingsContext);
    const auth = useContext(AuthContext)

  if(settings.displaySettings){
    return(
        <Card elevation={Elevation.TWO} key={props.item.id} className='list-card'>
        <p>{props.item.text}</p>
        <p><small>Assigned to: {props.item.assignee}</small></p>
        <p><small>Difficulty: {props.item.difficulty}</small></p>
        <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
        <When condition={auth.authurized('delete')}>
        <Button onClick={() => props.deleteItem(props.item.id)}>Delete Item</Button>
        </When>
        {/* <hr /> */}
      </Card>
    )
    }else{
        if(!props.item.complete) {
            return(
                <Card key={props.item.id}  className='list-card'>
                <p>{props.item.text}</p>
                <p><small>Assigned to: {props.item.assignee}</small></p>
                <p><small>Difficulty: {props.item.difficulty}</small></p>
                <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
                <When condition={auth.authurized('delete')}>
                <Button onClick={() => props.deleteItem(props.item.id)}>Delete Item</Button>
                </When>
                {/* <hr /> */}
              </Card>
            )
        }
    }

} 
