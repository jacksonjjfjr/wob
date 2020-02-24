import React from 'react'

export default function Form() {
  return (
    <div>
      <form>
        <div class="row">
          <div class="col">
            <select className="custom-select">
                <option>kg</option>
                <option>g</option>
            </select>
          </div>
          <div class="col">
            <input type="number" class="form-control" placeholder="Enter value..." />
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col">
            <select className="custom-select">
                <option>kg</option>
                <option>g</option>
            </select>
          </div>
          <div class="col">
            <input type="number" class="form-control" placeholder="Enter value..." />
          </div>
        </div>
        <br />
        <button type="button" class="btn btn-primary">COMPARE</button>
      </form>
    </div>
  )
}
