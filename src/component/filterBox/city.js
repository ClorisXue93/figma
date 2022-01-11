

export default function city(props) {
    let str = String(props.city);
    var myArray = str.split(',');
    var newArray = [...new Set(myArray)]

    let optionItems =  
          newArray.map(item => <option>{item}
        </option>);
    
    return (
        <div  class="inbox">
            <select name="city" id="city" className="city">
                {optionItems}
            </select>
        </div>
    )
}


