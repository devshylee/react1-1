import { useState } from "react"

const scaleName = {
    C : '섭씨',
    F : '화씨'
}

export default function TemperatureInput(props) {
    const [temperature, setTemperature] = useState('')
    const handleChange = (e) => {
        setTemperature(e.target.value)
    }

    return(
        <fieldset>
        <legend>섭씨 온도를 입력하세요(단위 : {scaleName[props.scale]})</legend>
        <input value={temperature} onChange={handleChange}/>
        </fieldset>
    )
    
    function toCelsius(fahrenheit){
        return(
            (fahrenheit - 32) * 5/9
        )
    }
    function toFahrenheit(Celsius){
        return(
            (Celsius * 5/9) + 32
        )
    }

    function tryConvert(temperature, convert){
        const input = parseFloat(temperature)
        if(Number.isNaN(input)){
            return ('')
        }
        const output = convert(input)
        const rouded = Math.round(output * 1000) / 1000
        return (
            rouded.toString()
        )
    }

}