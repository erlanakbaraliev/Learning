import data from './data'
import { useState } from 'react'
import './styles.css'

function Accordian() {
    const [selected, setSelected] = useState(-1)
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState<number[]>([])

    function handleSingleSelection(getCurrentId: number) {
        setSelected(getCurrentId === selected? -1: getCurrentId)
    }
    function handleMultiSelection(getCurrentId: number) {
        let copyMultiple = [...multiple];
        const indexGetCurrentId = copyMultiple.indexOf(getCurrentId)
        if(getCurrentId === selected && indexGetCurrentId === -1) {
            setSelected(-1)
        }
        else if(selected > -1 && copyMultiple.indexOf(selected) === -1 && indexGetCurrentId === -1) {
            copyMultiple.push(selected)
            copyMultiple.push(getCurrentId)
        }
        else if (indexGetCurrentId === -1) {
            copyMultiple.push(getCurrentId);

        } 
        else {
            copyMultiple.splice(indexGetCurrentId, 1);
            setSelected(-1);
        }
        
        setMultiple(copyMultiple)

        console.log(copyMultiple)
    }

    return (
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
                Enable Multi Selection
            </button>
            <div className='accordian'>
                {data && data.length > 0? (
                    data.map(dataItem => (
                        <div className='item' key={dataItem.id}>
                            <div className="title" onClick={()=>enableMultiSelection? handleMultiSelection(dataItem.id): handleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1? (
                                <div className='content'>
                                    {dataItem.answer}
                                </div>
                            ): null}
                        </div>
                    ))
                ): (
                    "Data doesn't exist"
                )}
            </div>
        </div>
    )
}

export default Accordian