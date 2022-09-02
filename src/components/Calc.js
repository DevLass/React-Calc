import React from "react";
import './Calc.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { useState } from "react";

function Calculator() {

    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();
    let i = 0;

    function inputNum(e){
        let input = e.target.value;
        if (num == 0){
            setNum(input)
        }else{
            setNum(num+ input)
        }
    }

    function clear(){
        setNum(0)
    }

    function percentage(){
        setNum(num / 100);
    }

    function changeSigns(){
        if (num >0){
            setNum(-num)
        }else{
            setNum(Math.abs(num))
        }
    }

    function Calc(e){
        var n1 = e.target.value
        setNum(num + n1) 
    }

    function test(){
        var t1 = (eval(num))
        setNum(t1)

    }



    return (
        <>
            <Box m={3}/>
            <Container maxWidth="xs">
                <div className="wrapper">
                    <Box m={3}/>
                    <h1 className="result">{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSigns}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button onClick={Calc} value={"/"}>/</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button onClick={Calc} value={"*"}>X</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button onClick={Calc} value={"-"}>-</button>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={"."}>.</button>
                    <button onClick={Calc} value={"+"}>+</button>
                    <button onClick={test}>=</button>
                </div>

            </Container>
        </>
  );
}

export default Calculator;
