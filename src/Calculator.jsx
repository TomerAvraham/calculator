import React, { Component } from 'react'
import Button from './Button'
import Display from './Display'
import './calculator.css'

export default class Calculator extends Component {
    state = {
        displayInput: [],
        sumInput: []
    }

    handelButtonValueDisplay = (value) => {
        let displayInput__array = [...this.state.displayInput, value]
        this.setState({
            displayInput: displayInput__array
        })
    }

    handelC_Button = () => {
        this.setState({
            displayInput: [],
            sumInput: []
        })
    }

    mathExpression = () => {
        this.setState({
            sumInput: eval(this.state.displayInput.join(""))
        })
    }
    render() {
        return (
            <div className="main-calculator">
            <div>
                <Display displayInput={this.state.displayInput} sumInput={this.state.sumInput} />
            </div>
            <div className="calculator">
                <div className="row-one row" >
                    <Button handelDisplay={this.handelButtonValueDisplay} key={0} value='7'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={1} value='8'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={2} value='9'/> 
                </div>
                <div className="row-two row" >
                    <Button handelDisplay={this.handelButtonValueDisplay} key={3} value='4'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={4} value='5'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={5} value='6'/> 
                </div>
                <div className="row-three row">
                    <Button handelDisplay={this.handelButtonValueDisplay} key={6} value='1'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={7} value='2'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={8} value='3'/> 
                </div>
                <div className="row-four row" >
                    <Button handelDisplay={this.handelButtonValueDisplay} key={9} value='.'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={10} value='0'/> 
                    <Button mathExpression={this.mathExpression} key={11} value='='/> 
                </div>
                <div className="right-nav" >
                    <Button handelButtonC={this.handelC_Button} key={12}  value='C'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={13} value='/'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={14} value='*'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={15} value='-'/> 
                    <Button handelDisplay={this.handelButtonValueDisplay} key={16} value='+'/> 
                </div>
            </div>
            </div>
        )
    }
}
