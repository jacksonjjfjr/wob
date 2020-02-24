import React from 'react'

export default function ItemRow(props) {
    return (
        <div>
            <span>Item {props.index}</span>
            <select className="custom-select">
                <option>kg</option>
                <option>g</option>
            </select>
            <input type="number" placeholder="value" />
      </div>
    )
}
