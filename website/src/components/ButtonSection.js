import React from 'react'
import buttonColors from '../data/button-colors.json'
import Button from './Button'

function ButtonSection ({title, text, classes, htmlContent = "", usesColors = true, usesText = true}) {
    classes = "sbtn " + classes

    return (
        <section className="border-2 border-gray-100 dark:border-gray-600 mb-4 pt-3 px-3 rounded">
            <h4 className="text-2xl mb-5 text-center">{title}</h4>
            <div className="flex flex-row flex-wrap justify-center">
                {usesColors && buttonColors.map((color, index) => {
                    const buttonClasses = `${classes} ${color}`
                    return <Button classes={buttonClasses} text={usesText ? text : ''} key={index} htmlContent={htmlContent} />
                    })}
                {!usesColors && <Button classes={classes} text={usesText ? text : ''} htmlContent={htmlContent} />}
            </div>
        </section>
    )
}

export default ButtonSection