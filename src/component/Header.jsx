import {Input} from './Input';
import {Select} from './Select';
import {Button} from './Button';

export function Header(props) {

    return ( 
     
        <div className = "header">
            <Input className = "header__input"  searchByName = {props.searchByName} value = {props.inputValue}/>
            <Select className = "header__select" users = {props.users} searchByAge = {props.searchByAge}/>
            <Button className = "header__btn" reset = {props.reset}>reset</Button>
        </div> 

    ) 
 }