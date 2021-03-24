import React from 'react'
import Footer from '../../components/Footer'
import Common from '../Common'
import Code from '../../components/Code'
import SectionHeader from '../../components/SectionHeader'
import SubsectionHeader from '../../components/SubsectionHeader'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import SidebarLink from '../../components/SidebarLink'

function Documentation () {
    return (
        <div className="documentation">
            <Common activePage="documentation" pageTitle="Documentation" showMenuButton={true}>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />
            </Common>
            <div className="flex mt-5">
                <Sidebar>
                    <SidebarLink to="#download" text="Download" />
                    <SidebarLink to="#cdn" text="CDN" />
                    <SidebarLink to="#npm" text="NPM" />
                    <SidebarLink to="#npm-using-in-css" text="Using in CSS" level={1} />
                    <SidebarLink to="#npm-using-in-less" text="Using in Less" level={1} />
                    <SidebarLink to="#less-modify-colors" text="Modify Colors" level={1} />
                    <SidebarLink to="#usage" text="Usage" />
                    <SidebarLink to="#basic-button" text="Basic Button" level={1} />
                    <SidebarLink to="#block-buttons" text="Block Buttons" level={1} />
                    <SidebarLink to="#disabled-buttons" text="Disabled Buttons" level={1} />
                    <SidebarLink to="#icon-buttons" text="Icon Buttons" level={1} />
                    <SidebarLink to="#only-icon" text="Only Icon" level={4} />
                    <SidebarLink to="#icon-left" text="Icon Left" level={4} />
                    <SidebarLink to="#icon-right" text="Icon Right" level={4} />
                    <SidebarLink to="#toggle-buttons" text="Toggle Button" level={1} />
                    <SidebarLink to="#toggle-button-checkbox" text="Toggle Button as Checkboxes" level={4} />
                    <SidebarLink to="#toggle-button-radio" text="Toggle Button as Radio Buttons" level={4} />
                    <SidebarLink to="#dark-mode" text="Dark Mode" level={1} />
                    <SidebarLink to="#dark-mode-class" text="Using dark-mode Class" level={4} />
                    <SidebarLink to="#dark-mode-attribute" text="Using data-theme attribute" level={4} />
                </Sidebar>
                <div className="container content lg:pr-20 md:w-8/12 pl-3">
                    <h2 className="text-4xl mb-7">Get Started with sButtons</h2>
                    <section id="download" className="lg:w-10/12 md:w-11/12">
                        <SectionHeader title="Download CSS File" to="cdn" />
                        <div className="pl-8 text-lg">
                            <p className="mb-3">
                                You can download the CSS file here and then add it to your html file in between the tags.<br />
                                Download the file and link it as a stylesheet in between your <code>{"<head>"}</code> tags, as shown below.
                            </p>
                            <Code code={`<link rel="stylesheet" href="/path/to/sbuttons.min.css">`} language="html" />
                            <p className="mt-3">Make sure to replace <code>"/path/to/sbuttons.min.css"</code> with the path you stored it in.</p>
                        </div>
                    </section>
                    <section id="cdn" className="mt-8 lg:w-10/12 md:w-11/12">
                        <SectionHeader title="CDN" to="cdn" />
                        <div className="pl-8 text-lg">
                            <p className="mb-3">
                                Or instead of downloading the file, you can use the CDN
                            </p>
                            <Code code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sbuttons/dist/sbuttons.min.css">`} language="html" />
                            <p className="mt-3 mb-3">
                                In case of using buttons that have icons in them, make sure to include font awesome's 
                                CDN in the <code>{`<head>`}</code> tag.
                            </p>
                            <Code code={`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">`} 
                                language="html" />
                        </div>
                    </section>
                    <section id="npm" className="mt-8 lg:w-10/12 md:w-11/12">
                        <SectionHeader title="NPM" to="npm" />
                        <div className="pl-8 text-lg">
                            <p className="mb-3">
                                You can install sButtons using NPM:
                            </p>
                            <Code code={`npm i sbuttons`} language="shell" />
                        </div>
                        
                        <section id="npm-using-in-css" className="mt-7">
                            <SubsectionHeader title="Using in CSS" to="npm-using-in-css" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    You can import the CSS file found in <code>dist/sbuttons.css</code> or <code>dist/sbuttons.min.css</code>:
                                </p>
                                <Code code={`@import url('~sbuttons/dist/sbuttons.min.css');`} language="css" />
                            </div>
                        </section>
                        
                        <section id="npm-using-in-less" className="mt-7">
                            <SubsectionHeader title="Using in Less" to="npm-using-in-less" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    You can also import the LESS file found in <code>src/sbuttons.less</code>:
                                </p>
                                <Code code={`@import '~sbuttons/src/sbuttons.less';`} language="less" />
                            </div>
                        
                            <section id="less-modify-colors" className="mt-7">
                                <SubsectionHeader title="Modify Colors" to="less-modify-colors" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        To modify button colors, import <code>src/_variables.less</code> in your Less file, 
                                        then make changes to the variables after the import.<br/>
                                        For example, to change the blue color to a different shade:
                                    </p>
                                    <Code code={`@import '/path/to/_variables.less';\n@blue: #54a2bd; /* Make it darker */`} 
                                        language="less" />
                                    <p className="mt-3">
                                        Check out <a href="https://github.com/sButtons/sbuttons/blob/master/src/_variables.less" className="underline-red">_variables.less</a> for the full list of variables.
                                    </p>
                                </div>
                            </section>
                        </section>
                    </section>
                    <section id="usage" className="mt-8 lg:w-10/12 md:w-11/12">
                        <SectionHeader title="Usage" to="usage" />
                        
                        <section id="basic-button" className="mt-7">
                            <SubsectionHeader title="Basic Button" to="basic-button" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    To use sButtons in your project, just add the classes of sButton you want to either <code>{`<button>`}</code> or <code>{`<a>`}</code> tags.<br />
                                    For example:
                                </p>
                                <Code code={`<button class="sbtn basic-btn blue-btn">Button</button>`} language="html" />
                                <p className="mt-3">
                                    Gives us this button: <br />
                                    <button className="sbtn basic-btn blue-btn mt-3">Button</button>
                                </p>
                                <p className="mt-3">
                                    You can find all classes mentioned in our <Link to="/examples" className="underline-red">Examples</Link> page.
                                </p>
                            </div>
                        </section>
                        
                        <section id="block-buttons" className="mt-7">
                            <SubsectionHeader title="Block Buttons" to="block-buttons" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    To use sButtons with block display, add the class to either <code>{`<button>`}</code> or <code>{`<a>`}</code>.<br />
                                    For example:
                                </p>
                                <Code code={`<button class="sbtn basic-btn blue-btn block-btn">Button</button>`} language="html" />
                                <p className="mt-3">
                                    Gives us this button: <br />
                                    <button className="sbtn basic-btn blue-btn block-btn">Button</button>
                                </p>
                            </div>
                        </section>
                        
                        <section id="disabled-buttons" className="mt-7">
                            <SubsectionHeader title="Disabled Buttons" to="disabled-buttons" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    To make a <code>{`<button>`}</code> or <code>{`<a>`}</code> tag disabled, add disabled-btn class as shown below.<br />
                                    For example:
                                </p>
                                <Code code={`<button class="sbtn basic-btn blue-btn disabled-btn">Button</button>`} language="html" />
                                <p className="mt-3">
                                    Gives us this button: <br />
                                    <button className="sbtn basic-btn blue-btn disabled-btn">Button</button>
                                </p>
                            </div>
                        </section>
                        
                        <section id="icon-buttons" className="mt-7">
                            <SubsectionHeader title="Icon Buttons" to="icon-buttons" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                The <code>base-icon-btn</code> class enables you to have a normal, customizable icon button. Using it, 
                                you decide to add any fontawesome icon in it. You can choose to either place it on the left or right 
                                side of the button with the available classes.
                                </p>
                            </div>

                            <section id="only-icon" className="mt-7">
                                <SubsectionHeader title="Only Icon" to="only-icon" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        The <code>icon-btn</code> class alone gives you a default button with no background color
                                        and border.<br />
                                        For example:
                                    </p>
                                    <Code code={`<button class="sbtn icon-btn"><i class="fas fa-book"></i></button>`} language="html" />
                                    <p className="mt-3">
                                        Gives us this button: <br />
                                        <button className="sbtn icon-btn"><i className="fas fa-book"></i></button>
                                    </p>
                                </div>
                            </section>
                            <section id="icon-left" className="mt-7">
                                <SubsectionHeader title="Icon Positioned to The Left" to="icon-left" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        Adding the <code>icon-left</code> class to a button makes the icon positioned to the left.<br />
                                        For example:
                                    </p>
                                    <Code code={`<button class="sbtn base-icon-btn icon-left orange-btn"><i class="fas fa-book"></i>Read</button>`} language="html" />
                                    <p className="mt-3">
                                        Gives us this button: <br />
                                        <button className="sbtn base-icon-btn icon-left orange-btn"><i className="fas fa-book"></i>Read</button>
                                    </p>
                                </div>
                            </section>
                            <section id="icon-right" className="mt-7">
                                <SubsectionHeader title="Icon Positioned to The Right" to="icon-right" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        Adding the <code>icon-right</code> class to a button makes the icon positioned to the right.<br />
                                        For example:
                                    </p>
                                    <Code code={`<button class="sbtn base-icon-btn icon-right orange-btn">Read<i class="fas fa-book"></i></button>`} language="html" />
                                    <p className="mt-3">
                                        Gives us this button: <br />
                                        <button className="sbtn base-icon-btn icon-right orange-btn">Read<i className="fas fa-book"></i></button>
                                    </p>
                                </div>
                            </section>
                        </section>
                    
                        <section id="toggle-buttons" className="mt-7">
                            <SubsectionHeader title="Toggle Button" to="toggle-buttons" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    The <code>toggle-btn</code> class along with the <code>toggle-off-btn</code> / <code>toggle-on-btn</code> state 
                                    class enables you to have a toggle button. Apart from the basic use, it can also be used for checkboxes 
                                    and radio buttons. While not necessary, you can use the available state classes to choose whether 
                                    your checkboxes and radio buttons are checked or not.
                                </p>
                            </div>

                            <section id="toggle-button-checkbox" className="mt-7">
                                <SubsectionHeader title="Toggle Button as Checkboxes" to="toggle-button-checkbox" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        Adding the <code>toggle-btn</code> class to your checkbox inputs converts them to toggle buttons.<br />
                                        For example:
                                    </p>
                                    <Code code={`<input type="checkbox" class="sbtn toggle-btn"/>`} language="html" />
                                    <p className="mt-3">
                                        Gives us this checkbox as a toggle button: <br />
                                        <input type="checkbox" className="sbtn toggle-btn"/>
                                    </p>
                                </div>
                            </section>

                            <section id="toggle-button-radio" className="mt-7">
                                <SubsectionHeader title="Toggle Button as Radio Buttons" to="toggle-button-radio" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        Adding the <code>toggle-btn</code> class to your radio inputs converts them to toggle buttons.<br />
                                        For example:
                                    </p>
                                    <p className="mt-3 mb-3">
                                        Select favourite car brand :
                                        <label className="block mb-3">
                                            <input type="radio" name="car" className="sbtn toggle-btn align-middle mr-3"/>
                                            Tesla
                                        </label>
                                        <label className="block mb-3">
                                            <input type="radio" name="car" className="sbtn toggle-btn align-middle mr-3"/>
                                            Budgati
                                        </label>
                                        <label className="block">
                                            <input type="radio" name="car" className="sbtn toggle-btn align-middle mr-3"/>
                                            Ferrari
                                        </label>
                                    </p>
                                    <Code code={`<input type="radio" class="sbtn toggle-btn"/>`} language="html" />
                                </div>
                            </section>
                        </section>                    
                    
                        <section id="dark-mode" className="mt-7">
                            <SubsectionHeader title="Dark Mode" to="dark-mode" />
                            <div className="pl-8 text-lg">
                                <p className="mb-3">
                                    sButtons is compatible with dark mode. It either works by adding <code>dark-mode</code> class to buttons,
                                    or by adding <code>data-theme="dark"</code> to a container element.
                                </p>
                            </div>
                        
                            <section id="dark-mode-class" className="mt-7">
                                <SubsectionHeader title="Using dark-mode Class" to="dark-mode-class" />
                                <div className="pl-8 text-lg">
                                    <Code code={`<button class="sbtn dashed-btn black-btn dark-mode">Dark-Mode</button>`} language="html" />
                                    <p className="mt-3">
                                        Gives us this button (to see it in action toggle dark mode in the header of this website.): <br />
                                        <button className="sbtn dashed-btn black-btn dark-mode mt-3">Dark-Mode</button>
                                    </p>
                                </div>
                            </section>
                        
                            <section id="dark-mode-attribute" className="mt-7">
                                <SubsectionHeader title="Using data-theme attribute" to="dark-mode-attribute" />
                                <div className="pl-8 text-lg">
                                    <p className="mb-3">
                                        By adding <code>data-theme="dark"</code> to a parent element like the <code>body</code> or 
                                        a <code>div</code> element, the button will automatically be in dark mode.
                                    </p>
                                    <Code code={`<div data-theme="dark"><button class="sbtn dashed-btn black-btn">Dark-Mode</button></div>`} language="html" />
                                    <p className="mt-3">
                                        Gives us this button:
                                    </p>
                                    <p data-theme="dark" className="mt-3 bg-gray-800 p-2"><button className="sbtn dashed-btn black-btn">Dark-Mode</button></p>
                                    <p className="mt-3">
                                        <b>Note:</b> <code>data-theme="dark"</code> attribute does not give dark mode styling to the container element, you have to do that yourself.
                                        It only toggles sButtons to be in dark mode.
                                    </p>
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Documentation