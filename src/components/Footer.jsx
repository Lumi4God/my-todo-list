import React from 'react'
import {FaGithubSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaYoutubeSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <small><i>lumicode</i> 2022</small>
        <a className="anchor1" href="https://github.com/Lumi4God" target="_blank" rel="noopener noreferrer"><FaGithubSquare className="git"/></a>
        <a className="anchor2" href="https://www.linkedin.com/in/olumide-jones-ab2031215/" target="_blank" rel="noopener noreferrer"><BsLinkedin className="in"/></a>
        <a className="anchor3" href="https://www.youtube.com/channel/UCsbn5F9Ao1KAZwoUXjlpNGQ" target="_blank" rel="noopener noreferrer"><FaYoutubeSquare className="tube"/></a>
        <a className="anchor4" href="https://www.instagram.com/tribe_of_jones/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className="gram"/></a>
    </div>
  )
}

export default Footer