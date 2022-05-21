import useForm from '../../hooks/form.js';
import {SettingsContext} from '../../context/settings.js';
import {useContext} from 'react';
import { Switch } from "@blueprintjs/core";

export default function Form(props){
    const { handleChange, handleSubmit } = useForm(props.addItem);
    const setting = useContext(SettingsContext);
    const handleClick = () => {
        setting.setDisplaySettings(!setting.displaySettings);
        console.log(setting.displaySettings);
    }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        
        <h2>Add To Do Item</h2>

        <label>
          <span>To Do Item</span>
          <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
        </label>

        <label>
          <span>Assigned To</span>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
        </label>

        <label>
          <span>Difficulty</span>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
        </label>

        <label>
          <button type="submit">Add Item</button>
        </label>
      </form>
        <Switch checked={setting.displaySettings} onClick={handleClick}>Display completed Items</Switch>
        <button onClick={props.handleSort} className='sortB'>Sort by Difficulty</button>
        </div>
    )
}