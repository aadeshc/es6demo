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



    }
}


const scopedemo = (() => {

    //where to lookfor things
    // who is looking for things
    //javascript has function scope
    //if a variable is not declared ans assigned a value , it will be globally declared. use strict mode to avoid this
    //eval helps to use function from string eval('2+2'),always avoid it. use window.Function instead
    //with keyword extends the existing scope. avoid. 


    //IIFE pattern - Immediately Invoked Function Expression
    /*
             var foo="foo" ;
                     (function(){
                          var foo = "foo2"
                          console.log(foo)
                        }
                      )()
             console.log(foo)

             this will print foo and foo2 as added () will force function to be called immediately
     /

     //let attaches block scope to block where its declared  while var attaches it to function scope
     //in compile phase variable declaration are moved to top , that is called hositing










    */

})();


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



