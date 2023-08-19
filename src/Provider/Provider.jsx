import { v4 as uuidv4 } from 'uuid'
import { createContext } from "react";

const bbdd = {
    header : {

        menu : [
            { id : uuidv4() , title : "Home"         , href :"#"},
            { id : uuidv4() , title : "Movies "      , href :"#"},
            { id : uuidv4() , title : "Games"        , href :"#"},
            { id : uuidv4() , title : "Experiences " , href :"#"},
            { id : uuidv4() , title : "Experiences"  , href :"#"},
            { id : uuidv4() , title : "Community"    , href :"#"},
            { id : uuidv4() , title : "Publishing"   , href :"#"},
            { id : uuidv4() , title : "Partnerships" , href :"#"},
            { id : uuidv4() , title : "Our Team"     , href :"#"},
        ] ,
        rrss : [
            { id : uuidv4() , title : 'Facebook'  , href : '#' , icono : 'facebook'},
            { id : uuidv4() , title : 'Twitter'   , href : '#' , icono : 'twitter'},
            { id : uuidv4() , title : 'Instagram' , href : '#' , icono : 'instagram'},
            { id : uuidv4() , title : 'Youtube'   , href : '#' , icono : 'youtube'},
        ]
    },
    hero : {
        h2 : 'Avatar the way of water',
        claim : 'Watch the brand-new trailer and experience Avatar: The Way of Water in 3D on December 16.'
        ,
        buttons : [
            { id : uuidv4() , title : 'Get tickets'   , href : '#'},
            { id : uuidv4() , title : 'Watch Trailer' , href : '#'},
        ],
        tools: [
            { id: uuidv4(), title: 'Html', href: './img/Logos/html.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Css', href: './img/Logos/css.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Bootstrap', href: './img/Logos/bootstrap.jpg', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Github', href: './img/Logos/GitHub.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Javascript', href: './img/Logos/javascrip.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'MySQL', href: './img/Logos/mysql.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Netlify', href: './img/Logos/Netlify.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Node.js', href: './img/Logos/nodeJs.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'React', href: './img/Logos/react.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Sass', href: './img/Logos/sass.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'SQL Server', href: './img/Logos/sql-server.png', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Vite', href: './img/Logos/vite.jpg', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Visual Studio', href: './img/Logos/VisualStudio.jpg', resumen: 'This is the description of the card.' },
            { id: uuidv4(), title: 'Trello', href: './img/Logos/trello.png', resumen: 'This is the description of the card.' }
          ],
    }
}
export const GlobalContext = createContext(bbdd)

export const Provider = ({children})=>{
    <GlobalContext.Provider value={bbdd}>
        {children}
    </GlobalContext.Provider>
}