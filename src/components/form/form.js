import useForm from '../../hooks/form.js';
import {SettingsContext} from '../../context/settings.js';
import {useContext,useState} from 'react';
import { Switch } from "@blueprintjs/core";
import { AuthContext } from '../../context/Auth.js';
import { When } from 'react-if';

export default function Form(props){
    const { handleChange, handleSubmit } = useForm(props.addItem);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const setting = useContext(SettingsContext);
    const auth = useContext(AuthContext)
    const handleClick = () => {
        setting.setDisplaySettings(!setting.displaySettings);
        console.log(setting.displaySettings);
    }
    const handleNChange = (e) => {
      setting.setNumberItems(parseInt(e.target.value));
    }
    const storageHandler = (e) => {
      localStorage.setItem('settings', JSON.stringify(setting));

    }
    const handleSignUp = (e) => {
      e.preventDefault();
      auth.signUp(userName, password);
    }
    const handleLogIn = (e) => {
      e.preventDefault();
      auth.signIn(userName, password);
    }
    return(
        <div>
          <When condition={auth.isLoggedIn}>

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
        <button onClick={props.handleSort} className='sortB'>Sort by Assignee</button>
        <input onChange={handleNChange} placeholder={`Items/Page ${setting.numberItems}`} type="number" min={1}/>
        <button onClick={storageHandler} className='sortB'>Save Settings</button>
        </When>
        <When condition={!auth.isLoggedIn}>
          <form onSubmit={handleSignUp}>
          <input onChange={e=>{
            setUserName(e.target.value);
          }} name="username" type="text" placeholder="Username" />
          <input onChange={e=>{
            setPassword(e.target.value);
          }} name="password" type="password" placeholder="Password" />
          <button type="submit">Create Account</button>
          </form>
          <form onSubmit={handleLogIn}>
          <input onChange={e=>{
            setUserName(e.target.value);
          }} name="username" type="text" placeholder="Username" />
          <input onChange={e=>{
            setPassword(e.target.value);
          }} name="password" type="password" placeholder="Password" />
          <button type="submit">Login</button>
          </form>
        </When>
        </div>
    )
}