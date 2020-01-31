import React from 'react'
import { render } from 'react-dom'

class ES6Demo extends React.Component {
    constructor() {
        super()

        this.state = {
            color: 'red'
        }


    }
    render() {

        return (
            <div>

            </div>
        )

    }
    componentDidMount() {
        arrayobjects()
        scopedemo();

    }



}


const scopedemo = () => {
    //where to lookfor things
    // who is looking for things
    //javascript has function scope
    //if a variable is not declared ans assigned a value , it will be globally declared. use strict mode to avoid this
}


const arrayobjects = () => {
    let box = {}
    box["Material"] = "Cardboard";
    box["Size"] = 7
    box.weight = "light"
    box["key"] = "key"
    console.log(box)


    for (let key in box) {
        console.log(key + " is " + box[key])
    }
}


export default ES6Demo



