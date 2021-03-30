import React, { useEffect, useState } from 'react' 
import Footer from '../../components/Footer'
import Common from '../Common'
import Sidebar from '../../components/Sidebar'
import SidebarLink from '../../components/SidebarLink'
import buttons from '../../data/buttons.json'
import ButtonExample from '../../components/ButtonExample'

function Examples () {
    const [currentButton, setCurrentButton] = useState(null)

    useEffect(() => {
        //todo set currentbutton intial value
        if (window.location.hash) {
            setCurrentButton(window.location.hash)
        } else {
            if (buttons.length) {
                //set the first button as current button
                if (buttons[0].children.length) {
                    setCurrentButton('#' + buttons[0].children[0].type)
                } else {
                    setCurrentButton('#' + buttons[0].type)
                }
            }
        }
    }, [])

    let button = null
    if (currentButton) {
        const type = currentButton.replace("#", "")
        buttons.some((buttonType) => {
            if (buttonType.type === type) {
                button = {
                    button: {
                        title: buttonType.label,
                        classes: buttonType.classes,
                        variations: buttonType.variations ? buttonType.variations : [],
                        html: buttonType.html !== undefined ? buttonType.html : "",
                        text: buttonType.text !== undefined ? buttonType.text : ""
                    },
                    type: {
                        name: buttonType.label,
                        shouldHaveRoundedType: buttonType.shouldHaveRoundedType !== undefined ? buttonType.shouldHaveRoundedType : true,
                        shouldHaveBlockType: buttonType.shouldHaveBlockType !== undefined ? buttonType.shouldHaveBlockType : true,
                        usesColors: buttonType.usesColors
                    }
                }
                return true
            } else {
                return buttonType.children.some((buttonChild) => {
                    if (buttonChild.type === type) {
                        button = {
                            button: {
                                title: buttonChild.label,
                                classes: buttonType.classes + " " + buttonChild.classes,
                                variations: buttonChild.variations ? buttonChild.variations : [],
                                html: buttonType.html !== undefined ? buttonType.html : "",
                                text: buttonChild.text !== undefined ? buttonChild.text : ""
                            },
                            type: {
                                name: buttonType.label,
                                shouldHaveRoundedType: buttonChild.shouldHaveRoundedType !== undefined ? buttonChild.shouldHaveRoundedType : true,
                                shouldHaveBlockType: buttonChild.shouldHaveBlockType !== undefined ? buttonChild.shouldHaveBlockType : true,
                                usesColors: buttonChild.usesColors,
                                usesText: buttonChild.usesText
                            }
                        }
                        return true
                    }
                    return false
                })
            }
        })
    }

    const hasVariations = button && button.button.variations && button.button.variations.length >= 1

    return (
        <div className="examples">
            <Common activePage="examples" pageTitle={`${button && button.button.title ? button.button.title + ' - ' : ''}Examples`} showMenuButton={true}>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />
            </Common>
            <div className="flex mt-5">
                <Sidebar>
                    {buttons.map((buttonType, index) => {
                        if (!buttonType.children.length) {
                            return <SidebarLink to={`#${buttonType.type}`} text={buttonType.label} 
                                key={`${buttonType.type}_${index}`} clickCallback={setCurrentButton}
                                current={currentButton} />
                        } else {
                            return (
                                <div key={`${buttonType.type}_${index}`}>
                                    <SidebarLink text={buttonType.label} 
                                        key={`${buttonType.type}_${index}`} />
                                    {buttonType.children.map((button, buttonIndex) => (
                                        <SidebarLink to={`#${button.type}`} text={button.label} level={1} 
                                            key={`${index}_${buttonIndex}`} clickCallback={setCurrentButton}
                                            current={currentButton} />
                                    ))}
                                </div>
                            )
                        }
                    })}
                </Sidebar>
                <div className="container content lg:pr-20 md:w-8/12 pl-3">
                    <h1 className="text-4xl md:text-left text-center">{button && button.button.title}</h1>
                    <span className="mb-7 text-sm block md:text-left text-center">Type: {button && button.type.name}</span>
                    {hasVariations && button.button.variations.map((variation, index) => (
                        <ButtonExample button={
                                {classes: `${button.button.classes} ${variation.classes}`, htmlContent: variation.html, 
                                label: variation.label, text: variation.text}}
                            type={button.type} key={index} />
                    ))}
                    {(button && !hasVariations) && 
                        <ButtonExample button={button.button} type={button.type} htmlContent={button.html} />}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Examples