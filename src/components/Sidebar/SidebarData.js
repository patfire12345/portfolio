import React from 'react';
import Resume from "../../ResumePDF.pdf";
import {AiFillLinkedin as LinkedIn} from 'react-icons/ai';
import {MarkGithubIcon as Github} from '@primer/octicons-react';
import {MailIcon as Email} from '@primer/octicons-react';
import {FileIcon as File} from '@primer/octicons-react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


// Items on the sidebar
export const SidebarData = [
    {
        title: 'Github',
        path: 'https://github.com/patfire12345',
        icon: <Github/>,
        cName: 'nav-text'
    },
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/patrickhuang9',
        icon: <LinkedIn/>,
        cName: 'nav-text'
    },
    {
        title: 'Email',
        path: 'mailto:phuan097@uottawa.ca',
        icon: <Email/>,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: Resume,
        icon: <File/>,
        cName: 'nav-text'
    },
    {
        title: 'Original Code',
        path: 'https://github.com/patfire12345/portfolio',
        icon: <Github/>,
        cName: 'nav-text'
    },
]