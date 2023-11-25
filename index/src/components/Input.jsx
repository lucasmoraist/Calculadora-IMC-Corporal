import React from "react";

const Input = ({ value, setValue }) => {
    return <div>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
}

export { Input }