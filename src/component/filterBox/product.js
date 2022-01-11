export default function product(props) {
    let str = String(props.product_name);
    var myArray = str.split(',');
    var newArray = [...new Set(myArray)];

    let optionItems =  
          newArray.map(item => <option>{item}
        </option>);
    
    return (
        <div  class="inbox">
            <select name="product" id="product" className="inbox">
                {optionItems}
            </select>
        </div>
    )
}
