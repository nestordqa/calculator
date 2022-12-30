import { NextComponentType } from 'next';
import { useState } from 'react';
import { theme, operation } from '../app/types';
import dark from '../styles/DarkCalculator.module.css'; 
import light from '../styles/LightCalculator.module.css';
import cyan from '../styles/CyanCalculator.module.css';
import operations from '../logic/operation';
import Footer from './Footer';

const Calculator : NextComponentType = () => {
    const [theme, setTheme] = useState<theme>({
        dark: true,
        light: false,
        cyan: false
    });
    
    const handleClickTheme = () =>{
        if(theme.dark == true){
            setTheme({
                dark: false,
                light: true,
                cyan: false
            });
        };
        if(theme.light == true){
            setTheme({
                dark: false,
                light: false,
                cyan: true
            });
        };
        if(theme.cyan == true){
            setTheme({
                dark: true,
                light: false,
                cyan: false
            });
        };
    };

    const [contador, setContador] = useState<operation>({
        total: null,
        siguiente: null,
        operador: null
    });

    const onClickOp = (e:any) =>{
        setContador(operations(contador, e.target.value))
    };

    return(
        <>
            <div className={theme.dark ? dark.container : theme.light ? light.container : cyan.container}>
                <div className={theme.dark ? dark.calculator : theme.light ? light.calculator : cyan.calculator}>
                    <div className={theme.dark ? dark.toogle : theme.light ? light.toogle : cyan.toogle}>
                        <div className={theme.dark ? dark.titleToogle : theme.light ? light.titleToogle : cyan.titleToogle}>
                            calc
                        </div>
                        <div className={theme.dark ? dark.toogleContainer : theme.light ? light.toogleContainer : cyan.toogleContainer}>
                            <button className={theme.dark ? dark.buttonToogle : theme.light ? light.buttonToogle : cyan.buttonToogle} onClick={()=>handleClickTheme()}>
                                Change Theme
                            </button>
                        </div>
                    </div>
                    <div className={theme.dark ? dark.screen : theme.light ? light.screen : cyan.screen}>
                        <div>
                            {contador.total == undefined || null ? 
                                "0"
                                :
                                contador.total
                                
                            }   
                        </div>
                    </div>
                    <div className={theme.dark ? dark.buttons : theme.light ? light.buttons : cyan.buttons}>
                        <div className={theme.dark ? dark.buttonsContainer : theme.light ? light.buttonsContainer : cyan.buttonsContainer}>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="7" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="8" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="9" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonDelContainer : theme.light ? light.buttonDelContainer : cyan.buttonDelContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='DEL' className={theme.dark ? dark.buttonDel : theme.light ? light.buttonDel : cyan.buttonDel}/>
                            </div>
                        </div>

                        <div className={theme.dark ? dark.buttonsContainer : theme.light ? light.buttonsContainer : cyan.buttonsContainer}>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="4" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="5" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="6" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='+' className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                        </div>

                        <div className={theme.dark ? dark.buttonsContainer : theme.light ? light.buttonsContainer : cyan.buttonsContainer}>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="1" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="2" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="3" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='-' className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                        </div>

                        <div className={theme.dark ? dark.buttonsContainer : theme.light ? light.buttonsContainer : cyan.buttonsContainer}>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='.' className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value="0" className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='/' className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                            <div className={theme.dark ? dark.buttonContainer : theme.light ? light.buttonContainer : cyan.buttonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='*' className={theme.dark ? dark.button : theme.light ? light.button : cyan.button}/>
                            </div>
                        </div>
                        <div className={theme.dark ? dark.buttonsContainer : theme.light ? light.buttonsContainer : cyan.buttonsContainer}>
                            <div className={theme.dark ? dark.resetButton : theme.light ? light.resetButton : cyan.resetButton}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='RESET' className={theme.dark ? dark.redButton : theme.light ? light.redButton : cyan.redButtonn}/>
                            </div>
                            <div className={theme.dark ? dark.redButtonContainer : theme.light ? light.redButtonContainer : cyan.redButtonContainer}>
                                <input onClick={(e)=>onClickOp(e)} type='button' value='=' className={theme.dark ? dark.redButton : theme.light ? light.redButton : cyan.redButton}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={theme.dark ? dark.footer : theme.light ? light.footer : cyan.footer}>
                    <Footer/>
                </div>
            </div>
        </>
    );
};

export default Calculator;

