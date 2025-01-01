import { useState } from "react"

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState("hex")
    const [color, setColor] = useState('#000000')

    function randomColorUtility(n:number) {
        return Math.floor(Math.random()*n)
    }

    function handleCreateRandomHexColor() {
        setTypeOfColor("hex")
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

        let hexColor = "#"
        for(let i=0; i<6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }

    function handleCreateRandomRGBColor() {
        setTypeOfColor("rgb")
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }

    function handleRandomColor() {
        if (randomColorUtility(2) === 0) {
            handleCreateRandomHexColor()
        }
        else {
            handleCreateRandomRGBColor()
        }
    }

    return (
        <div className="container" 
            style={{
                width: "100vh",
                height: "100vh",
                background: color,
            }}>
            <button onClick={handleCreateRandomHexColor}>Create HEX color</button>
            <button onClick={handleCreateRandomRGBColor}>Create RGB color</button>
            <button onClick={handleRandomColor}>Create Random color</button>
            <div
                style={{
                    display:"flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    marginTop: "50px",
                    flexDirection: "column"
                }}>
                    <h3>{typeOfColor==="rgb"? 'RGB Color ': 'HEX Color '}</h3>
                    <h1>{color}</h1>
            </div>
        </div>
    )
}

export default RandomColor