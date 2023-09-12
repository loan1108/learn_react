import React,{useState} from 'react'

export default function Car() {
    const cars = ["Mercedes S600", "Kia 10", "Ford"];
    const colors= ["red", "black", "yellow"];
    const [selected, setSelected] = useState({car:cars[0], color: colors[0]});
    function selectCar(e){
        const selectedCar =e.target.value;
        console.log(selectedCar)
        
        setSelected({...selected, car:selectedCar})
    }
    function selectColor(e){
        let selectedColor = e.target.value;
        console.log(selectedColor)
        setSelected({...selected, color:selectedColor})
    }
  return (
    <div>
        <label>
            Select a car
            <select style={{width:"20%"}} id="car" onChange={selectCar}>
                {cars.map((car)=>
                    <option value={car}>{car}</option>
                )}
                
            </select>
        </label>
        <br/>
        <label>
            Select a color
            <select style={{width:"20%"}} id="color" onChange={selectColor}>
                {colors.map((color)=>
                <option value={color}>{color}</option>
                )}
                
            </select>
        </label>
        <p id="selected">You selected a {selected.color}- {selected.car}</p>
    </div>
  )
}
