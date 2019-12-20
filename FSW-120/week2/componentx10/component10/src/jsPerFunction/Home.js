//Home.js
import React from 'react'
// import Paragraph from './Paragraph' 
import UList from './List'
// import api from './apiToJs' 
import tenBooks from './makingObjects/tenBooks'
import './../App.css'
import backgroundObject from './makingObjects/backgroundStyle'
function Home() {
    return (
        <div> 
        <UList className= "Wrapper1"
        BackgroundColor = {backgroundObject.li1}
        li1 = {tenBooks.li1.Title}
        li2= {tenBooks.li1.Subtitle}
        li3 = {tenBooks.li1.Information}
        />
        <UList className= "Wrapper2"
        BackgroundColor = {backgroundObject.li2}
        li1 = {tenBooks.li2.Title}
        li2= {tenBooks.li2.Subtitle}
        li3 = {tenBooks.li2.Information}
        />
        <UList className= "Wrapper3"
        BackgroundColor = {backgroundObject.li3}
        li1 = {tenBooks.li3.Title}
        li2= {tenBooks.li3.Subtitle}
        li3 = {tenBooks.li3.Information}
        />
        <UList className= "Wrapper4"
        BackgroundColor = {backgroundObject.li4}
        li1 = {tenBooks.li4.Title}
        li2= {tenBooks.li4.Subtitle}
        li3 = {tenBooks.li4.Information}
        />
        <UList className= "Wrapper5"
        BackgroundColor = {backgroundObject.li5}
        li1 = {tenBooks.li5.Title}
        li2= {tenBooks.li5.Subtitle}
        li3 = {tenBooks.li5.Information}
        />
        <UList className= "Wrapper6"
        BackgroundColor = {backgroundObject.li6}
        li1 = {tenBooks.li6.Title}
        li2= {tenBooks.li6.Subtitle}
        li3 = {tenBooks.li6.Information}
        />
        <UList className= "Wrapper7"
        BackgroundColor = {backgroundObject.li7}
        li1 = {tenBooks.li7.Title}
        li2= {tenBooks.li7.Subtitle}
        li3 = {tenBooks.li7.Information}
        />
        <UList className= "Wrapper8"
        BackgroundColor = {backgroundObject.li8}
        li1 = {tenBooks.li8.Title}
        li2= {tenBooks.li8.Subtitle}
        li3 = {tenBooks.li8.Information}
        />
        <UList className= "Wrapper9"
        BackgroundColor = {backgroundObject.li9}
        li1 = {tenBooks.li9.Title}
        li2= {tenBooks.li9.Subtitle}
        li3 = {tenBooks.li9.Information}
        />
        <UList className= "Wrapper10"
        BackgroundColor = {backgroundObject.li10}
        li1 = {tenBooks.li10.Title}
        li2= {tenBooks.li10.Subtitle}
        li3 = {tenBooks.li10.Information}
        />
                
        </div>
    )
}

export default Home