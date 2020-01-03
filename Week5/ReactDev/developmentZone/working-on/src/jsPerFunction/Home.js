//Home.js
import React from 'react'
// import './home.css'
// import Paragraph from './Paragraph' this was just for paragraph testing. 
import Checkboxes from './Checkboxes' 
function Home() {

    //sp is for the span element in the Checkboxes function. 
    return (
        <div> 
        {/* <Checkboxes /> //uncomment after testing Home// no need to uncomment in the end */}
        <Checkboxes 
        className= 'firstCheckbox'
        sp1 = "placeholderhere"/>
        <Checkboxes 
        className= 'secondCheckbox'
        sp1 = "Placeholder for checkbox2"/>
         <Checkboxes 
        className= 'thirdCheckbox'
        sp1 = "placeholder3"/>
         <Checkboxes 
        className= 'fourthCheckbox'
        sp1 = "placeholder4"/>
            {/* <Paragraph 
                className='firstP'
                p1='hello world'
                p2='and some other text'
                p3='hey look its right there' />
            <Paragraph
                className='secondP'
                p1='hello world2'
                p2='and some other text2'
                p3='hey look its right there 2' />
            <Paragraph
                className='thirdP'
                p1='hello world 3'
                p2='and some other text 3'
                p3='hey look its right there 3' /> */}
            
            {/* This was part of the class testing.. 
             <div id='boxdiv1'>
                <div className='box1'>this is some box of something</div>
                <div className='box2'>another box</div>
                <div className='box3'>another box again</div>
            </div>
            <div id='boxdiv2'>
                <div>this is some box of something2</div>
                <div>another box2</div>
                <div>another box again2</div>
            </div>
            <div id='boxdiv3'>
                <div>this is some box of something3</div>
                <div>another box3</div>
                <div>another box again3</div>
            </div> */}
        </div>
    )
}
export default Home