export default function state(props) {
    let str = String(props.state);
    var myArray = str.split(',');
    var newArray = [...new Set(myArray)]

    let optionItems =  
          newArray.map(item => <option>{item}
        </option>);
    
    return (
        <div  class="inbox">
            <select name="state" id="state" className="state">
                {optionItems}
            </select>
        </div>
    )
}